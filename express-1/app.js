const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<b>Hello World!</b><br>Welcome to my Express app!</br>')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log('Server running at http://127.0.0.1:3000/');