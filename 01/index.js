const firstPart = (data) => {
  let firstAnswer = 0;
  data.forEach((el) => {
    data.forEach((el2) => {
      if (parseInt(el) + parseInt(el2) === 2020) {
        firstAnswer = el * el2;
      }
    });
  });
  return firstAnswer;
};

const secondPart = (data) => {
  let secondAnswer = 0;

  data.forEach((el) => {
    data.forEach((el2) => {
      data.forEach((el3) => {
        if (parseInt(el) + parseInt(el2) + parseInt(el3) === 2020) {
          secondAnswer = el * el2 * el3;
        }
      });
    });
  });

  return secondAnswer;
};

module.exports = {
  firstPart,
  secondPart,
};
