const app = require('./index')
const port = process.env.PORT
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})