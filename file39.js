// nested destructuring
const users =[
    {userid: 1, firstname: "suhani", age: 20},
    {userid: 2, firstname: "shivani", age: 21},
    {userid: 3, firstname: "renu", age: 22}
]

// const[user1, user2, user3] = users;
// console.log(user1);

// const [{firstname}, ,{age}] = users;
// console.log(firstname);
// console.log(age);

const [{firstname: user1firstname, userid}, ,{age: user3age}] = users;
console.log(user1firstname);
console.log(userid);
console.log(user3age);


