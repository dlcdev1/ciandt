var fs = require('fs')
var path = require ('path')
//var folder = process.argv[2]
//var ext = '.' + process.argv[3]

module.exports = (folder, ext, callback) => {
    fs.readdir(folder, (err, files) => {
        if(err) return callback (err)
        const filtered = files.filter(file => (path.extname(file) === '.' + ext))    
    callback(null, filtered)
    })
}


