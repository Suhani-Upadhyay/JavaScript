//  how to iterate object

const  person1= {
    "name" :"shivani",
    age :21,
    phone_n : 9027601766,
    "person hobbies": ["reading", "playing", "sleeping"]
}

// for in loop
// object.keys

for(let key in person1){
    console.log(key);
}

for(let key in person1){
    console.log(person1[key]);
}

for(let key in person1){
    console.log(`${key} : ${person1[key]}`);
    console.log(key, ":" ,person1[key]);
}

console.log(Object.keys(person1));
console.log(Array.isArray(Object.keys(person1)));

for(let key of (Object.keys(person1))){
    console.log(person1[key]);
    console.log(key)
}