
  export function getTypes(types) {
    if (types.length === 1) {
      return (genericTypes[types[0]]
        + "none repeat scroll 0% 0%");
    }

    if (types.length === 2) {
      return ("rgba(0, 0, 0, 0) linear-gradient(90deg, " 
      + genericTypes[types[0]] + " 50%, " 
      + genericTypes[types[1]] + "50%) repeat scroll 0% 0%");
    }
  }

export const genericTypes = {
  water:    "rgb(104, 144, 240)",
  ice:      "rgb(152, 216, 216)",
  grass:    "rgb(120, 200, 80)",
  fire:     "rgb(240, 128, 48)",
  psychic:  "rgb(248, 88, 136)",
  flying:   "rgb(168, 144, 240)",
  bug:      "rgb(168, 184, 32)",
  normal:   "rgb(168, 168, 120)",
  fairy:    "rgb(238, 153, 172)",
  electric: "rgb(248, 208, 48)"
}

