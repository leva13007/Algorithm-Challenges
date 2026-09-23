// export function longestCommonPrefix(strs: string[]): string {
//   let Output = "";

//   if (strs.length === 1) return strs[0];

//   // loop to 200 in single string strs[][i] -> nested loop through strs[j] compare strs[j][i]
//   for (let i = 0; i <= 200; i++){
//     let isDifferent = false;
//     const currentLetter = strs[0][i];
//     if (!currentLetter) {
//       break;
//     }
//     for (let j = 1; j < strs.length; j++){
//       if (currentLetter !== strs[j][i]) {
//         isDifferent = true;
//         break;
//       }
//     }
//     if (isDifferent) {
//       break;
//     }
//     Output += currentLetter;
//   }


//   return Output;
// };

// Complexity O(n*m)
// Memory O(1)

export function longestCommonPrefix(strs: string[]): string {
  let Output = "";

  // aaa
  // aaaa
  // aab
  // ab

  strs.sort();
  for (let i = 0; i <= strs[0].length; i++){
    let isDifferent = false;
    if (!strs[0][i]) {
      break;
    }
    if (strs[0][i] !== strs[strs.length - 1][i]) {
        isDifferent = true;
        break;
    }
    if (isDifferent) {
      break;
    }
    Output += strs[0][i];
  }


  return Output;
};