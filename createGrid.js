function createGrid(start, end) {
  let boardWidth = 8;
  let knightMoves = [];

  let [positionStartX, positionStartY] = start;
  let [positionEndX, positionEndY] = end;

  const gridStart = Math.min(positionStartX, positionEndX);
  const gridEnd = Math.max(positionStartX, positionEndX);

  // 0 1 2 3 4 5 6 7

  let currentMove;

  const moveVertically = () => {
    [positionStartX, positionStartY] = start;
    const moves = [];

    for (let i = 0; i < boardWidth; i++) {
      positionStartX += 1;
      positionStartY += 2;

      if (positionStartY < 8) {
        if (positionStartX === positionStartY) {
          moves.push([positionStartX, positionStartY]);
        } else {
          moves.push([positionStartX, positionStartY]);
          moves.push([positionStartY, positionStartX]);
        }
      }
    }

    return moves;
  };

  const moveHorizontally = () => {
    const moves = [];
    [positionStartX, positionStartY] = start;

    for (let i = 0; i < boardWidth; i++) {
      positionStartX += 2;
      positionStartY += 1;

      if (positionStartX < 8) {
        if (positionStartX === positionStartY) {
          moves.push([positionStartX, positionStartY]);
        } else {
          moves.push([positionStartX, positionStartY]);
          moves.push([positionStartY, positionStartX]);
        }
      }
    }

    return moves;
  };

  const moves = moveVertically().concat(moveHorizontally());
  moves.unshift(start);

  return moves;
}

export default createGrid;
