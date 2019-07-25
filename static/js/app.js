// from data.js
var tableData = data;

// D3 handle on tbody
var tbody = d3.select("tbody");

// function for creating table and filling with data
function createTable(data) {
  data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// First create table from ALL table data
createTable(tableData);

// D3 handle on "Filter Table" button
var submit = d3.select("#filter-btn");
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear table body
  tbody.html("");

  // Get the "value" from of the input element (datetime form)
  var inputValue = d3.select("#datetime").property("value");
  
  // Filter data by input datetime and create table
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  createTable(filteredData);
});