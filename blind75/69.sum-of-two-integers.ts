export const sum = (a: number, b: number): number => {
  while (b) {
    [a, b] = [a ^ b, (a & b) << 1];
  }
  return a;
};

export const difference = (a: number, b: number): number => {
  while (b) {
    [a,b] = [a ^ b, (~a & b) << 1];
  }
  return a;
};

export function getSum(a: number, b: number): number {
if(a < 0) {
    if(b < 0) {
        return -sum(-a, -b);
    }
    else if (b > -a){
        return difference(b, -a);
    }
    else {
        return -difference(-a, b);
    }
}
if(b < 0) {
   if (a > -b){
        return difference(a, -b);
    }
    else {
        return -difference(-b, a);
    }
}

return sum(a, b);
}
