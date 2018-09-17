
const arr = [5, 7, 3, 2, 1, 54, 65, 23];


const myDivide = (dividend, divisor) =>  parseFloat(dividend/divisor).toFixed(2);


console.log('myDivide',arr.map(item => myDivide(item, item - 1)));
console.log('----------------------------------------------');
