const fields = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];
const conditions = {
  byr: (value) => 2002 >= value && value >= 1920,
  iyr: (value) => 2020 >= value && value >= 2010,
  eyr: (value) => 2030 >= value && value >= 2020,
  hgt: (value) =>
    value.includes("in")
      ? 76 >= value.replace("in", "") && value.replace("in", "") >= 59
      : 193 >= value.replace("cm", "") && value.replace("cm", "") >= 150,
  hcl: (value) => new RegExp(/^#[a-z0-9]{6}?/, "g").test(value),
  ecl: (value) => new RegExp(/(amb|blu|brn|gry|grn|hzl|oth)/, "g").test(value),
  pid: (value) => new RegExp(/^[0-9]{9}$/, "g").test(value),
  cid: () => true,
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
  let [property, value] = element.split(":");
  return conditions[property](value);
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
