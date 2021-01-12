function show_tree(city, div_id){
    
    // set the dimensions and margin_trees of the graph
    var margin_tree = {top: 10, right: 10, bottom: 10, left: 10},
      width_tree = 730 - margin_tree.left - margin_tree.right,
      height_tree = 600 - margin_tree.top - margin_tree.bottom;
    
    // append the svg object to the body of the page
    var svg_tree = d3.select("#"+div_id)
    .append("svg")
      .attr("width", width_tree + margin_tree.left + margin_tree.right)
      .attr("height", height_tree + margin_tree.top + margin_tree.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin_tree.left + "," + margin_tree.top + ")");

    var items_children = "";
    Object.keys(categories_data).forEach(function(key) {
    if(["transportation","childcare","leisure","clothing","markets", "utilities", "restaurants"].includes(key)){
      return;
    }
        for(const i in categories_data[key]){
        items_children = items_children + categories_data[key][i] +"," + key + "," + json_data[city][key][categories_data[key][i]] + "\n";
          }
    })
    
    var data_csv = header_text +"\n" + items_children;
    var data_parsed = d3.csvParse(data_csv);
    
    //console.log(typeof data_parsed);
    //console.log(data_parsed);

    // Read data
    d3.csv('https://raw.githubusercontent.com/ngabor826/data_repo/main/treemap.csv', function(data) {

      //console.log(typeof data);
      data = data_parsed;

      // stratify the data: reformatting for d3.js
      var root_tree = d3.stratify()
        .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
        .parentId(function(d) { return d.parent; })   // Name of the parent (column name is parent in csv)
        (data);
        root_tree.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

      console.log(root_tree);
    
      // Then d3.treemap computes the position of each element of the hierarchy
      // The coordinates are added to the root object above
      /*d3.treemap()
        .size([width_tree, height_tree])
        .padding(4)
        (root_tree)*/

    d3.treemap()
    .size([width_tree, height_tree])
    .paddingTop(28)
    .paddingRight(7)
    .paddingInner(3)      // Padding between each rectangle
    //.paddingOuter(6)
    //.padding(20)
    (root_tree)
    
    //console.log(root_tree.leaves())
    // use this information to add rectangles:
    var color = d3.scaleOrdinal()
    .domain(["boss1", "boss2", "boss3"])
    .range([ "#402D54", "#D18975", "#8FD175"])

    // And a opacity scale
    var opacity = d3.scaleLinear()
      .domain([10, 30])
      .range([.5,1])

    function name_moderating(name){
    switch (name) {
      case 'net_salary':
        name = "salary";
      break;
      case 'ap_1bedroom_center':
        name = "1 bedroom\ncenter";
      break;
      case 'ap_1bedroom_outside':
        name = "1 bedroom\nout.";
      break;
      case 'ap_3bedroom_center':
        name = "3 bedroom\ncenter";
      break;
      case 'ap_3bedroom_outside':
        name = "3 bedroom\noutside";
      break;
      case 'buy_apartment_center':
        name = "apartment\ncenter";
      break;
      case 'buy_apartment_outside':
        name = "apartment\noutside";
      break;}
      return name;
    }

    // use this information to add rectangles:
    svg_tree
      .selectAll("rect")
      .data(root_tree.leaves())
      .enter()
      .append("rect")
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
        .style("stroke", "black")
        .style("fill", function(d){ return color(d.parent.data.name)} )
        .style("opacity", function(d){ return opacity(d.data.value)})

    // and to add the text labels
    svg_tree
      .selectAll("text")
      .data(root_tree.leaves())
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
        .text(function(d){ return name_moderating(d.data.name)})
        //.attr('transform', function(d){ return 'rotate(45 ' + d.x0 + ' ' + d.y0  + ')'} )
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "white")
        

    // and to add the text labels
    svg_tree
      .selectAll("vals")
      .data(root_tree.leaves())
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+35})    // +20 to adjust position (lower)
        .text(function(d){ return d.data.value + " €" })
        .attr("font-size", "11px")
        .attr("fill", "white")

    // Add title for the 3 groups
    svg_tree
      .selectAll("titles")
      .data(root_tree.descendants().filter(function(d){return d.depth==1}))
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0})
        .attr("y", function(d){ return d.y0+21})
        .text(function(d){ return d.data.name })
        .attr("font-size", "19px")
        .attr("fill",  function(d){ return color(d.data.name)} )

    // Add title for the 3 groups
    svg_tree
      .append("text")
        .attr("x", 0)
        .attr("y", 14)    // +20 to adjust position (lower)
        .attr("font-size", "19px")
        .attr("fill",  "grey" )

    })
}