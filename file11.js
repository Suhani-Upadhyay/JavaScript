// . undefined 
//  . null 


let firstName; 
console.log(typeof firstName)

firstName="suhani"
console.log(typeof firstName , firstName)

let myVariable = null;
console.log(myVariable)
myVariable= "shivani";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// . null = object(bug ,error)


//  . BigInt
let myNumber =123;
console.log(Number.MAX_SAFE_INTEGER);

let myNumber1=BigInt(8594365438653438849348398543984439);
console.log(myNumber1)
let sameMyNumber= BigInt(12);
let sameMyNumber1= 12n;
console.log(sameMyNumber+ sameMyNumber1)