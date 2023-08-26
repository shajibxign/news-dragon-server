const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

const categories = require('./categories.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})