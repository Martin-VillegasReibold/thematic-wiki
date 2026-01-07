const GRADE_MAP = {
  "?": 0,
  F: 1,
  E: 2,
  D: 3,
  C: 4,
  B: 5,
  A: 6,
  S: 7,
  SS: 8,
  SSS: 9,
  MAX: 10,
};
// Parse a grade like 'A++' -> { base: 'A', bonus: 2, baseValue: 6, totalValue: 8 }
export const parseGrade = (grade) => {
  if (!grade) return { base: "?", bonus: 0, baseValue: 0, totalValue: 0 };
  let base = grade;
  let bonus = 0;
  if (typeof grade === "string") {
    const match = grade.match(/^(.*?)(\++)$/);
    if (match) {
      base = match[1];
      bonus = match[2].length;
    }
  }
  const baseValue = GRADE_MAP[base] ?? 0;
  return { base, bonus, baseValue, totalValue: baseValue + bonus };
}

export default parseGrade;
