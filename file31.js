// array destructuring

const myArray = ["value1", "value2", "value3"];
// let myvar1 = myArray[0];
// let myVar2 = myArray[1];

// console.log(myVar1);
// console.log(myVar2);



let [myVar1, myVar2, ...myNewArray ]= myArray;
// const not use becoz const does'nt change
console.log(myVar1);
console.log(myVar2);
console.log(myNewArray);


