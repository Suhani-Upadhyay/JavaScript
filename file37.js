// object destructuring
const intro ={
    collegeName : "ACET",
    course: "b.tech",
    branch: "CSE",
    section: "B"
};

// const collegeName= intro.collegeName;
// const course = intro.course;
// console.log(collegeName,course);

// collegeName:"VCET";
// ye change nhi hoskta kyuki const mai value change nhi kr skte ----  value ko chnage karne keliye hme 
// let use krna pdega
// console.log(collegeName);

// const{collegeName, course} = intro;
// console.log(collegeName);
// console.log(course);

// const{section:sec} = intro;
// console.log(sec);

let {collegeName, course, ...restProperties} = intro;
console.log(restProperties);