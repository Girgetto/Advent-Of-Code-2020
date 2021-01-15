const myBag = "shiny gold";

const firstPart = (data) => {
  let relatedCounter = { counter: 0, related: [myBag] };
  let bagChecked = [];
  while (relatedCounter.related.length > 0) {
    let result = data.reduce(
      (acc, el) => {
        let [bag, underBag] = el.split("contain");
        const related = relatedCounter.related.filter((related) =>
          underBag.includes(related)
        );
        return related.length > 0 &&
          !bagChecked.includes(bag.replace("bags", "").trim())
          ? {
              counter: acc.counter + 1,
              related: [
                ...acc.related,
                bag.split(" ")[0] + " " + bag.split(" ")[1],
              ],
            }
          : acc;
      },
      { counter: 0, related: [] }
    );
    if (result.related.length > 0 && !bagChecked.includes(result.related)) {
      bagChecked.push(...result.related);
    }
    relatedCounter.counter += result.counter;
    relatedCounter.related = result.related;
  }

  return relatedCounter.counter;
};

const secondPart = () => {};

module.exports = {
  firstPart,
  secondPart,
