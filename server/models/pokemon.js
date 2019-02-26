const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  pokemonId: {
    type: Number,
  },
  name: {
    type: String
  },

  types: [
    String
  ],

  stats: [
    {
      name: String,
      base: Number,
    }
  ],

  species: {
    baseHapiness: Number,
    captureRate: Number,
    evolvesFrom: String,
    habitat: String,
    flavorText: String,
    varieties: [
      {
        name: String,
        url: String
      }
    ]
  },

  height: {
    type: Number
  },
  weight: {
    type: Number
  },

  sprites: {
    back: {
      type: String
    },
    front: {
      type: String
    },
  }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon; 