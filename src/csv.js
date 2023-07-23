const xlsx = require("xlsx");
const fs = require("fs");

function manipulateCSV(fileName) {
    // há duas maneira de ler o arquivo
    // primeira é passando o conteudo para o método reade
    const data = fs.readFileSync(fileName);
    const worksheet = xlsx.read(data, { raw: true });
    // o segundo, mais lento, é usando o método readFile
    // const worksheet1 = xlsx.readFile(filename)
    const content = worksheet.Sheets[worksheet.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(content);
    return rows;
}

module.exports = { manipulateCSV };