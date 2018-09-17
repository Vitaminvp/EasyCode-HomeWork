
const arr = [5, 7, 3, 2, 1, 54, 65, 23];


const myMax = (elem) => {
    if(elem instanceof Array) {
       return Math.max.apply(null, elem);
    } else {
       return undefined;
    }
}

console.log('myMax', myMax(arr));
console.log('----------------------------------------------');
// console.log('myMax', myMax(obj, myFunc));