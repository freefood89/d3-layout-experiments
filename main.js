var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);

d3.json("sample.json", function(error, graph) {
  if (error) throw error;

  var node = svg.selectAll("g")
    .data(graph.nodes)

  var g = node.enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function(d){return "translate("+30*d.id+","+height/2+")"})
  
  g.append("circle")
      .attr("r", 15)
      .attr("fill", 'none')
      .attr("stroke", 'black')

  g.append("text")
      .attr("dx", function(d){return 0})
      .attr("text-anchor", 'middle')
      .attr("alignment-baseline", 'middle')
      .text(function(d) { return d.title })

});
