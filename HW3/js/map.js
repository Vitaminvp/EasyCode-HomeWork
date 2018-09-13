
const arr = [5, 7, 3, 2, 1];


const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4

};

const myFunc = x => x*2;


const myMap = (elem, func) => {
    if(elem instanceof Array){
        if (!elem.length) return [];
        let [x, ...rest] = elem;
        return [func(x), ...myMap(rest, func)];
    }else if (elem instanceof Object){
        const newObj = {...elem}
        for(let key in newObj){
             newObj[key] = func(newObj[key]);
        }
        return newObj;
    }else {
         return func(elem);
    }
}

console.log('myMap', myMap(arr, myFunc));
console.log('----------------------------------------------');
console.log('myMap', myMap(obj, myFunc));