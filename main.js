//const data = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const data = 'gdp.json';
const request = new Request(data);
let gdp = [];


/*fetch(request)
  .then(function(response) { return response.json(); })
  .then(function(data) {
    gpp = data.data;
  });
  */


fetch(request, {
  mode: 'no-cors'
}).then(function(response) { return response.json(); })
  .then(function(data) {
    gpp = data.data;
    console.log(gdp);
  });

//var data = [4, 8, 15, 16, 23, 42];

/*d3.select("#bar-chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });*/


Gilbert 
