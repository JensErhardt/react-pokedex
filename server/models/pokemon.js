const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: { 
    type : String 
  },
  weight: { 
    type : String
  },
  sprites: {
    back: { 
      type : String 
    },
    front: { 
      type : String
    },
  }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon; 