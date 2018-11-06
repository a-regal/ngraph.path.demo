const fs = require('fs');
const csv = require('fast-csv');

let pois = [];

fs.createReadStream('./static/Combined_SH.csv')
  .pipe(csv())
  .on('data', function(data) {
    pois.push(data);
  })
  .on('end', function(data){
    console.log('Loading finished')
    console.log(pois)
  })
