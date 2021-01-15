const firstPart = (input) => {
  const numbers = input.map((x) => parseInt(x)).sort((a, b) => a - b);

  let last = 0;

  const { countOfOneJolts, countOfThreeJolts } = numbers.reduce(
    (acc, current, i) => {
      if (current - last === 1) acc.countOfOneJolts++;

      if (current - last === 3) acc.countOfThreeJolts++;

      if (i === numbers.length - 1) acc.countOfThreeJolts++;

      last = numbers[i];
      return acc;
    },
    { countOfOneJolts: 0, countOfThreeJolts: 0 }
  );

  return countOfOneJolts * countOfThreeJolts;
};

module.exports = { firstPart };
