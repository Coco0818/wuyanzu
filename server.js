const express = require('express')

const app = express()

app.get('/category', (req, res) => {
  res.send('hello')
})

app.listen(3000, (err) => {
  console.log('服务器启动成功:http://localhost:3000')
})
