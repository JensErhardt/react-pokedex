var express = require('express');
const axios = require('axios');
const Pokemon = require('../models/pokemon')

var router = express.Router();

// Route to get Pokemon
router.get('/call', (req, res, next) => {
  console.log("DEBUG pokeRoute '/call'")
  for (let i = 0; i < 25; i++) {
    let pokeHttp = Math.floor((Math.random() * 500) + 1);
    axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeHttp}/`)
      .then(pokeData => {
        // console.log(pokeData.data)
        // console.log("DEBUG pokeData", pokeData.data.name, pokeData.data.weight, pokeData.data.sprites.front_default )
        // let pokemon = {
        //   name: pokeData.data.name,
        //   weight: pokeData.data.weight,
        //   sprites: {
        //     back: pokeData.data.sprites.back_default,
        //     front: pokeData.data.sprites.front_default,
        //   }
        // };
        Pokemon.create({ 
          name: pokeData.data.name,
          weight: pokeData.data.weight,
          sprites: {
            back: pokeData.data.sprites.back_default,
            front: pokeData.data.sprites.front_default,
          }
        })
        console.log("DEBUG pokemon saved", i, pokeHttp, pokemon.name)
      })
      .catch(err => next(err))
  }
})


module.exports = router;