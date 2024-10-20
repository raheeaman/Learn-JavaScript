let sum=0;
let marks1=[85,97,44,37,76,60];
for(let val of marks1){
    sum+=val;
}
let avg=sum/marks1.length;
console.log(`avg marks of the class = ${avg}`);
