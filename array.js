
let cars=['merceds','volvo','BMW'];
console.log(cars);
cars.push('nano');
console.log(cars);
console.log(cars.length);

let thing = new Array('TV','fridge','table');
console.log(thing);
console.log(thing[1]);
thing[1]='AC';
console.log(thing[1]);
// console.log(thing);

///arraymethods
let fruits=['apple','banana', 'oranges'];
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.shift()
console.log(fruits);
fruits.push('kiwi');
console.log(fruits);
fruits.push('banana', 'lemon');
console.log(fruits);
fruits.unshift('avacado');
console.log(fruits);
delete fruits[1];
console.log(fruits);
fruits[1]='leaf'
console.log(fruits);
fruits.splice(0,2);
console.log(fruits);
fruits.splice(0,2,'orange','veggies');
console.log(fruits);

let evennumber = [2,4,6];
let oddnumber=[1,3,5];
let primenumber=[2,3,5];
let number= evennumber.concat(oddnumber,primenumber);
console.log(number);

