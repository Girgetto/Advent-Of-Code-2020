"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

let test1 = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

describe("First Part", () => {
  test("should return 7", () => {
    expect(firstPart(test1)).toBe(7);
  });

  test("should return 1", () => {
    let test = [".", "#", ".", ".", "."];
    expect(firstPart(test)).toBe(1);
  });

  test("should return 0", () => {
    let test = ["...", ".#.", "..#", "..."];
    expect(firstPart(test)).toBe(0);
  });

  test("solution", () => {
    expect(firstPart(data)).toBe(244);
  });
});

describe("Second Part", () => {
  test("should return 336", () => {
    expect(secondPart(test1)).toBe(336);
  });

  test("should return 0", () => {
    let test = [".", "#"]
    expect(secondPart(test)).toBe(0);
  });

  test("solution", () => {
    expect(secondPart(data)).toBe(9406609920);
  });
});
