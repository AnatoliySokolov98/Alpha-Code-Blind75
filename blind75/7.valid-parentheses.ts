function isValid(s: string): boolean {
  const stack : string [] = [];
  const opens : string = '([{';
  for(let paren of s) {
    if (opens.includes(paren))
      stack.push(paren);
    else {
      if(!stack.length)
        return false;

      const open: string | undefined = stack.pop();
      if(paren === ')') {
        if (open !== '(')
          return false;
      }
      else if(paren === ']') {
        if (open !== '[')
          return false;
      }
      else if(paren === '}') {
        if (open !== '{')
          return false;
      }
      else
        return false;
    }
  }
  return stack.length === 0;
};


