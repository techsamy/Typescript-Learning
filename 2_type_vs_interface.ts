// type vs interface 

type text = string;

// for defining custom types for arrays, type keyword is more easy
type stringArray = string[];

// using an interface we will define an object which will be always having keys 
// of type number and value to be of the type of the array
interface numberArray {
    [index: number]: number
}

// Let's say we want to define a pair or a triplet or a custom tuple (set of x values)
type pair = [number, number];
type triplet = [number, number, number];

interface pairInterface {
    first: number,
    second: number
}

// Can type and interaces respresent functions ?

type logger = (msg: string, errorcode: number) => void;

interface loggerInterface {
    // log: (msg: string, errorcode: number) => void; //method 1
    (msg: string, errorcode: number): void; //method 2
}

// Defining unions is possibel with type but not interface's

type unionOfstrandnum = number | string;


interface ComplexNumber {
    real: number,
    imaginary: number
}

interface ComplexNumber {
    add: (num: ComplexNumber) => ComplexNumber;
}

/**
 * This is the equavalent of both the the above. It will merge both same interface
 * interface ComplexNumber {
    real: number,
    imaginary: number
    add: (num: ComplexNumber) => ComplexNumber
}
 */