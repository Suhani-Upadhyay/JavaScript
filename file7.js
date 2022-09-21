//trim()--- remove space

let firstName = "     suhani     ";
console.log(firstName.length);
// becoz space are include

let newstring = firstName.trim();
console.log(newstring.length);

firstName= firstName.trim();
console.log(firstName.length);

//touppercase()
firstName = firstName.toUpperCase();
console.log(firstName.toUpperCase());

//tolowercase()

let firstName1="suHaNI";
firstName1=firstName1.toLowerCase();
console.log(firstName1);

//slice
   //start index
   //end index

let newstring1= firstName1.slice(0,4); 
// slice(1)then full string are print
console.log(newstring1);