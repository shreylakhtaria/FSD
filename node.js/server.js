var http = require('http');
var a = 10;
var v = 20;
var b = a + v;
var msg = ''
if (b==30){
    msg = "C value is 30"
}
else {
    msg = "C value is not 30"
}
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World\n');
    res.write("<b>Hello</b>");
    res.end();
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
