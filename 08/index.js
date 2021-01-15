const firstPart = (instructions) => {
  let accumulator = 0;
  let currentIndex = 0;
  let stepsVisited = [];

  while (!stepsVisited.includes(currentIndex)) {
    stepsVisited.push(currentIndex);
    let regex = /(acc|jmp|nop)\s([+-]\d*)/;
    const [, operation, units] = regex.exec(instructions[currentIndex]);

    switch (operation) {
      case "acc":
        accumulator += parseInt(units);
        currentIndex++;
        break;

      case "jmp":
        currentIndex += parseInt(units);
        break;

      default:
        currentIndex++;
        break;
    }
  }

  return { currentIndex, accumulator };
};

const secondPart = (instructions) => {
  function runBootCode(instructionSet) {
    let accumulator = 0;
    let currentIndex = 0;
    let stepsVisited = [];

    while (!stepsVisited.includes(currentIndex)) {
      stepsVisited.push(currentIndex);

      if (instructionSet[currentIndex] === undefined) {
        return { currentIndex, accumulator };
      }

      const [, operation, units] = /(acc|jmp|nop)\s([+-]\d*)/.exec(
        instructionSet[currentIndex]
      );

      switch (operation) {
        case "acc":
          accumulator += parseInt(units);
          currentIndex++;

          break;

        case "jmp":
          currentIndex += parseInt(units);

          break;

        default:
          currentIndex++;
          break;
      }
    }

    return { currentIndex, accumulator };
  }

  for (let i = 0; i < instructions.length; i++) {
    const [
      ,
      originalOperation,
      direction,
      units,
    ] = /(acc|jmp|nop)\s(\+|-)(\d*)/.exec(instructions[i]);

    if (originalOperation === "acc") continue;

    if (["nop", "jmp"].includes(originalOperation)) {
      let modifiedInstructions = [...instructions];
      modifiedInstructions.splice(
        i,
        1,
        `${originalOperation === "nop" ? "jmp" : "nop"} ${direction}${units}`
      );

      let results = runBootCode(modifiedInstructions);

      if (results.currentIndex === modifiedInstructions.length)
        return results.accumulator;
    }
  }
};

module.exports = { firstPart, secondPart };
