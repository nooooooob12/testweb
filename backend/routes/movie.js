const express = require('express');
const router = express.Router();
const movies = require('../movies.json');
router.get('/', (req,res,next)=>{
   res.send(movies) 
});
router.get('/:id',(req,res,next)=>{
    let id = parseInt(req.params.id,10)
    let movie = movies.fillter((movie)=>{
        return movie.id === id;
    });
    res.send(movie)
});
module.exports = router;