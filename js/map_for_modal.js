
let mapForModalContainer = document.querySelector("#map-for-modal");

var margin = { top: 0, right: 0, bottom: 0, left: 0 },
    width = mapForModalContainer.clientWidth - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/feketebence/costofliving-dashboard/main/data/world.json")
    .defer(d3.csv, "https://raw.githubusercontent.com/feketebence/costofliving-dashboard/main/data/city_index_coord.csv")
    .await(ready)

var canvas = d3.select("#map-for-modal").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "canvas")
    .call(d3.zoom().on("zoom",function(){
            canvas.attr("transform", d3.event.transform).transition().duration(100)
        }))
        .append("g");

var data1 = d3.json("https://raw.githubusercontent.com/feketebence/costofliving-dashboard/main/data/world.json")
var data2 = d3.csv("https://raw.githubusercontent.com/feketebence/costofliving-dashboard/main/data/city_index_coord.csv")

function ready(error, data1, data2) {

    var group = canvas.selectAll("g")
        .data(data1.features)
        .enter()
        .append("g");

    var projection = d3.geoMercator().scale(130).translate([width / 2, height / 1.5]);
    var path = d3.geoPath().projection(projection);

    var areas = group.append("path")
        .attr("d", path)
        .attr("class", "area")
        .attr("fill", "#8FBC8F")
        .attr("stroke", "black")

    var g = canvas.append("g")

    var colorScale = d3.scaleLinear()
        .domain([20, d3.max(data2, function (d) {
            return d.CoL;
        })])
        .range(["yellow", "red"]);

    var tip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-10, 0])
        .html(function (d) {

            return "City: " + d.City + "<br>" +
                "Country: " + d.Country + "<br>" +
                "Cost of Living Index: " + d.CoL;

        });


    canvas.call(tip);

    g.selectAll(".city-circle")
        .data(data2)
        .enter()
        .append("circle")
        .attr("stroke", "black")
        .attr("r", 6)
        .attr("cx", function (d) {
            var coordinates = projection([d.lon, d.lat])
            return coordinates[0];
        })
        .attr("cy", function (d) {
            var coordinates = projection([d.lon, d.lat])
            return coordinates[1];
        })
        .attr("fill", function (d) { return colorScale(d.CoL) }).style("opacity",.7)
        .on("mouseover", tip.show).attr("cursor", "crosshair")
        .on("mouseout", tip.hide);

    /*canvas.call(d3.zoom()
          .extent([[0, 0], [1500, 1500]])
          .scaleExtent([1, 8])
          .on("zoom", zoomed));
         
    
    function zoomed(){
        g.attr("transform", d3.event.transform).transition().duration(500);
        group.attr("transform", d3.event.transform).transition().duration(500);
    }*/

    /*var zoom = d3.behavior.zoom()
.on("zoom",function() {
    g.attr("transform","translate("+ 
        d3.event.translate.join(",")+")scale("+d3.event.scale+")");
    g.selectAll("circle")
        .attr("d", path.projection(projection));
    g.selectAll("path")  
        .attr("d", path.projection(projection)); 

});*/

    // canvas.call(zoom)

    /*var zoom = d3.zoom()
        .translate(projection.translate())
        .scale(projection.scale())
        .scaleExtent([height, 8 * height])
        .on("zoom", zoomed);
    
    function clicked(d) {
          var centroid = path.centroid(d),
              translate = projection.translate();

          projection.translate([
            translate[0] - centroid[0] + width / 2,
            translate[1] - centroid[1] + height / 2
            ]);
        
        zoom.translate(projection.translate());

    g.selectAll("path").transition()
        .duration(700)
    .attr("d", path); }
    
    function zoomed() {
      projection.translate(d3.event.translate).scale(d3.event.scale);
      g.selectAll("path").attr("d", path);
    }*/



}

