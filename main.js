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

const buildGraph = (start, end) => {
  const graph = {};
  const [rowStart] = start;
  const [rowEnd] = end;

  const min = Math.min(rowStart, rowEnd);
  const max = Math.max(rowStart, rowEnd);

  for (let i = min; i <= max; i++) {
    if (!(i in graph)) graph[i] = [];
    for (let j = 0; j < 8; j++) {
      graph[i].push(j);
    }
  }

  return graph;
};

const knightMoves = (start, end) => {
  // generate edge list

  const visited = new Set(JSON.stringify(start));

  // "[0,0]"

  const graph = buildGraph(start, end);

  const queue = [[start, 0]];

  while (queue.length > 0) {
    const current = queue.shift();
    const [node, distance] = current;
    if (foundNode(node, end)) return distance;
  }

  // traverse graph (bfs)
};

const foundNode = (a, b) => {
  if (a.length !== b.length) return false;

  for (let i = 0; i < b.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

knightMoves([0, 0], [3, 3]);
