// from data.js
var tableData = data;

// select  position in html code where we want the table to be placed
var tbody = d3.select("tbody");

// iterate through the table, creating a new table row for each data row
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// select button id from html
var button = d3.select('#filter-btn');
// Select form used for entering date to filter
var form = d3.select("#form");

// Create event handlers for button
button.on('click', runEnter);
form.on('submit', runEnter);

// Create function to handle the events
function runEnter() {
  d3.event.preventDefault();
  // Prevent the page from refreshing
  var dateInput = d3.select('#datetime');
  // Define variable for input date and select id that stores the date
  var valueDateInput = dateInput.property('value');
  console.log(valueDateInput);
  // Define variable for value property of input date
  var filterTable = tableData.filter(info => info.datetime === valueDateInput);
  console.log(filterTable);
  filterTable.map()

}