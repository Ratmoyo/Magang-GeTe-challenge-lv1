const express = require('express')
const app = express()
const port = 3012

//import file routes
const routerUsers = require('./routes/users')

//load routes
app.use('/', routerUsers)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})