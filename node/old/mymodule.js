const filter = require('./program6.js')
const folder = process.argv[2]
const ext = process.argv[3];

filter(folder, ext,(err,data) => {
    if(err) return console.error(err)
    data.forEach( file => {
        console.log(file)

    })
})