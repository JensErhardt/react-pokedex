var express = require('express');
const axios = require('axios');
const Pokemon = require('../models/pokemon')

var router = express.Router();

// Get all pokemon from db
router.get('/', (req, res, next) => {

  Pokemon.find()
  .then(data => {
    res.json(data)
  })
  .catch(err => next(err))
});

// Bootstrap db
router.get('/call', (req, res, next) => {

  for (let i = 0; i < 25; i++) {
    const pokeHttp = Math.floor((Math.random() * 500) + 1);
    axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeHttp}/`)
      .then(result => {

        Pokemon.create({ 
          name: result.data.name,
          weight: result.data.weight,
          sprites: {
            back: result.data.sprites.back_default,
            front: result.data.sprites.front_default,
          }
        });
        console.log("DEBUG pokemon saved", i, pokeHttp);
      })
      .catch(err => next(err));
  };
})


module.exports = router;