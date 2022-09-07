const steps = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1]
]

const availableMoves = (start) => {
  let moves = []
  steps.forEach(step => {
    if (step[0] + start[0] < 0
      || step[1] + start[1] < 0
      || step[0] + start[0] > 7
      || step[1] + start[1] > 7) {
      return null
    }
    moves.push([step[0] + start[0], step[1] + start[1]])
  })
  return moves
}

module.exports = availableMoves