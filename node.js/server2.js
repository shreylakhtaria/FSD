var http = require("http");
http.createServer ((req , res) => {
    if (req.url == '/home'){
        res.end(`<h1> you are on home page </h1>`)
    }
    else if (req.url == "/about"){
        res.end(`<h1>you are on the about page</h1>`)
    }
    else {
        res.end (`<h1>Welcome Page</h1>`)
    }

}).listen(4000)
console.log("server is runnong on url : http://127.0.0.1:4000");
