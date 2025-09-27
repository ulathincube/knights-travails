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

  console.log(graph);

  const result = [];

  // "[0,0]"

  while (queue.length > 0) {
    const current = queue.shift();

    let [node, distance] = current;

    if (JSON.stringify(node) === JSON.stringify(end))
      console.log('Found Node!');

    const [a, b] = node;

    for (const [x, y] of moves) {
      const newMove = [x + a, y + b];

      if (newMove.every(digit => digit >= 0 && digit < 8)) {
        graph[JSON.stringify(newMove)] = [];
        graph[JSON.stringify(node)].push([newMove]);

        if (!visited.has(JSON.stringify(newMove))) {
          queue.push([newMove, distance++]);
          visited.add(JSON.stringify(newMove));
        }
      }
    }
  }

  console.log(graph);
};

knightMoves([0, 0], [3, 3]);
