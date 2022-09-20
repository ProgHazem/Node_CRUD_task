import express from 'express'
const app = express()
var bodyParser = require('body-parser');
app.use(express.static('public'));
const port = 8080
app.get('/', (_, res) => {
  res.status(200).send()
})
app.listen(port, () => console.log(`Running on port ${port}`))