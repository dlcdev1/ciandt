/*Para realizar uma operação de sistema de arquivos (filesystem), você vai  
precisar do módulo fs da library principal do Node. Para carregar esse  
tipo de módulo ou qualquer outro módulo "global", use o seguinte código:  
*/
var fs = require('fs')  


//fs.readFileSync retorna um buffer contendo o conteudo completo do arquivo
var contents = fs.readFileSync(process.argv[2])

//retornar o objeto e tranforma em string .toString()
//split divide a string em um arry 
var lines = contents.toString().split('\n').length -1
console.log(lines)


