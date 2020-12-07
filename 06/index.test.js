"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

let sample = `abc

a
b
c

ab
ac

a
a
a
a

b`.split("\n");

describe("First Part", () => {
  test("should return 11", () => {
    expect(firstPart(sample)).toBe(11);
  });

  test("solution", () => {
    expect(firstPart(data)).toBe(6530);
  });
});

describe("Second Part", () => {
  test("should return 6", () => {
    expect(secondPart(sample)).toBe(6);
  });

  test("solution", () => {
    expect(secondPart(data)).toBe(3323);
  });
});
