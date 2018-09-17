
const arr = [5, 7, 3, 2, 1, 54, 65, 23];


const myAdd = (augend, addend) => parseFloat(augend) + parseFloat(addend);


console.log('myAdd',arr.map(item => myAdd(item, 1)));
console.log('----------------------------------------------');
console.log('arr',arr);

