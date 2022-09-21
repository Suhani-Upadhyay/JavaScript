//  for loop in array (for in loop)
const fruits =["apple", "mango", "grapes"];
const fruits1 =[];

for(let index in fruits){
    console.log(index);
    console.log(fruits[index].toUpperCase())
    fruits1.push(fruits[index].toUpperCase())
}
console.log(fruits1);

// for of loop

const fruits2 =["apple", "mango", "grapes"];
const fruits3 =[];

for(let index in fruits2){
    console.log(index);
    console.log(fruits2[index].toUpperCase())
    fruits3.push(fruits2[index].toUpperCase())
}
console.log(fruits3);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}


