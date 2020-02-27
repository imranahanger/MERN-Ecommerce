const express = require('express')
const app = express()
require("dotenv").config()


app.get('/', async (req, res) => {
    res.send("Hello world")
})


const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})