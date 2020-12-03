const createMap = (data) => data.map((tree) => tree.repeat(data.length));

const firstPart = (data) => {
  let treeCounter = 0;
  let y = 3;

  const trees = createMap(data);

  for (x = 1; x < trees.length; x++) {
    if (trees[x][y] === "#") treeCounter++;
    y += 3;
    if (y >= trees[0].length) y %= trees[0].length;
  }

  return treeCounter;
};

const secondPart = (data) => {
  let treeCounter = 0;
  let right = [1, 3, 5, 7, 1];
  let down = [1, 1, 1, 1, 2];
  const trees = createMap(data);
  let counters = [];
  let dx = 1;

  for (j = 0; j < right.length; j++) {
    y = right[j] % trees[0].length;
    treeCounter = 0;

    for (x = down[j]; x < trees.length; x += down[j]) {
      if (trees[x][y] === "#") treeCounter++;
      y += right[j];
      if (y >= trees[0].length) y %= trees[0].length;
    }
    counters.push(treeCounter);
  }

  return counters.reduce((acc, el) => acc * el, 1);
};

module.exports = {
  firstPart,
  secondPart,
};
