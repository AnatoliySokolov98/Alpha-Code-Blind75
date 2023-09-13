export function isPalindrome(s: string): boolean {
  s = s.trim().toLowerCase();
  const chars: Set<string> = new Set('abcdefghijklmnopqrstuvwxyz1234567890');
  let left = 0, right = s.length - 1;

  while (left < right) {
      if(!chars.has(s[left]))
          left++;
      else if (!chars.has(s[right]))
          right--;
      else if (s[left] !== s[right])
          return false;
      else {
          left++;
          right--;
      }
  }
  return true;
};