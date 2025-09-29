const moves = [
  [2, 1],
  [2, -1],
  [-2, -1],
  [-2, 1],
  [1, 2],
  [1, -2],
  [-1, -2],
  [-1, 2],
];

const knightMoves = (start, end) => {
  // generate edge list

  const graph = {};
  const visited = new Set();
  const queue = [[start, 0]];

  const result = [];

  const positions = new Array(8).fill(null);

  for (let j = 0; j < 8; j++) {
    result.push(positions);
  }

  const initialKey = JSON.stringify(start);
  visited.add(initialKey);
  graph[initialKey] = [];

  const [a, b] = start;

  for (const [x, y] of moves) {
    const newMove = [x + a, y + b];

    if (newMove.every(digit => digit >= 0 && digit < 8)) {
      const key = JSON.stringify(newMove);

      if (!(key in graph)) {
        graph[key] = [];
        visited.add(JSON.stringify(key));
      }
    }
  }

  // "[0,0]"

  while (queue.length > 0) {
    const current = queue.shift();

    let [node, distance] = current;

    for (let i = 0; i < result.length; i++) {
      if (distance === 0) {
        result[i][distance] = node;
      } else {
        const currentNode = JSON.stringify(node);
        if (JSON.stringify(result[i][distance]) === currentNode) break;

        result[i][distance] = node;
      }
    }

    // if (!visited.has(JSON.stringify(node))) {
    // }

    visited.add(JSON.stringify(node));

    if (JSON.stringify(node) === JSON.stringify(end)) {
      console.log(distance, result);
      return;
    }

    const [a, b] = node;

    for (const [x, y] of moves) {
      const newMove = [x + a, y + b];

      if (newMove.every(digit => digit >= 0 && digit < 8)) {
        const newKey = JSON.stringify(newMove);

        if (!(newKey in graph)) {
          graph[newKey] = [];
        }
        graph[JSON.stringify(node)].push([newMove]);

        if (!visited.has(newKey)) {
          queue.push([newMove, distance + 1]);
        }
      }
    }
  }

  // console.log('the result is: ', result);
};

knightMoves([0, 0], [1, 2]);
