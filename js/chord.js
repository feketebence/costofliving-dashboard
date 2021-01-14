var margin = {left:90, top:90, right:90, bottom:90},
      width =  700 - margin.left - margin.right, // more flexibility: Math.min(window.innerWidth, 1000)
      height =  700 - margin.top - margin.bottom, // same: Math.min(window.innerWidth, 1000)
      innerRadius = Math.min(width, height) * .39,
      outerRadius = innerRadius * 1.1;

    var names = ["Africa","East A","Europe","FMR S.U.","Latin America", "N.Ame", "O" ,"South Asia","South-East Asia","W.Asia"],
      colors = ["#301E1E", "#083E77", "#342350", "#567235", "#8B161C", "#DF7C00", "#DC143C","#008B8B","#808000","#2E8B57"],
      opacityDefault = 0.8;
	  
    var matrix = [
        [3832478,3230,2107883,4860,12316,540887,155988,288,916,673004], //Africa
        [17092,781316,468762,65366,35142,98871,278746,117,145264,2581], //East Asia
        [176905,5211,2401476,37517,16414,61217,127437,14,6748,136131], //Europe
        [1701,5625,609230,1870501,733,21283,1137,5428,86,22341],       // FMR Soviet U.
        [22652,112180,1762587,10553,879198,3627847,36031,365,2545,38714], // Latin A.
        [63080,39145,1215929,112823,276908,96102,52303,158,41758,130359], // N. America
        [4747,5659,170370,5181,1785,27137,190706,5,11883,11316], // Oceania
        [63471,73599,1390272,15999,6734,1508008,347420,1307907,525881,4902081], //South Asia
        [25580,380388,601265,8159,6080,973060,333608,59126,1630997,869311], //South-East Asia
        [135106,386,449623,67967,9437,169274,39692,13532,3137,927243] // W. Asia
    
    ];

   // Create scale and layout functions 
  
    var colors = d3.scaleOrdinal()
        .domain(d3.range(names.length))
      .range(colors);

    var chord = d3.chord()
      .padAngle(.15)
      .sortChords(d3.descending)

    var arc = d3.arc()
      .innerRadius(innerRadius*1.01)
      .outerRadius(outerRadius);

    var path = d3.ribbon()
    .radius(innerRadius);

    //Create SVG
        
    var svg_chord = d3.select("#chord").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + (width/2 + margin.left) + "," + (height/2 + margin.top) + ")")
    .datum(chord(matrix));

    //draw outer arcs 
 

    var outerArcs = svg_chord.selectAll("g.group")
    .data(function(chords) { return chords.groups; })
    .enter().append("g")
    .attr("class", "group")
    .on("mouseover", fade(.1))
    .on("mouseout", fade(opacityDefault));
        
    //tooltip
        
    var tip = d3.tip()
                .attr("class", "d3-tip_chord")
                .offset([-10, 0])
                .html(function(d,i) {
                        fade_arc(.1);
                       return names[d.source.index] + " -> " + names[d.target.index] + ": " + matrix[d.source.index][d.target.index] + "<br>" +
                                names[d.target.index] + " -> " + names[d.source.index] + ": " + matrix[d.target.index][d.source.index]
                       

                });
    svg_chord.call(tip);

  //Append the label names INSIDE outside
  outerArcs.append("path")
    .style("fill", function(d) { return colors(d.index); })
    .attr("id", function(d, i) { return "group" + d.index; })
    .attr("d", arc);

   outerArcs.append("text")
            .attr("x", 1)
            .attr("y", 10)
            .attr("dx", .7)
            .attr("dy", 16)
            .append("textPath")
            .attr("href", function(d) { return "#group" + d.index;})
            .text(function(chords, i){return names[i];})
            .style("fill", "white");

  // Draw inner chords 
   
  mouseover = "tooltipOn() ; fade_true()";      
  
  svg_chord.selectAll("path.chord")
    .data(function(chords) { return chords; })
    .enter().append("path")
    .attr("class", "chord")
    .style("fill", function(d) { return colors(d.source.index); })
    .style("opacity", opacityDefault)
    .attr("d", path)
    .on("mouseover",fade_arc(.1)).attr("cursor", "crosshair")
    .on("mouseout", fade_arc(opacityDefault))
    .on("click", tip.show);

  //Returns an event handler for fading a given chord group.
  function fade(opacity) {
    return function(d,i) {
      svg_chord.selectAll("path.chord")
          .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
          .style("opacity", opacity);
    };
  }
    
  function fade_arc(opacity){
        return function(d, i){
            svg_chord.selectAll("path.chord")
                    .filter(function(d,j) { return j!=i; })
                    .transition()
                    .style("opacity", opacity);
        };
  }
        
function tooltipOn(){
        tip.show;
        fade_arc(.1)
  }

  function fade_true(){
      fade_arc(.1)
  }