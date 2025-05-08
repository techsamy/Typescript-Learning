 -function sum(a: number,b?: number) : number{
    return a + (b || 0 );
}

// console.log(sum(20, "samy"));
// console.log(sum(20));


// date object in TS
const dob = new Date(1998, 3, 11);
console.log(dob);
console.log(dob.getDate());
console.log(dob.getMonth());
console.log(dob.getFullYear());

let x;
x= 20;

enum TicketStatus {
    INTIALIZED,
    CANCELLED,
    PENDING,
    CLOSED
}

console.log(TicketStatus.PENDING);

const Ticket = {
    id : 1,
    name: "New Ticket",
    status : TicketStatus.INTIALIZED
}

if(Ticket.status == TicketStatus.INTIALIZED){
    console.log("Done - Matched");
}

// ## Common the repetition Things
type Details = {name: string, marks: number, address? : string};

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


console.log(result1, result2);