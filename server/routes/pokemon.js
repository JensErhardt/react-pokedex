var express = require('express');
const axios = require('axios');

var router = express.Router();

// Route to get Pokemon
router.get('/', (req, res, next) => {
  console.log("DEBUG pokeRoute '/'")
  for (let i = 0; i < 25; i++) {
    let pokeHttp = Math.floor((Math.random() * 500) + 1);
    axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeHttp}/`)
      .then(pokeData => {
        console.log("DEBUG pokeData")
        let pokemon = {
          name: pokeData.data.name,
          weight: pokeData.data.weight,
          sprites: {
            back: pokeData.data.sprites.back_default,
            front: pokeData.data.sprites.front_default,
          }
        }
        res.json(pokemon)
      })
      .catch(err => next(err))
    }
  })


module.exports = router;