const clean = (data) =>
  data.map((el) => {
    let inf = el.split(" ");
    return {
      numbers: inf[0].split("-"),
      letter: inf[1].replace(":", ""),
      pwd: inf[2],
    };
  });

const firstPart = (data) =>
  clean(data).filter((obj) => {
    let regex = new RegExp(`[^${obj.letter}]`, "g");

    return (
      obj.pwd.replace(regex, "").length >= obj.numbers[0] &&
      obj.pwd.replace(regex, "").length <= obj.numbers[1]
    );
  }).length;

const secondPart = (data) =>
  clean(data).filter(
    (obj) =>
      (obj.pwd[obj.numbers[0] - 1] === obj.letter) !==
      (obj.pwd[obj.numbers[1] - 1] === obj.letter)
  ).length;

module.exports = {
  firstPart,
  secondPart,
};
