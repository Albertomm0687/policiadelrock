const express = require('express')
const router = express.Router()
const Band = require('../models/Band')

router.get('/', (req, res) => {
    Band.find(req.body)
       .then(band => {
           return res.status(200).json(band);                      
       })
       .catch(e => next(e))
});

router.post('/',  (req, res) => {
    console.log(req.body)
    Band.create(req.body)
       .then(band => {
           return res.status(201).json(band)
       })
       .catch(err => {
           return res.status(500).json(err)
       })
                       
})

router.get('/:id', (req, res) => {
    Band.findById(req.params.id)
       .then(band => {
           if (!band) return res.status(404)
           return res.status(200).json(band);
       })
       .catch(err => {
           return res.status(500).json(err);
       });
});

router.put('/:id', (req, res, next) => {
    Band.findByIdAndUpdate(req.params.id, req.body, { new: true })
       .then(band => {
           return res.status(202).json(band)
       }).catch(err => {
           return res.status(404).json(err);
       });

})

router.delete('/:id', (req, res, next) => {
    Band.findByIdAndRemove(req.params.id)
       .then(band => {
           res.status(200).json(band)
       })
       .catch(e=>{
           res.status(500).json({message:"Algo salio mal"})
           next(e)
       });
});

module.exports = router