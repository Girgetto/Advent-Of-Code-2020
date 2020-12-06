const cleanArray = (array) =>
  array.reduce(
    (acc, personAnswer, i) => {
      if (personAnswer === "") {
        acc.newArray.push(acc.answers);
        acc.arrayWithNumberOfPersonInQuestionary.push({
          string: acc.answers,
          peopleCounter: acc.peopleCounter,
        });
        acc.answers = "";
        acc.peopleCounter = 0;
      } else if (i === array.length - 1) {
        acc.answers += personAnswer;
        acc.peopleCounter++;
        acc.newArray.push(acc.answers);
        acc.arrayWithNumberOfPersonInQuestionary.push({
          string: acc.answers,
          peopleCounter: acc.peopleCounter,
        });
      } else {
        acc.answers += personAnswer;
        acc.peopleCounter++;
      }
      return acc;
    },
    {
      newArray: [],
      answers: "",
      arrayWithNumberOfPersonInQuestionary: [],
      peopleCounter: 0,
    }
  );

const removeDuplicateCharacters = (string) =>
  string
    .split("")
    .filter((item, pos, self) => self.indexOf(item) === pos)
    .join("");

const firstPart = (data) =>
  cleanArray(data)
    .newArray.map((answers) => removeDuplicateCharacters(answers))
    .join("").length;

const secondPart = (data) =>
  cleanArray(data).arrayWithNumberOfPersonInQuestionary.reduce((acc, el) => {
    if (el.peopleCounter === 1) return (acc += el.string.length);
    let answers = removeDuplicateCharacters(el.string);
    let num = answers
      .split("")
      .filter(
        (answer) =>
          el.string.replace(new RegExp(`[^${answer}]`, "g"), "").length ===
          el.peopleCounter
      ).length;
    return (acc += num);
  }, 0);

module.exports = {
  firstPart,
  secondPart,
};
