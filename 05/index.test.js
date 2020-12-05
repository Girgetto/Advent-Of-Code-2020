"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

describe("First Part", () => {
  test("should return 357", () => {
    let test = "FBFBBFFRLR".split("\n");

    expect(Math.max(...firstPart(test))).toBe(357);
  });

  test("solution", () => {
    expect(Math.max(...firstPart(data))).toBe(989);
  });
});

describe("Second Part", () => {
  test("solution", () => {
    expect(secondPart(data)).toBe(548);
  });
});
