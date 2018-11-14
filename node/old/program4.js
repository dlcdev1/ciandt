var fs = require('fs')
var files = process.argv[2];
fs.readFile(files, 'utf8', (err, data)=>{
    if(err) throw err;
        var lines = data.split('\n').length -1
        console.log(lines)  
    })
