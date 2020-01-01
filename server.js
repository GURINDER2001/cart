    
const express = require('express')
const session = require('express-session')
const passport = require('./passport')
const path = require('path')

const app = express()

app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
    
app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())
onst SERVER_PORT= process.env.PORT ||9876
app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))
app.use('/', require('./routes/root'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(SERVER_PORT, () => console.log("Server running on http://localhost:"+SERVER_PORT))