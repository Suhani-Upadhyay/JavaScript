// . function : like as servent

// console.log("happy birthday to you.....");

// console.log("happy birthday to you.....");

// 2. function expression


const singhHappyBirthday1 =function(){
    console.log("happy birthday to you1.....");
}

singhHappyBirthday1();

//  3.arrow function

const singhHappyBirthday2 = ()  => {
    console.log("happy birthday to you2.....");
}


singhHappyBirthday2();


const isEven = number => number%2===0;

console.log(isEven(4));



// 1 function declaration

function singhHappyBirthday(){
    console.log("happy birthday to you.....");
    
}

singhHappyBirthday();


function addNum(){
    console.log(2+40);
}

addNum();
addNum();
addNum();


//  call , invoke, run means are same


function addNum1(){
    return 2+42;
}

console.log(addNum1());
const returnvalue= addNum1();
console.log(returnvalue);

// . gives parameter

function sumTwoNum(number1, number2){
    return number1+ number2;

}

console.log(sumTwoNum(2,4));
console.log(sumTwoNum());
console.log(sumTwoNum(2,));

//  odd or evev
// input: 1 number
// output : true/false

function inputNum(number){
    if (number%2==0){
        console.log("true");
    }
    else{
        console.log("false");
    }    
    
}
inputNum(5);

// 


function inputNum1(number){
    if (number%2==0){
        return true;
    }
    return false;
    
}
console.log(inputNum1(5));

// 

function inputNum2(number){
    return number % 2==0;
}
console.log(inputNum2(1));

// function 
//  input: 'string'
// output: firstCharacter


function name(urName){
    return urName[0];
}

console.log(name("suhani"));

// wop :  
// input: array , target(number)
// output: index of target if target present in array
// [1,2,,7,3]

function arr(array , target){
    for(let i=0; i<array.length;i++){
        if(array[i]==target){
            return i; 
        }
           
    }
    return -1;
}

const myArray=[1,3,8,90];
const newArray=(myArray,8);
console.log(newArray);

//  function expression















