const route = require('express').Router()
const passport = require('../passport')
const Users = require('../db').Users

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})
route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/private'
}))

route.get('/logout', function(req, res){
    if(req.user!=undefined){ 
    console.log("logging out");
    
    req.logout();
    res.redirect('/');
    }
    else{ 
   console.log("nouser");
   
    res.redirect('/login')
    }
  })

route.post('/signup', (req, res) => {
    Users.create ({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then((createdUser) => {
        res.redirect('/login')
    })
})

exports = module.exports = route