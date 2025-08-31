const compareArrays = (a, b) => {
  if (a.length !== b.length) return false;

  const arrayLength = a.length;

  for (let i = 0; i < arrayLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

function knightsMoves(start, end) {
  // create implicit grid
  const boardWidth = 8;
  const grid = [];

  // model how a knight moves. (2, 1), (1, 2), (-1, 2) (-2, 1) (-1, -2)

  const possibleMoves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [2, -1],
    [1, -2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
  ];

  // loop and push all the moves into the grid => edge list??
  // ([0,0], [4,2]) => [1, 2], [2,1] ...

  const moveKnight = start => {
    for (let i = 0; i < possibleMoves.length; i++) {
      const [startX, startY] = start;
      const [moveX, moveY] = possibleMoves[i];

      const currentMoveX = moveX + startX;
      const currentMoveY = moveY + startY;

      const isWithinGraphBounds =
        currentMoveX < boardWidth &&
        currentMoveY < boardWidth &&
        currentMoveX >= 0 &&
        currentMoveY >= 0;

      if (isWithinGraphBounds) {
        grid.push([currentMoveX, currentMoveY]);
      } else continue;
    }
  };

  moveKnight(start);

  for (const vertex of grid) {
    if (!compareArrays(vertex, end)) {
      moveKnight(vertex);
    } else {
      console.log(grid);
      return;
    }
  }

  const queue = [];

  return grid;
}

knightsMoves([2, 1], [4, 2]);
