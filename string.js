let str="This is string"
let str2='This is string again'
console.log(str[5]);

//Special String

let specialString=`This is template literal`;
console.log(typeof specialString);

let obj={
    item:"pen",
    price:10,
};

let output=`the cost of ${obj.item} is ${obj.price} taka`;
console.log(output);

console.log("Hello \nworld"); 

let str3= "uppercase"; //str3.toUppercase
let newStr3=str3.toUpperCase();
console.log(str3);
console.log(newStr3);
let newStr4=str3.toLowerCase();
console.log(newStr4);

let str5="     hee  lllo   wo  r ld   ";
console.log(str5);
console.log(str5.trim()); //removes spaces from the beginning and end.

 console.log(str3.slice(1,4)); //adds two strings into one
 console.log(str3.concat(str5));

 console.log(str.replaceAll("t","uuu")); //replace character

 console.log(str3.charAt(4));

 