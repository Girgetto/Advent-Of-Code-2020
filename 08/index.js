const firstPart = (instructions) => {
  let accumulator = 0;
  let currentIndex = 0;
  let stepsVisited = [];
  let operations = (operation, units) =>
    ({
      acc: () => {
        accumulator += parseInt(units);
        currentIndex++;
      },
      jmp: () => {
        accumulator += parseInt(units);
        currentIndex++;
      },
      [operation]: () => {
        currentIndex++;
      },
    }[operation]);

  while (!stepsVisited.includes(currentIndex)) {
    stepsVisited.push(currentIndex);

    const [, operation, units] = /(acc|jmp|nop)\s([+-]\d*)/.exec(instructions[currentIndex]);

    operations(operation, units)();
  }

  return accumulator;
};

module.exports = { firstPart };
