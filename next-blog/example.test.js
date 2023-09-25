import { it, expect } from "@jest/globals";

function add(a, b) {
  return a + b;
}

it("adding numbers", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(0, 0)).toBe(0);
  expect(add(-1, 1)).toBe(0);
});
