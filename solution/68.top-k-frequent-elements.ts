export function topKFrequent(nums: number[], k: number): number[] {
  const counts: Record<number, number> = {};
  for(let el of nums){
      counts[el] = (counts[el] || 0) + 1;
  }
  const buckets: Record<number, number[]> = {};
  for(let key in counts) {
      const val = counts[key];
      buckets[val] = buckets[val] ?? [];
      buckets[val].push(Number(key));
  }
  const res = [];
  let choice = nums.length;
  while(k) {
      if(buckets[choice]) {
          for(let el of buckets[choice])
          {
              res.push(el);
              k--;
          }
      }
      choice--;
  }
  return res;
};