import { sort } from "../selection-sort";

describe("Testing bubble-sort", () => {
  test("should be sorted", () => {
    const arr = [9, 3, 1, 2, 5, 3, 5];
    expect(sort(arr)).toEqual([1, 2, 3, 3, 5, 5, 9]);
  });
});
