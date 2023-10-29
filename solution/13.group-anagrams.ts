export function groupAnagrams(strs: string[]): string[][] {
  const cache: Record<string, string[]> = {};

  strs.forEach((str) => {
    const sortedString = str.split('').sort().join('');
    cache[sortedString] = cache[sortedString] ?? [];
    cache[sortedString].push(str);
  })

  return Object.values(cache);
};
