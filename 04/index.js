const fields = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];
const conditions = {
  byr: { min: 1920, max: 2002 },
  iyr: { min: 2010, max: 2020 },
  eyr: { min: 2020, max: 2030 },
  hgt: {
    cm: { min: 150, max: 193 },
    in: { min: 59, max: 76 },
  },
  hcl: new RegExp(/^(#[a-z0-9]{6})?/, "g"),
  ecl: new RegExp(/(amb|blu|brn|gry|grn|hzl|oth)/, "g"),
  pid: new RegExp(/^[0-9]+$/, "g"),
};

const createArray = (data) => {
  let array = [];
  let str = "";
  for (i = 0; i < data.length; i++) {
    if (data[i] === "") {
      array.push(str.trim());
      str = "";
    } else if (i === data.length - 1) {
      str += data[i];
      if (str !== "") {
        array.push(str.trim());
      }
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

const mapConditions = (element) => {
  let [property, value] = element.trim().split(":");
  if (property === "cid") return true;
  if (value.includes("in")) {
    return (
      conditions[property].in.max >= value.replace("in", "") &&
      value.replace("in", "") >= conditions[property].in.min
    );
  }
  if (value.includes("cm") && conditions[property].cm) {
    return (
      conditions[property].cm.max >= value.replace("cm", "") &&
      value.replace("cm", "") >= conditions[property].cm.min
    );
  }

  return conditions[property].min
    ? conditions[property].max >= value && value >= conditions[property].min
    : value.match(conditions[property]) !== null &&
        value.match(conditions[property])[0] !== "";
};

const secondPart = (data) => {
  const passportsFiltered = firstPart(data);
  return passportsFiltered.filter((passport) =>
    passport
      .split(" ")
      .map((element) => mapConditions(element))
      .every((test) => test)
  );
};

module.exports = {
  firstPart,
  secondPart,
};
