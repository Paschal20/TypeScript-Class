// functions.ts

function calculateReadingTime(wordsPerPage: number): number {
  return wordsPerPage * 2.5;
}

const result = calculateReadingTime(100);
console.log(result);
export {};