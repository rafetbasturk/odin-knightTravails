const availableMoves = require("./helperFunc")

const Knight = (start, parent = null) => {
  return {
    value: JSON.stringify(start),
    edges: availableMoves(start),
    visited: false,
    parent
  }
}

module.exports = Knight