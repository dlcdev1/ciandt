var fs = require('fs');
let path = process.argv[2];
let extension = process.argv[3];

let callback = function(err, files) {
    if (!err) {
        let filteredList = files.filter(function(item) {
                 
            var lines = item.split('.');
            return lines[1] === extension;
            
        })

        filteredList.forEach(function(item){
            console.log(item);
        });        
    }
}
fs.readdir(path, callback);


