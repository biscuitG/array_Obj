
// array declare
let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[45]); // undefined not syntax error

// different filed can too
let newarray=[1,'helo',[3,5,9]];
console.log(newarray);

// unusual
let mde=[];
mde[3]='defder';
mde[9]='desw'; // is not syntax error
console.log(mde);

// another way to creaete array
let arrq=new Array(5); // one input -> 5 size ka aarray and(3,4) then it is arr with 3,4 like that


// some methods in array
//1) push(x),pop() it just add x in last,remove at last

let fre=[23,56,21,32,12,3,4,3,22,23,23,23,2,3];
fre.push(3456633); // fre.push(x) and fre.pop(x) return size of array after operation
console.log(fre.length);

// 2) unshift(x),shift() -> add x in front,remove from front
let fre2=[23,56,21,32,12,3,4,3,22,23,23,23,2,3];
fre2.shift();
console.log(fre2);
fre2.unshift(34);
console.log(fre2);


// 3) splice(x,y)-> start from x idx take y length and delete from array

let fre3=[32,3,23,2,31,4,36,3,63,6,346,5,2,32,5,32,5];
let temp3=fre3.splice(2,4);
console.log(temp3); // it return and mutate both
console.log(fre3);

// 4 -> reverse() permanent change and return

// 5) slice(x,y) [x,y) return and not change x,y order matter here x>=y or outofindex [], other wise ans  

let fre4=[2,2,23,434,324,2342,43,4];
console.log(fre4.slice(4,5));

// 6) includes(x) bool if includes

//IMPORTANT 
const swe=[23,45,'ased'];
swe.push(34); // is right as doing method 
// but swe='def' is wrong as we change const value 
 

// object

const obj={
    name: "Purushottam",
    surname: "Jha",
    'income' : 2000000,
    male : true
};

// mae is actually 'name'
console.log(obj['name']);
console.log(obj.income);
obj.setNew='der'; // cont hai fir bhi we can do as const obj is still object

console.log(obj);




