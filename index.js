const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())

const jsonParser = bodyParser.json()
app.use(jsonParser)

const port = process.env.PORT || 4000

function onListen () {
    console.log(`Listen on: ${port}`);
}

app.listen(port, onListen)
