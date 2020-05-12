// from data.js
var tableData = data;

// select  position in html code where we want the table to be placed
var tbody = d3.select('tbody');

// create function to iterate through the table, creating a new table row for each data row
function displayData(data) {

  // Clear existing data
  tbody.html("");

  // iterate through data.js and print as html table
  data.forEach((value) => {
    var row = tbody.append('tr');
    Object.entries(value).forEach(([key, value]) => {
      var cell = row.append('td').text(value);
    });
  });
}

// Display tableData when page loads
displayData(tableData)

// select button id from html
var button = d3.select('#filter-btn');
// Select form used for entering date to filter
var form = d3.select("#form");

// Create event handlers
button.on('click', runEnter);
form.on('submit', runEnter);

// Create function to handle the events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Define variable for input date and select id that stores the date
  var dateInput = d3.select('#datetime').property('value');
  console.log(dateInput);

  // Check if dateInput exists and save as an object
  var filterTable = tableData.filter(row => row.datetime===dateInput);
  console.log(filterTable);

  // Display desired data
  displayData(filterTable);

  // If there is no matching data, print error message
  // Below code thanks to help from Brian
  if (filterTable.length == 0) {
    console.log('There is no data matching your search.')
    d3.select('tbody')
    .append('tr')
    .append('td')
      .attr('colspan', 7)
      .html('<h4>There is no data matching your search.</h4>');
  }
}