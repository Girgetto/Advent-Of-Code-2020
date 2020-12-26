"use strict";

const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "file.txt");
const { firstPart, secondPart } = require("./index");

const data = fs.readFileSync(filePath, { encoding: "utf-8" }).split("\n");

let sample = [
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
    expect(firstPart(sample)).toBe(7);
  });

  test("should return 1", () => {
    let sample = [".", "#", ".", ".", "."];
    expect(firstPart(sample)).toBe(1);
  });

  test("should return 0", () => {
    let sample = ["...", ".#.", "..#", "..."];
    expect(firstPart(sample)).toBe(0);
  });

  test("solution", () => {
    expect(firstPart(data)).toBe(244);
  });
});

describe("Second Part", () => {
  test("should return 336", () => {
    expect(secondPart(sample)).toBe(336);
  });

  test("should return 0", () => {
    let sample = [".", "#"];
    expect(secondPart(sample)).toBe(0);
  });

  test("solution", () => {
    expect(secondPart(data)).toBe(9406609920);
  });
});
