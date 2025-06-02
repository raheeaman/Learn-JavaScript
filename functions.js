 function myFunction(){
    console.log("Welcome to function");
    console.log("We are learning JS");
    console.log("abc".toUpperCase());
 }

 // function -> product of 2 nummbers
 function product(x,y){
   console.log(x*y);
 }
 // function -> sum of 2 numbers
 function sum(x,y){
   s=x+y;
   console.log("before return");
   return s;
   console.log("after return")
 }
let val=sum(453,72)
console.log(val);

// arrow function
const arrowSum=(a,b)=>{
   console.log(a+b)
};

