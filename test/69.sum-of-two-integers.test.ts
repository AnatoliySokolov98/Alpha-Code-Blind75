import { sum, difference, getSum } from '../blind75/69.sum-of-two-integers';

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(3, 4)).toBe(7);
  });

  it('adds a positive number and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('adds two negative numbers', () => {
    expect(sum(-6, -3)).toBe(-9);
  });
});

describe('difference', () => {
  it('calculates the difference between two positive numbers', () => {
    expect(difference(10, 3)).toBe(7);
  });

  it('calculates the difference between a positive and a negative number', () => {
    expect(difference(5, -2)).toBe(7);
  });

  it('calculates the difference between two negative numbers', () => {
    expect(difference(-6, -3)).toBe(-3);
  });
});

describe('getSum', () => {
  it('returns the sum of two positive numbers', () => {
    expect(getSum(3, 4)).toBe(7);
  });

  it('returns the sum of a positive number and a negative number', () => {
    expect(getSum(5, -2)).toBe(3);
  });

  it('returns the sum of two negative numbers', () => {
    expect(getSum(-6, -3)).toBe(-9);
  });

  it('handles negative inputs correctly', () => {
    expect(getSum(-5, -2)).toBe(-7);
  });

  it('handles large numbers', () => {
    expect(getSum(999999, 1)).toBe(1000000);
  });
});
