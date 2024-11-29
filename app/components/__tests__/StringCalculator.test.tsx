import { calculateSumOfString } from "../../utils";

describe("calculateSumOfString", () => {
  it("should return sum 0 for empty input", () => {
    const result = calculateSumOfString("");
    expect(result.sum).toBe(0);
    expect(result.negativeNumbers).toEqual([]);
  });

  it("should return sum 0 for input with only negative numbers", () => {
    const result = calculateSumOfString("-1,-2,-3");
    expect(result.sum).toBe(0);
    expect(result.negativeNumbers).toEqual([-1, -2, -3]);
  });

  it("should calculate sum with comma delimiter", () => {
    const result = calculateSumOfString("1,2,3,4,5");
    expect(result.sum).toBe(15);
    expect(result.negativeNumbers).toEqual([]);
  });

  it("should calculate sum with newline delimiter", () => {
    const result = calculateSumOfString("1\n2\n3\n4\n5");
    expect(result.sum).toBe(15);
    expect(result.negativeNumbers).toEqual([]);
  });

  it("should calculate sum with mixed comma and newline delimiters", () => {
    const result = calculateSumOfString("1,2\n3,4\n5");
    expect(result.sum).toBe(15);
    expect(result.negativeNumbers).toEqual([]);
  });

  it("should calculate sum with custom delimiter", () => {
    const result = calculateSumOfString("//;\n1;2;3;4;5");
    expect(result.sum).toBe(15);
    expect(result.negativeNumbers).toEqual([]);
  });

  it("should calculate sum with custom delimiter and negative numbers", () => {
    const result = calculateSumOfString("//;\n1;-2;3;-4;5");
    expect(result.sum).toBe(9);
    expect(result.negativeNumbers).toEqual([-2, -4]);
  });

  it("should return sum 0 if input string is not valid", () => {
    const result = calculateSumOfString("abc,def,ghi");
    expect(result.sum).toBe(0);
    expect(result.negativeNumbers).toEqual([]);
  });

  it("should return sum 0 for input with only negative numbers", () => {
    const result = calculateSumOfString("-5,-10,-20");
    expect(result.sum).toBe(0);
    expect(result.negativeNumbers).toEqual([-5, -10, -20]);
  });

  it("should correctly handle mixed positive and negative numbers", () => {
    const result = calculateSumOfString("1,-2,3,-4,5");
    expect(result.sum).toBe(9);  // (1 + 3 + 5)
    expect(result.negativeNumbers).toEqual([-2, -4]);
  });
});
