// export function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;

//   // Has table hash = {"letter": count} -> loop throught the "s" and build Has table hash["letter"]++ ->
//   // loop throught the "t" and do decrement hash["letter"]-- if hash["letter"] is undefined return flase
//   // loop throught the to make sure that all values are 0 

//   const hash = new Map();
//   for (let i=0;i<s.length;i++){
//     if(hash.has(s[i])){
//       hash.set(s[i], hash.get(s[i]) + 1)
//     } else {
//       hash.set(s[i], 1)
//     }
//   }

//   for (let i=0;i<t.length;i++){
//     if(hash.has(t[i])){
//       hash.set(t[i], hash.get(t[i]) - 1);
//       if(hash.get(t[i]) === 0) hash.delete(t[i])
//     } else {
//       return false
//     }
//   }

//   return hash.size === 0
//   // for(const [key, value] of hash){
//   //   if (value !== 0) return false
//   // }

//   // return true;
// }

// Complexity O(n)
// Memory O(n)

// export function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;

//   // s -> toArray -> sort -> toString
//   // t -> toArray -> sort -> toString
//   // return s === t

//   return [...s].sort().join("") === [...t].sort().join("");
// }


export function isAnagram(s: string, t: string): boolean {
  if (s.normalize('NFC').length !== t.normalize('NFC').length) return false;
  const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });

  const hash = new Map();
  for (const { segment } of segmenter.segment(s)) { 
    if(hash.has(segment.normalize('NFC'))){
      hash.set(segment.normalize('NFC'), hash.get(segment.normalize('NFC')) + 1)
    } else {
      hash.set(segment.normalize('NFC'), 1)
    }
  }

  for (const { segment } of segmenter.segment(t)) { 
    if(hash.has(segment.normalize('NFC'))){
      hash.set(segment.normalize('NFC'), hash.get(segment.normalize('NFC')) - 1);
      if(hash.get(segment.normalize('NFC')) === 0) hash.delete(segment.normalize('NFC'))
    } else {
      return false
    }
  }

  return hash.size === 0
}