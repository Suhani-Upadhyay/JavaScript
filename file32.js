// objects (reference type)
// arrays are good but not sufficient for real world data

// objects store key value pairs
//  objects don't have index

//  how to create objects

const person = {name:"suhani", age:20};
console.log(person);
console.log(typeof person);

// how to access data from objects
console.log(person.name);
console.log(person.age);


const  person1= {
    "name" :"shivani",
    age :21,
    phone_n : 9027601766,
    hobbies: ["reading", "playing", "sleeping"]
}
console.log(person1);
console.log(person1["hobbies"]);

//  how to add key value pair to objects
person1.gender= "female";
person1["regious"]  ="hindu";
console.log(person1);
