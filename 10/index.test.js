"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

const sample = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`.split("\n");

describe("First Part", () => {
  test("should return 127", () => {
    expect(firstPart(sample)).toBe(22 * 10);
  });

  test("solution", () => {
    expect(firstPart(data)).toBe(2482);
  });
});

describe.skip("Second Part", () => {
  test("should return 62", () => {
    expect(secondPart(sample2, 5)).toBe(62);
  });

  test("solution", () => {
    expect(secondPart(data, 25)).toBe(13549369);
  });
});
