const xlsx = require("xlsx");

function manipulateXLSX(fileName) {
    const worksheet = xlsx.readFile(fileName, { cellDates: true });
    const content = worksheet.Sheets[worksheet.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(content);
    return rows;
}

function manipulateXLSXWithoutParsing(fileName) {
    const worksheet = xlsx.readFile(fileName,);
    const content = worksheet.Sheets[worksheet.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(content, { raw: false });
    return rows;
}

module.exports = { manipulateXLSX, manipulateXLSXWithoutParsing };