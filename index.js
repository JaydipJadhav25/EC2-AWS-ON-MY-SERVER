const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hey Everyone From Aws Server.')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})