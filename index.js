require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000


app.get('/login', (req, res) => {
    res.send("hello world")
})

app.get('/twitter', (req, res) => {
    res.send("twitter world")
})

app.get('/', (req, res) => {
    res.send('<h1>Please Login at BackEnd started series</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`) 
})