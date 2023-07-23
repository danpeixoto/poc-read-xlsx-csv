# POC para a conversão de tabelas para json

A lib SheetJS permite a manipulação de diversos formatos com simplicidade, incluindo CSV e XLSX.

## Resultados

A conversão de CSVs é simples, já que é só converter os dados para json sem a necessidade de aplicar formatações.
Porém, ao fazer conversões de XLSX devemos tomar alguns cuidados com dados formatados (data, valores, etc...). Por isso
há duas opcões de realizar a conversão.

A primeira é obter os dados no formato de texto, sem aplicar nenhuma conversão.
```JSON
[
  {
    linha1: '1',
    linha2: '2',
    resultado: '3',
    data: '19/09/1998',
    valor: ' 4.20 ',
    porcentagem: '1.00%'
  }
]
```
A segunda é deixar a lib converter os dados com base na formatação da célula. Porém, devemos utilizar a opção cellDate:true
para evitar que as datas sejam convertidas em números
```JSON
[
 {
    linha1: 1,
    linha2: 2,
    resultado: 3,
    data: 1998-09-19T03:00:28.000Z,
    valor: '4.20',
    porcentagem: 0.01
}
]
```