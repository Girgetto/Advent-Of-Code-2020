"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

describe("First Part", () => {
  test("should return 2019", () => {
    let test = [2019, 1];

    expect(firstPart(test)).toBe(2019);
  });

  test("should return 514579", () => {
    let test = [1721, 979, 366, 299, 675, 1456];

    expect(firstPart(test)).toBe(514579);
  });

  test("solution", () => {
    expect(firstPart(data)).toBe(805731);
  });
});

describe("Second Part", () => {
  test("should return 4034", () => {
    let test = [2017, 1, 2];

    expect(secondPart(test)).toBe(4034);
  });

  test("solution", () => {
    expect(secondPart(data)).toBe(192684960);
  });
});
