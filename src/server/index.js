const projectData = { "hello": "this is server" }
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const port = 8081
const dotenv = require('dotenv');
dotenv.config();
const keys = {
    GEONAMES_USERNAME: process.env.KEY_USERNAME,
    DARKSKY_KEY: process.env.KEY_DARKSKY,
    PIXABAY_KEY: process.env.KEY_PIXABAY
}
app.use(bodyParser.json())
app.use(cors());
app.use(express.static('dist'))
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
app.get("/all", getAll)
app.get("/keys", getKeys)
app.post("/destination", postDestination)

function getAll(request, response) {
    response.send(projectData)
}

function getKeys(request, response) {
    response.send(keys)
}

function postDestination(request, response) {

}