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

// Get one pokemon by pokemonId from db
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  console.log("findOne", id)
});

// Bootstrap db
router.get('/strap/pokemon', (req, res, next) => {
  const MOBMAX = 150;

  for (let i = 1; i <= MOBMAX; i++) {
    axios.all([
      axios.get(`http://pokeapi.co/api/v2/pokemon/${i}/`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
    ])
      .then(axios.spread((resPokemon, resSpecies) => {
        const data = resPokemon.data;
        const spec = resSpecies.data;

        const types = [];
        for (const i in data.types) {
          types.push(data.types[i].type.name);
        }

        const stats = []; let stat;
        for (const i in data.stats) {
          stat = {
            name: data.stats[i].stat.name,
            base: data.stats[i].base_stat,
          }
          stats.push(stat);
        }

        const varieties = []; let varietie;
        for (const i in spec.varieties) {
          varietie = {
            name: spec.varieties[i].pokemon.name,
            url: spec.varieties[i].pokemon.url
          }
          varieties.push(varietie);
        }

        let evolvesFrom = "No evolution yet";
        if (spec.evolves_from_species === !null) {
          evolvesFrom = spec.evolves_from_species.name;
        }

        let flavorText = "Description unknown";
        for (const i in spec.flavor_text_entries) {
          if (spec.flavor_text_entries[i].language.name === "en") {
            flavorText = spec.flavor_text_entries[i].flavor_text;
          }
        }

        let habitat = "Information unknown";
        if (spec.habitat === !null) {
          habitat = spec.habitat.name;
        }

        const species = {
          baseHapiness: spec.base_happiness,
          captureRate: spec.capture_rate,
          evolvesFrom,
          habitat,
          flavorText,
          varieties
        };

        Pokemon.create({
          pokemonId: data.id,
          name: data.name,

          types,
          stats,
          species,

          height: data.height,
          weight: data.weight,

          sprites: {
            back: data.sprites.back_default,
            front: data.sprites.front_default,
          }
        });
      }))
      .catch(err => next(err));
  };
})


module.exports = router;