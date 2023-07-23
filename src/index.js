// const { manipulateCSV } = require('./csv');
// const { writeFileSync } = require("fs");
const { manipulateXLSX, manipulateXLSXWithoutParsing } = require('./xlsx');

// const fileName = "/../teste.csv";
// const csv = manipulateCSV(__dirname + fileName);
// const xlsx = manipulateXLSX(__dirname + fileName);

// writeFileSync("csv-to-json.json", JSON.stringify(csv), { encoding: "utf-8" });
// writeFileSync("xlsx-to-json.json", JSON.stringify(xlsx), { encoding: "utf-8" });

console.log(manipulateXLSX(__dirname + "/../teste-funcoes.xlsx"));
console.log(manipulateXLSXWithoutParsing(__dirname + "/../teste-funcoes.xlsx"));

// escreve uma worksheet num xlsx
// xlsx.writeFileXLSX(worksheet, "teste.xlsx");