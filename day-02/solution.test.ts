import fs from "fs";
import { test, expect } from "vitest";

import { solvePart1, solvePart2 } from "./solution";

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

test('part 1', () => {
    expect(solvePart1(input)).toEqual(8392);
});

test('part 2', () => {
    expect(solvePart2(input)).toEqual(10116);
});