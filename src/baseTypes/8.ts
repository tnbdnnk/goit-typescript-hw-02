/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

// const myGender;

type Gender = "male" | "female";

const myGender: Gender = 'female';
console.log(myGender);

export {};
