"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

const sample = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`.split("\n");

const sample2 = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`.split("\n");

describe("First Part", () => {
  test("should return 127", () => {
    expect(firstPart(sample, 5)).toBe(127);
  });

  test("solution", () => {
    expect(firstPart(data, 25)).toBe(88311122);
  });
});

describe("Second Part", () => {
  test("should return 62", () => {
    expect(secondPart(sample2, 5)).toBe(62);
  });

  test("solution", () => {
    expect(secondPart(data, 25)).toBe(13549369);
  });
});
