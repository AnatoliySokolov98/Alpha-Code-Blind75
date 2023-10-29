export function longestCommonSubsequence(text1: string, text2: string): number {
  const M = text1.length;
  const N = text2.length;
  const cache: number[][] = new Array(M).fill(-1).map(()=>new Array(N).fill(-1));
  const dp = (i: number, j: number):number =>{
      if (i === M || j === N) {
          return 0;
      }
      if(cache[i][j] !== -1) {
          return cache[i][j];
      }
      if(text1[i] === text2[j]) {
          cache[i][j] = 1 + dp(i + 1, j + 1);
      }
      else{
          cache[i][j] = Math.max(dp(i + 1, j), dp(i, j+1));
      }
      return cache[i][j];
  }
  return dp(0, 0);
};