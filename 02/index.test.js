"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");
const test = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

describe("First Part", () => {
  test("should return 2", () => {

    expect(firstPart(test)).toBe(2);
  });

  test("solution", () => {
    expect(firstPart(data)).toBe(483);
  });
});

describe("Second Part", () => {
  test("should return 1", () => {
    expect(secondPart(test)).toBe(1);
  });

  test("solution", () => {
    expect(secondPart(data)).toBe(482);
  });
});
