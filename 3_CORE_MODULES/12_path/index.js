const path = require('path');

const customPath = '/relatorios/jessica/relatorio1.pdf';

console.log(path.dirname(customPath)); //caminho para chegar no arquivo
console.log(path.basename(customPath)); // nome do arquivo
console.log(path.extname(customPath)); // extensão do arquivo