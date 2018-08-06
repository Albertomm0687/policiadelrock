const express = require('express')
const router = express.Router()
const Bands = require('../models/Bands')

// router.get('/', (req, res) => {
//     Bands.find(req.body)
//        .then(bands => {
//            return res.status(200).json(bands);                      
//        })
//        .catch(e => next(e))
// });

router.post('/',  (req, res) => {
    Bands.create(req.body)
       .then(bands => {
           return res.status(201).json(bands)
       })
       .catch(err => {
           return res.status(500).json(err)
       })
                       
})

router.get('/:id', (req, res) => {
    Bands.findById(req.params.id)
       .then(bands => {
           if (!bands) return res.status(404)
           return res.status(200).json(bands);
       })
       .catch(err => {
           return res.status(500).json(err);
       });
});

router.put('/:id', (req, res, next) => {
    Bands.findByIdAndUpdate(req.params.id, req.body, { new: true })
       .then(bands => {
           return res.status(202).json(bands)
       }).catch(err => {
           return res.status(404).json(err);
       });

})

router.delete('/:id', (req, res, next) => {
    Bands.findByIdAndRemove(req.params.id)
       .then(bands => {
           res.status(200).json(bands)
       })
       .catch(e=>{
           res.status(500).json({message:"Algo salio mal"})
           next(e)
       });
});

module.exports = router