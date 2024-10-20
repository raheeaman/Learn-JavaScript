let marks =[97,98,87,36,73];
let name=["Rahul","Fahim","karim","Messi","pedri"];
console.log(marks);
console.log(marks.length);
console.log(name);
console.log(marks[3]);
console.log(name[0]);
marks[3]=76;
console.log(marks[3]);

//for loop
for (let i=0;i<name.length;i++){
    console.log(name[i]);
}

//for of loop
let cities=["Dhaka","Sylhet","Rajshahi","Khulna","Rangpur"];
for(let city of cities){
    console.log(city.toUpperCase());
}


let foods=["potato","apple","tomato","banana"];

console.log(foods);
foods.push("chips","milk"); //add items in the end
console.log(foods);

let a= foods.pop(); //removes items from the end
console.log(a)

console.log(foods.toString()) //creates a string of the array

let mcu=["spiderman","ironman","thor"];
let dcu=["flash","batman","superman"];
let heroes=mcu.concat(dcu); //combines two arrays 
console.log(heroes);

mcu.unshift("captain"); //adds item in the start
console.log(mcu);
console.log(dcu.shift()); //removes item from the start

let marvel=["spiderman","ironman","thor","black panther","dr strange","antman"];
console.log(marvel);

console.log(marvel.slice(2,5)); //slices an array by indicating the starting index, ending index doesn't include its value

arr=[4,3,5,65,33,22,4,2,55,334];
console.log(arr);
console.log(arr.splice(2,2,101,787));






