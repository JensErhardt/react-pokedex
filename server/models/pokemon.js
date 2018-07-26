const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  test: {
    type: String
  },
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