const prompt = require('prompt-sync')();
let number1 = prompt('Please type first number ');
console.log(`First number is ${number1}!`);
number1 = Number(number1);
const operator = prompt('Please type operator ');
console.log(`Operator ${operator}! `);
let number2 = prompt('Please type second number ');
console.log(`Second number is ${number2}!`);
number2 = Number(number2);
if(operator === '+'){
    let result = number1 + number2;
    console.log(`Result is ${result}`);}
else if(operator === '*'){
    let result = number1 * number2;
    console.log(`Result is ${result}`);
} else if(operator === '/'){
    let result = number1 / number2;
    console.log(`Result is ${result}`);
} else if(operator === '-'){
    let result = number1 - number2;
    console.log(`Result is ${result}`);
} else{
    console.log('wrong operator');
}
