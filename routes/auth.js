const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const multer = require('multer');
const upload = multer({dest: './public/assets'});
const bcrypt = require('bcrypt');

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

router.get('/profile', isAuthenticated, (req,res, next)=>{
    User.findById(req.user._id)
    .populate('profile')
    .populate('products')
    .then(user=>{
        res.send(user);
    })
    .catch(e=>next(e))
});

router.get('/logout', (req,res,next)=>{
    req.logout();
    res.send('Sesión cerrada');
    // req.session.destroy(()=>{
    //     res.redirect('/login');
    // })

});

module.exports = router;