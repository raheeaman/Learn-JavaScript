console.log("Welcome to JS");
name= "Rahee Aman";
console.log(name);
age=21;
console.log(age);
x=null;
y=undefined;
console.log(x);
console.log(y);
isFollow= true;
console.log(isFollow); 
let fullName = " Tony Stark";
console.log(fullName);
const PI=3.14;
{
    let a=6;
    console.log(a);
}
{
    let a=7;
    console.log(a);
}

const student = {
    name : "Rahee Aman",
    age : 21,
    cgpa : 3.00,
    isPass : true,
};

student["age"]= student["age"] + 1;
console.log(student.age);


// practice 1

const product={
    title:"Ball Pen",
    rating:4,
    offer:5,
    price:250,
}

// Arithmetic operators
let a=5;
let b=4;
c=a+b;
d=a-b;
e=a*b;
f=a/b;
g=a%b;
h=a**b
console.log("a+b=",c, "a-b=",d, ",fa*b=", e, "a/b=",f,"a%b=",g,"a**b=",h);

//unary operators
console.log(a++); //post increment
console.log(++b); //pre increment

//Assignment operator
a+=6; // a=a+6
console.log(a);

//comparison operators

console.log(a==b);//(==) means equal
console.log(a!=b);//(!=) means not equal

console.log("5"==5); //js converts string to number if only number exists
console.log("7"===7); //(===) means equal to and type

console.log(8>9); //(>,<) means greater than and less than

//logical operators

console.log(2==2 && 3<6); //(&&) means Logical AND
console.log(3==4 || 4>2); //means Logical OR and (!) means Logical NOT

//conditional statements

let mark=76; // if conditon
if(mark>=40){
    console.log("Your're passed");
}

mode="blue"; //if-else conditon
if(mode=="dark"){
    console.log("black");
}
else{
   console.log("white");
}

//Ternary operators
let age2=27;
let result = age2>=18 ? "adult":"not adult";
console.log(result);


// let name2 = prompt("your name?")
// console.log(name2);


  