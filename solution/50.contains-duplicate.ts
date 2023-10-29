export function containsDuplicate(nums: number[]): boolean {
  const uniques: Set<number> = new Set();
  for (let num of nums) {
      if (uniques.has(num))
          return true;
      uniques.add(num);
  }
  return false;
};