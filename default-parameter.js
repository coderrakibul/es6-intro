//second parameter na dile dile default parameter hisebe undifined pabe and 0 ke set korbe
// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     const result = num1 + num2;
//     return result;
// }
// const number = add(15, 2);
// console.log(number);



// default man 10 orthat second parameter na dile default hisebe 10 nebe
function add(num1, num2 = 10){
    const result = num1 + num2;
    return result;
}
const number = add(15, 2);
console.log(number);