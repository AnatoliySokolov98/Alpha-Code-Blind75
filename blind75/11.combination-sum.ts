export function combinationSum(candidates: number[], target: number): number[][] {
  const cache: Record<string, number[][]> = {};

  const cacheKey = (index: number, target: number) => `${index}-${target}`;

  candidates.sort((a,b) => a - b);

  const dp = (index: number, target: number): number[][] => {
    const key = cacheKey(index, target);

    if (key in cache) {
      return cache[key];
    }

    if(index === candidates.length || candidates[index] > target) {
      return [];
    }

    if(candidates[index] === target) {
      return [[target]];
    }

    let res: number[][] = [];

    let dpRes = dp(index, target - candidates[index]);
    for (let item of dpRes) {
      res.push(item.concat(candidates[index]));
    }

    dpRes = dp(index + 1, target)
    for (let item of dpRes) {
      res.push(item.slice());
    }
    cache[key] = res;
    return res;
  }
  return dp(0, target);
}

