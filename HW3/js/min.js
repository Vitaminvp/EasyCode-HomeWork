
const arr = [5, 7, 3, 2, 1, 54, 65, 23];


const myMin = (elem) => {
    if(elem instanceof Array) {
        return Math.min.apply(null, elem);
    } else {
        return undefined;
    }
}

console.log('myMin', myMin(arr));
console.log('----------------------------------------------');
// console.log('myMin', myMin(obj, myFunc));