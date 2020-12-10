const firstPart = (input, preambleLength) => {
  const numbers = input.map((x) => parseInt(x));

  for (let i = 0; i < numbers.length; i++) {
    let currentWorkingRange = numbers.slice(i, preambleLength + 1 + i);
    const workingSet = new Set(numbers.slice(i, preambleLength + i));
    const finalSum = currentWorkingRange.pop();

    for (let j = 0; j < workingSet.size; j++) {
      const addendPartner = finalSum - currentWorkingRange[j];

      if (workingSet.has(addendPartner)) {
        break;
      }

      if (j === currentWorkingRange.length - 1) {
        return finalSum;
      }
    }
  }
};

const secondPart = (data, preambleLength) => {
  const invalidNumber = firstPart(data, preambleLength);
  const numbers = data.map(x => parseInt(x));
  const maxRange = numbers.slice(0, numbers.indexOf(invalidNumber) + 1);

  let runningTotal = 0;
  let range = [];

  for (let i = 0; i < maxRange.length; i++) {
    const start = maxRange[i];

    runningTotal += start;
    range.push(start);

    for (let j = i + 1; j < maxRange.length; j++) {
      const next = maxRange[j];

      runningTotal += next;
      range.push(next);

      if (runningTotal > invalidNumber) {
        runningTotal = 0;
        range = [];

        break;
      }

      if (runningTotal === invalidNumber) {
        const sorted = range.sort((a, b) => a - b);
        return sorted[0] + sorted.slice(-1)[0];
      }
    }
  }
};

module.exports = { firstPart, secondPart };
