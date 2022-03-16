// kono array er vetor theke element gulo ke niye asar jonno
// const numbers = [12, 41, 32, 10, 24, 25];
// console.log(numbers);
// console.log(...numbers);


//max number from a normal list
// const max = Math.max(45, 23, 99, 65);
// console.log(max);

//min number from a normal list
// const min = Math.min(45, 23, 99, 65);
// console.log(min);


//max number in array
// const maxInArray = Math.max(...numbers);
// console.log(maxInArray);


//min number in array
// const minInArray = Math.min(...numbers);
// console.log(minInArray);

// push kora element cara oroginal numbers in array dekhte chai
// const numbers = [12, 41, 32, 10, 24, 25];
// const numbers2 = [...numbers];
// numbers.push(55);
// console.log(numbers);
// console.log(numbers2);


//notun array te number add korte chai
const numbers = [12, 41, 32, 10, 24, 25];
const numbers2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);