export function reverseString(s: string[]): void {
  for(let i = 0; i < s.length/2; i++){
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
    // [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }
}

// Complexity O(n)
// Memory O(1)