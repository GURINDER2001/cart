const route = require('express').Router()

route.get('/', (req, res) => {
    if (req.user) {
        // return res.send("Visible to only logged in users")
    return res.redirect('/')
    } else {
        res.redirect('/login')
    }
})

exports = module.exports = route