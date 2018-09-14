const arr = [5, 7, 3, 2, 1];

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
const str = "Same string for test";


const myLast = (elem) => {
    if(elem instanceof Array || typeof elem == "string"){
        if (!elem.length) return undefined;
        return elem[elem.length -1];
    }else return undefined;
}

console.log('myLast', myLast(arr));
console.log('----------------------------------------------');
console.log('myLast', myLast(obj));
console.log('----------------------------------------------');
console.log('myLast', myLast(str));