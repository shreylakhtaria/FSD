var http = require("http")
var fs = require('fs')
const { console } = require("inspector")

http.createServer((req,res)=> {
    // Read File
    fs.readFile("demo.html",'UTF-8', function(err,data){
        console.log(data)
        res.end(data)
    })
}).listen(5000)
console.log("you server is started: http://127.0.0.1:5000");