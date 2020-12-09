"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

const sample = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`.split("\n");

describe("First Part", () => {
  test("should return 5", () => {
    expect(firstPart(sample)).toBe(5);
  });

  test("solution", () => {
    expect(firstPart(data)).toBe(1528);
  });
});

describe("Second Part", () => {
  test.skip("solution", () => {
    expect(secondPart(data)).toBe(548);
  });
});
