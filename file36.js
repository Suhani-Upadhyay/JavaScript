//  spread operator  in array ---- spread elements
const array1= [1,2,3];
const array2 =[5,6,7];

const myNewArray=[...array1, ...array2];
console.log(myNewArray);


//  only string 

const newArray = [..."abc"];
console.log(newArray);

const number =[..."123456789"];
console.log(number);

// spread operator in objects

const obj1= {
    key1: "value1",
    key2: "value2",
    key1: "value5"
}
console.log(obj1);


const obj2= {
    key1: "value26",
    key3: "value10",
    key4: "value20",
    key4: "value52"
}
console.log(obj2);


const newObj= {...obj1, ...obj2};
const newObj1= {...obj2, ...obj1};
const newObj2= {...obj2, ...obj1, name: "suhani"};


console.log(newObj);
console.log(newObj1);
console.log(newObj2);


const alpha ={..."suhani"};

console.log(alpha);





