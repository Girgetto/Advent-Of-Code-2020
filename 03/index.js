const createMap = (data) => data.map((tree) => tree.repeat(data.length));

const isTree = (trees, y, x) => trees[y][x] === "#";

const firstPart = (data) => {
  let treeCounter = 0;
  let x = 3;

  const trees = createMap(data);

  for (y = 1; y < trees.length; y++) {
    if (isTree(trees, y, x)) treeCounter++;
    x += 3;
    if (x >= trees[0].length) x %= trees[0].length;
  }

  return treeCounter;
};

const secondPart = (data) => {
  let treeCounter = 0;
  let right = [1, 3, 5, 7, 1];
  let down = [1, 1, 1, 1, 2];
  const trees = createMap(data);
  let counters = [];

  for (j = 0; j < right.length; j++) {
    x = right[j] % trees[0].length;
    treeCounter = 0;

    for (y = down[j]; y < trees.length; y += down[j]) {
      if (isTree(trees, y, x)) treeCounter++;
      x += right[j];
      if (x >= trees[0].length) x %= trees[0].length;
    }
    counters.push(treeCounter);
  }

  return counters.reduce((acc, el) => acc * el, 1);
};

module.exports = {
  firstPart,
  secondPart,
};
