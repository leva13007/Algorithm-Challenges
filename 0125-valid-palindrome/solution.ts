// export function isPalindrome(s: string): boolean {
//   // filtering -> toLowerCase() -> copy -> toArray() -> reverse() -> toString() -> compare original with copy

//   const originSrt = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   const copyStr = [...originSrt].reverse().join("");

//   return originSrt === copyStr;
// }

// Complexity 5n -> O(n)
// Memory O(1)

export function isPalindrome(s: string): boolean {
  // THE loop through the `s`, init pointer1 = 0 and pointer2 = s.lenght - 1, 
  // check if they're ASCII, match characters if not the same return false otherwise next iteration 
  // until pointer1 === pointer2
  
  let p1 = 0, p2 = s.length - 1;
  while(p1 <= p2){
    if(!/[a-zA-Z0-9]/g.test(s[p1])){
      p1++;
    } else if (!/[a-zA-Z0-9]/g.test(s[p2])){
      p2--;
    } else {
      if (s[p1].toLowerCase() !== s[p2].toLowerCase()) return false;
      p1++;
      p2--;
    }
  }
  return true;
}

// Complexity O(n)
// Memory O(1)