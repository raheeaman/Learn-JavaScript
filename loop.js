//for loop
for (let i=1;i<=100;i++){
    console.log("No future");
}

let sum=0;
let n=100;
for (let i=0;i<=n;i++){
    sum=sum+i;
}
console.log("sum",sum);

for(let i=1;i<=5;i++){
    console.log("i=",i);
}
/* let i=20;
console.log(i); */


//while-loop
let i=1;
while(i<=5){
  console.log("i=",i);
  i++;
}

//do-while loop
let t=1
do{
    console.log("t=",t);
    t++;
}
while(t<=5);

//for-of loop
let str="Helloworld";
let size=0;

for(let val of str){
    console.log("val=", val);
    size++;
}
console.log("str size=", size);


//for-in loop
let student ={
    name:"Rahul",
    age:23,
    cgpa:3.6,
    isPass:true
};
for(let key in student){
    console.log("key=", key,"value=", student[key]);
}
