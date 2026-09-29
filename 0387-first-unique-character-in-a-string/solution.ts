export function firstUniqChar(s: string): number {
  const freqMap: Record<string, number> = {};
  for(let i=0; i<s.length; i++){
    if(freqMap[s[i]] === undefined){
      freqMap[s[i]] = 1
    } else {
      freqMap[s[i]] += 1
    }
  }

  for(let i=0; i<s.length; i++){
    if (freqMap[s[i]] === 1) return i
  }

  return -1;
}

// Time O(n)
// Memory O(1)