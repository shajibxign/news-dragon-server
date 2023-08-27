const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

const categories = require('./categories.json')
const news = require('./news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Working Properly')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
  const id = req.params.id;  
  const selectedNews = news.find( n => n._id === id);
  res.send(selectedNews)
})

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;  
  console.log(id);
  const categoryNews = news.filter( n => n.category_id == id);
  if (id == 0) {
    res.send(news)
  }
  else res.send(categoryNews)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})