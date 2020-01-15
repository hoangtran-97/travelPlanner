const projectData = { "hello": "this is server" }
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const port = 8081
app.use(bodyParser.json())
app.use(cors());
app.use(express.static('dist'))
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
app.get("/all", getAll)
function getAll(request, response) {
    response.send(projectData)
}