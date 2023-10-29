import canJump from '../blind75/16.jump-game';

describe('canJump', () => {
  it('returns true for an array that can jump to the end', () => {
    const nums = [2, 3, 1, 1, 4];
    const result = canJump(nums);
    expect(result).toBe(true);
  });

  it('returns false for an array that cannot jump to the end', () => {
    const nums = [3, 2, 1, 0, 4];
    const result = canJump(nums);
    expect(result).toBe(false);
  });

  it('returns true for an array with a single element', () => {
    const nums = [0];
    const result = canJump(nums);
    expect(result).toBe(true);
  });
});
