
const arr = [5, 7, 3, 2, 1];


const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4

};
const str = "Same string for test";


const myTail = (elem) => {
    if(elem instanceof Array){
        if (!elem.length) return undefined;
        let [x, ...rest] = elem;
        return rest;
    }else if(typeof elem == "string"){
        return elem.substr(1);
    }else return undefined;
}

console.log('myTail:', myTail(arr));
console.log('----------------------------------------------');
console.log('myTail:', myTail(obj));
console.log('----------------------------------------------');
console.log('myTail:', myTail(str));
console.log('str:', str);