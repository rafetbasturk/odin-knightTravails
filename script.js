const Board = require("./board")

const knightMoves = (start, target) => {
  const startString = JSON.stringify(start)
  const targetString = JSON.stringify(target)

  // create adjacencylist
  const board = Board()
  const list = board.adjacencyList

  // enqueue and mark the start node as visited
  const queue = []
  queue.push(list.get(startString))
  list.set(startString, { ...list.get(startString), visited: true })

  while (queue.length) {
    // dequeue
    const current = queue.shift()
    // check if current node is the target
    if (current.value === targetString) {
      // show visited nodes starting from the current node 
      board.showPath(current)
      return
    }

    // get edges and traverse
    const edges = current.edges
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      const edgeString = JSON.stringify(edge)
      // if edge is not visited mark as visited and enqueue
      if (!list.get(edgeString).visited) {
        list.set(edgeString, { ...list.get(edgeString), visited: true, parent: current })
        queue.push(list.get(edgeString))
      }
    }
  }
}

knightMoves([0, 0], [1, 2])
knightMoves([0, 0], [3, 3])
knightMoves([3, 3], [0, 0])
knightMoves([3, 3], [4, 3])