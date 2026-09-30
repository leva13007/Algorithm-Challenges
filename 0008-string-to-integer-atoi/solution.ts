const rec = (num: string): number | undefined => {
  return num.codePointAt(0);
}

const trim = (s: string): string => {
  let result = "";
  for(let i=0; i<s.length; i++){
    const newSymbol = rec(s[i])
    if (newSymbol === 32 && result.length === 0) continue;
    result += s[i]
  }
  return result;
}


// 48..57 -> 0..9
// "-" -> 45
// "+" -> 43
const MIN = 2147483648;
const MAX = 2147483647


export function myAtoi(s: string): number {
  let result = 0;

  const trimmedS = trim(s);
  if (trimmedS.length === 0) return result;
  let signed = 0;
  if (rec(trimmedS[0]) === 45){
    signed = -1;
  } else if (rec(trimmedS[0]) === 43) {
     signed = 1;
  }

  let i = (signed === 0 ? 0 : 1)
  for(; i<trimmedS.length; i++){
    const newSymbol = rec(trimmedS[i]);

    if (newSymbol === undefined || newSymbol < 48 || newSymbol > 57) break;
    result = result*10 + (newSymbol - 48);
    
    if (signed !== -1 && result >= MAX) {
      return MAX;
    } else if (signed === -1 && result >= MIN) {
      return MIN * -1;
    }
  }

  if (signed !== 0) result *= signed;
  return result;
}


// Time O(n)