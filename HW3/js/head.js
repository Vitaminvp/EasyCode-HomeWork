const arr = [5, 7, 3, 2, 1];
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
const str = "Same string for test";


const myHead = (elem) => {
    if(elem instanceof Array || typeof elem == "string"){
        if (!elem.length) return undefined;
        return elem[0];
    }else return undefined;
}

console.log('myHead', myHead(arr));
console.log('----------------------------------------------');
console.log('myHead', myHead(obj));
console.log('----------------------------------------------');
console.log('myHead', myHead(str));