const app = require('./index')
const port = process.env.PORT || 8081
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})