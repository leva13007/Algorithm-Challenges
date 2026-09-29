export function isValid(s: string): boolean {

  if (s.length % 2 === 1) return false; // `[{}`

  // loop through `s` -> s[i] -> put it to the FILO(stack) if this is open one,
  // if it's close one compare with the top element in the stack,
  // if they are the couple remove last element from the stack,
  // if they aren't couple return false
  // once we done the loop check the lenght of the stack should be 0 for true

  const stack = [];
  const brackets: Record<string, string> = {
    ")":"(",
    "}":"{",
    "]":"[",
  }

  for(let i = 0; i<s.length; i++){
    if(brackets[s[i]]){
      if (stack.length === 0) return false
      if (stack[stack.length - 1] === brackets[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}

// Complexity O(n)
// Memory O(n)