//  array push pop

let fruits1 = ["apple", "mango", "orange" ];
console.log(fruits1);

// push --- add elements from last
fruits1.push("banana");
console.log(fruits1);

// pop--- delete element from last

let poppedFruits= fruits1.pop();
console.log(fruits1);
console.log(poppedFruits);


// unshift ---add elements in starting

fruits1.unshift("grapes");
console.log(fruits1);


// shift --- delete from starting

fruits1.shift();
console.log(fruits1);

// pop and push is faster than shift and unshift

