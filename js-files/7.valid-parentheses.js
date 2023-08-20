"use strict";
function isValid(s) {
    const stack = [];
    const opens = '([{';
    for (let paren of s) {
        if (opens.includes(paren))
            stack.push(paren);
        else {
            if (!stack.length)
                return false;
            const open = stack.pop();
            if (paren === ')') {
                if (open !== '(')
                    return false;
            }
            else if (paren === ']') {
                if (open !== '[')
                    return false;
            }
            else if (paren === '}') {
                if (open !== '{')
                    return false;
            }
            else
                return false;
        }
    }
    return stack.length === 0;
}
;
