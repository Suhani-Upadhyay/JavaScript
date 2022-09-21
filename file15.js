//  and or operator

let  firstName="suhani";
let age = 2;

if(firstName[0]==="s"){
    console.log("ur name starts with s")
}

if(firstName[0]==="s" && age>18){
    console.log("ur name starts with s and above 18");
}
else{
    console.log("inside else")
}


if(firstName[0]==="s" || age>18){
    console.log("ur name starts with s and above 18");
}
else{
    console.log("inside else")
}