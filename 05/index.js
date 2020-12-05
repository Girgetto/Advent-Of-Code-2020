let rangeRow = { min: 0, max: 127 };
let rangeColumns = { min: 0, max: 7 };
const conditions = {
  F: () => ({
    ...rangeRow,
    max: rangeRow.max - Math.round((rangeRow.max - rangeRow.min) / 2),
  }),
  B: () => ({
    ...rangeRow,
    min: rangeRow.min + Math.round((rangeRow.max - rangeRow.min) / 2),
  }),
  L: () => ({
    ...rangeColumns,
    max:
      rangeColumns.max - Math.round((rangeColumns.max - rangeColumns.min) / 2),
  }),
  R: () => ({
    ...rangeColumns,
    min:
      rangeColumns.min + Math.round((rangeColumns.max - rangeColumns.min) / 2),
  }),
};

const firstPart = (data) => {
  return data.map((ticket) => {
    const obj = {
      row: ticket
        .split("")
        .slice(0, 7)
        .reduce((_, letter, i) => {
          rangeRow = { ...rangeRow, ...conditions[letter]() };
          return i === 6 && letter === "L" ? rangeRow.max : rangeRow.min;
        }, 0),
      column: ticket
        .split("")
        .slice(7, 10)
        .reduce((_, letter, i) => {
          rangeColumns = { ...rangeColumns, ...conditions[letter]() };
          return i === 2 && letter === "R"
            ? rangeColumns.max
            : rangeColumns.min;
        }, 0),
    };
    rangeRow = { min: 0, max: 127 };
    rangeColumns = { min: 0, max: 7 };
    return obj.row * 8 + obj.column;
  });
};

function findNumber(a) {
  var missing = 0;

  for (var i = 1; i <= a.length; i++) {
    if (a.indexOf(i) == -1) {
      if (i > 88) {
        missing = i;
      }
    }
  }
  return missing;
}

const secondPart = (data) => findNumber(firstPart(data));

module.exports = {
  firstPart,
  secondPart,
};
