function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1, res = 0;
  while(left < right) {
    res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right])
      left ++;
    else
      right --;
  }
  return res;
};



