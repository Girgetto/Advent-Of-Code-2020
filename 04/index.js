const { create } = require("domain");

const fields = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];
const conditions = {
  byr: { min: 1920, max: 2020 },
  iyr: { min: 2010, max: 2020 },
  eyr: { min: 2020, max: 2030 },
  hgt: {
    cm: { min: 150, max: 190 },
    in: { min: 59, max: 76 },
  },
  hcl: new RegExp(),
  ecl: new RegExp(/amb|blu|brn|gry|grn|hzl|oth/, "g"),
  pid: new RegExp(/@"^\d$"/, "g"),
};

const createArray = (data) => {
  let array = [];
  let str = "";
  for (i = 0; i < data.length; i++) {
    if (data[i] === "") {
      array.push(str);
      str = "";
    } else if (i === data.length - 1) {
      str += data[i];
      array.push(str);
    } else {
      str += data[i] + " ";
    }
  }
  return array;
};

const firstPart = (data) => {
  let regex = new RegExp(
    fields.map((el) => `(?=.*${el}:)`).join("") + ".*",
    "g"
  );

  return createArray(data).filter((el) => el.match(regex));
};

const secondPart = (data) => {
  const passportsFiltered = firstPart(data);
  return passportsFiltered.filter((el) => {
    el.split(" ").map((element) => {
      conditions[element.split(":")[0]];
    });
  });
};

module.exports = {
  firstPart,
  secondPart,
};
