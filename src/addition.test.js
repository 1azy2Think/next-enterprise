const Addition = require('./addition');

describe('Addition', () => {
  let addition;

  beforeEach(() => {
    addition = new Addition();
  });

  // Positive numbers partition
  test('should add smallest positive numbers correctly', () => {
    expect(addition.add(1, 1)).toBe(2);
  });

  test('should add larger positive numbers correctly', () => {
    expect(addition.add(1000, 2000)).toBe(3000);
  });

  // Negative numbers partition
  test('should add smallest negative numbers correctly', () => {
    expect(addition.add(-1, -1)).toBe(-2);
  });
  
  test('should add larger negative numbers correctly', () => {
    expect(addition.add(-1000, -2000)).toBe(-3000);
  });

  // Zero partition
  test('should add zero to a positive number correctly', () => {
    expect(addition.add(0, 5)).toBe(5);
  });

  test('should add zero to a negative number correctly', () => {
    expect(addition.add(0, -5)).toBe(-5);
  });

  test('should add zero to zero correctly', () => {
    expect(addition.add(0, 0)).toBe(0);
  });
});
