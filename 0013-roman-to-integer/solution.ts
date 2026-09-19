type RomanNumber = "I" | "V" | "X" | "L" | "C" | "D" | "M";
type IntegerNumber = 1 | 5 | 10 | 50 | 100 | 500 | 1000;

const values: Record<RomanNumber, IntegerNumber> = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  }

export function romanToInt(s: string): number {
  // const values = {
  //   "I":1,
  //   "V":5,
  //   "X":10,
  //   "L":50,
  //   "C":100,
  //   "D":500,
  //   "M":1000
  // } as const

  // "MCMXCIV" -> ["M", "C", "M", "X", "C", "I", "V"] -> [1000, 100, 1000, 10, 100, 1, 5] -> [1000, -1 * 100, 1000, -1 * 10, 100, -1 * 1, 5] = 1994
  // O(n) O(1)

  let result = 0;
  for(let i=0;i<s.length;i++){
    const current: IntegerNumber = values[s[i] as RomanNumber]
    const next: IntegerNumber | undefined = values[s[i + 1] as RomanNumber]

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}
