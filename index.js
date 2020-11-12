const express = require('express')
const app = express()
const port = 3012

//import file routes
const routerUsers = require('./routes/users')
const routerAuth = require('./routes/auth')


//load routes
app.use('/user', routerUsers)
app.use('/login', routerAuth)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})