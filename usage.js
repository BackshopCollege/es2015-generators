var Table = require('cli-table');

var table = new Table({
  head: ['Example', 'Description'], 
  colWidths: [25, 45]
});

table.push(
  [ 'webservice', 'Fetching data from ws and writing to file'],
  [ 'read-file', 'reading file' ],
  [ 'error-handling', 'using try catch to handle errors' ],
  [ 'basic', 'generator syntax']
);

console.log(table.toString());

