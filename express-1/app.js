const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<b>Hello World!</b><br>Welcome to my Express app!</br>')
})

app.get('/home', (req, res) => {
  res.render(`home`,{"mya" : "akash"})
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})

app.get('/product/:id/' , (req , res) => {
  var id = req.params.id;
  res.send("product id is" +id); 
})

app.get("/search/" , (req, res) => {
  var query = req.query.q;
  res.send("search query value is" + query);
})

app.get("/sumdemo" , (req, res) => {
  res.sendFile(__dirname + '/sumdemo.html');
})

app.get(`/sumprocess`, (req , res) => {
  var q = req.query.q; 
  var a = parseInt(req.query.num1);
  var b = parseInt(req.query.num2);
  var sum = a + b;
  res.send(`Value of a is ${a} <br/> and value of b is ${b} <br/> and sum is ${sum}`);
})

app.set('views', __dirname + `/views`);
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
  res.render('home', {"mya": "Shrey lakhataria"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log('Server running at http://127.0.0.1:3000/');