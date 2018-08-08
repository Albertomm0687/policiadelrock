const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const multer = require('multer');
const upload = multer({dest: './public/assets'});
const bcrypt = require('bcrypt');

function authenticate(req,res,next){
    passport.use(User.createStrategy());
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    
}
function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        return next()
    }else{
        res.json({message:"Acceso Denegado"});
    }
}

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/private')
    }else{
        next();
    }
}

router.post("/user/signup", (req, res, next) => {
    console.log("Has entrado")
    console.log(req.body)
    User.register(req.body, req.body.password)
      .then(user => {
        res.json(user);
      })
      .catch(e => next(e));
   });

// router.get('/profile', isAuthenticated, (req,res, next)=>{
//     User.findById(req.user._id)
//     .populate('profile')
//     .populate('blogs')
//     .then(user=>{
//         res.send(user);
//     })
//     .catch(e=>next(e))
// });

router.post('/user/login', passport.authenticate('local'), (req,res,next)=>{
    console.log("pasaste")
    res.send(req.user)
});

router.get('/logout', (req,res,next)=>{
    req.logout();
    res.send('Sesión cerrada');

});

module.exports = router;