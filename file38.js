//  object inside array 
//  very useful in  real world applications

const users =[
    {userid: 1, firstname: "suhani", age: 20},
    {userid: 2, firstname: "shivani", age: 21},
    {userid: 3, firstname: "renu", age: 22}
]

console.log(users); 

for(let user of users){
    console.log(user);
    console.log(user.userid);
}
