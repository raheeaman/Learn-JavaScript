let n=prompt("Enter your score(0-100):")
if(n>=80 && n<=100){
    grade="A";
}
else if(n>=70){
    grade="B";
}
else if(n>=60){
    grade="C";
}
else if(n>=50){
    grade="D";
}
else if(n>=40){
    grade="F"
}
console.log("according to your score",n, "your grade is",grade);