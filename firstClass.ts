let user = "Paschal Anaedu";
// user = 10;
console.log(user);

let food: string = "Jollof Rice";
console.log(food);

let age: number = 30;
console.log(age);

let list: Array<string> = ["class", "Teacher", "student"];
console.log(list);

let numArray: number[] = [1, 2, 3, 4, 5];
console.log(numArray);

let allArray: Array<Number | String | Boolean> = [1, "two", false];

allArray = ["two", 1, false];

function multiply(a: number, b: number, c: number): number {
  return a * b * c;
}
console.log(multiply(2, 3, 4));
export {};
