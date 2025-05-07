// ## Common the repetition Things
// type Details = {name: string, marks: number, address? : string};
type Details = { name: string, marks: number, address?: string };

// const result1 : {name: string, marks: number, address? : string} = {
const result1 : Details = { 
    name : "mr. Samy",
    marks : 99,
    // address: "delhi 84"
}

// const result2 : {name: string, marks: number, address? : string} = {
const result2 : Details = {
    name : "Neraj",
    marks : 99,
    address: "delhi 34"
}

console.log(result1);
console.log(result2);