const Knight = require("./knight")

const Board = () => {
  let adjacencyList = new Map()

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const origin = [i, j]
      adjacencyList.set(JSON.stringify(origin), Knight(origin))
    }
  }

  return {
    adjacencyList,
    showPath: (current) => {
      let path = []
      let node = current
      while (node) {
        path.unshift(node.value)
        node = node.parent
      }

      console.log(`You made it in ${path.length - 1} ${path.length > 2 ? "moves" : "move"}! Here is your path:`)
      path.forEach(el => console.log(el));
    }
  }
}

module.exports = Board