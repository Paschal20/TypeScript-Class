//string :Represents textual data

let bookTitle: string = "TypeScript Essentials";

//number :Represents both integers and floating-point numbers.

let pageCount: number = 350;

//boolean :Represents a true/false value.

let isPublished: boolean = true;

//any :Allows any type of value (disables type checking).

let data: any = "Could be anything";
data = 42; // Still valid

//array :Represents a list of values of a specific type.

let tags: string[] = ["typescript", "javascript", "coding"];

//tuple :Represents a fixed-length array with known types at each index.

let bookInfo: [string, number] = ["Clean Code", 464];

//enum – Enumerated Types :Represents a set of named constants.

enum UserRole {
  Admin,
  Editor,
  Viewer,
}

let currentUserRole: UserRole = UserRole.Editor;
console.log(currentUserRole); // Output: 1

// void – No Return Value" :Used for functions that don’t return anything.
function logMessage(message: string): void {
  console.log("Log:", message);
}

//unknown – Safer Alternative to any :Represents a value with an unknown type. You must check its type before using it.

let input: unknown = "Hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}

//null – Explicit Absence of Value :Represents an intentional absence of any object value.

let selectedBook: string | null = null;

//undefined – Uninitialized Value :Represents a variable that has been declared but not assigned a value.

let price: number | undefined;

//object – Non-Primitive Values :Represents any non-primitive value (not number, string, boolean, etc.).

let book: object = { title: "TS Guide", pages: 200 };
