console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve,reject) => {
setTimeout(() => {
resolve('ticket');
},3000)
});

const getPopcorn = new Promise((resolve , reject) => resolve('popcorn'));
const addButter = new Promise((resolve , reject) => resolve('butter'));
const coldDrinks = new Promise((resolve , reject) => resolve('coldDrinks'));


let ticket = await promiseWifeBringingTicks;

console.log('wife: i have the tickets');
console.log('husband: we should go in');
console.log('wife: no i am hungry');

let popcorn = await getPopcorn;

console.log('wife: i have got some popcorn');
console.log('husband: we should go in');
console.log('wife: i need butter on my popcorn');

let butter = await addButter;

console.log('wife: i have got some butter');
console.log('husband: we should go in');
console.log('wife: i need butter ');

let cold = await coldDrinks;

console.log('wife: i have got some coldDrinks');
console.log('husband: we should go in');
console.log('wife: i need coldDrinks ');




return ticket;
}

preMovie().then((m) => console.log('person3: shows ${m}'));


console.log('person4: shows ticket');
console.log('person5: shows ticket');