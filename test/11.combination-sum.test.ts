import combinationSum from '../blind75/11.combination-sum';

describe('combinationSum', () => {
  it('returns the combinations that sum to the target', () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expect.arrayContaining([[3, 2, 2], [7]]));
  });

  it('returns an empty array when no combinations are found', () => {
    const candidates = [3, 5, 9];
    const target = 7;
    const result = combinationSum(candidates, target);
    expect(result).toEqual([]);
  });

  it('returns combinations when the target is zero', () => {
    const candidates = [1, 2, 3];
    const target = 0;
    const result = combinationSum(candidates, target);
    expect(result).toEqual([]);
  });

  it('handles an empty candidates array', () => {
    const candidates: number[] = [];
    const target = 5;
    const result = combinationSum(candidates, target);
    expect(result).toEqual([]);
  });
});
