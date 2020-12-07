"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

let sample = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags, 1 bright black.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`.split("\n");

describe("First Part", () => {
  test("should return 4", () => {
    expect(firstPart(sample)).toBe(4);
  });

  test("solution", () => {
    expect(firstPart(data)).toBe(115);
  });
});

describe.skip("Second Part", () => {
  test("should return", () => {
    expect(secondPart(sample)).toBe(6);
  });

  test("solution", () => {
    expect(secondPart(data)).toBe(3323);
  });
});
