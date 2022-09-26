const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const inputFile = path.resolve(__dirname, "./csv/input_example.csv");
const csvWriter = createCsvWriter({
    path: path.resolve(__dirname, "./csv/0_input_file_name.csv"),
    header: [
        {id: 'name', title: 'name'},
        {id: 'quantity', title: 'quantity'},
    ]
});
const csvWriter2 = createCsvWriter({
    path: path.resolve(__dirname, "./csv/1_input_file_name.csv"),
    header: [
        {id: 'name', title: 'name'},
        {id: 'brand', title: 'brand'},
    ]
});
const result = [];

fs.createReadStream(inputFile)
    .pipe(csvParser())
    .on("data", (data) => {
        result.push(data);
    })
    .on("end", () => {
        const result1 = {};
        const csv1 = [];
        const csv2 = [];
        const result2 = [];
        const result2CSV = {};
        result.map((row) => {
            result1[row.name] ? result1[row.name] += parseInt(row.quantity) : result1[row.name] = parseInt(row.quantity);
            if (result2.length > 0){
                result2.map((resRow, index) => {
                    if (row.name === resRow.name &&  row.brand === resRow.brand) {
                         result2[index] = {...resRow, quantity: resRow.quantity + 1}
                        return result2
                    }else{
                        result2.push({name: row.name, brand: row.brand, quantity: 1})
                    }
                })
            }else{
                result2.push({name: row.name, brand: row.brand, quantity: 1})
            }
        })
        result2.pop()
        result2.sort( compare ).map((row) => {
            if (result2CSV[row.name]){
                console.log()
            }else{
                result2CSV[row.name] = row.brand
            }
        })
        for (const key in result1) {
            csv1.push({name: key, quantity: (result1[key] / result.length)})
        }

        for (const key in result2CSV) {
            csv2.push({name: key, brand: result2CSV[key]})
        }
        csvWriter
            .writeRecords(csv1)
            .then(()=> console.log('The CSV file was written successfully'));
        csvWriter2
            .writeRecords(csv2)
            .then(()=> console.log('The CSV file was written successfully'));
    });


function compare( a, b ) {
    if ( a.quantity > b.quantity ){
        return -1;
    }
    if ( a.quantity < b.quantity ){
        return 1;
    }
    return 0;
}





