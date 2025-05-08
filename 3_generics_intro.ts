let schoolName : "DPS" | "DAV" = "DPS";
let another : string = "KV";

another = schoolName;

console.log(another);

type Complex = {
    real: number,
    imag: number,
    // def: number,
    add: (c: Complex) => Complex
}

interface IComplex {
    real: number,
    imag: number,
    // def: 0 | 1 | -1,
    // ran: number
    add: (c: IComplex) => IComplex
}

let c1: Complex = {
    real : 10,
    imag: 20,
    // def: 10,
    add: (C) => {return C}
}

let c2: IComplex = {
    real : 9,
    imag: 9,
    // add: (c) => {return c}
    // ran: 10,
    // def: 1,
    add: (C) => {return C}
}

c1 = c2; // TS will consider complex and IComplex same because the members are same. Although the namees are diff, still doesn't matter

console.log(c1);