const arr = [5, 7, 3, 2, 1, 54, 65, 23];
const obj = {
    a: 1,
    b: 2,
    c: 3
}

const myCopy = (el) => {
    if(el instanceof Array){
        return [...el];
    }else if (el instanceof Object){
        return {...el};
    }else{
        return el;
    }
}


console.log('myCopy', myCopy(arr));
console.log('----------------------------------------------');
console.log('myCopy', myCopy(obj));

console.log('arr',arr);
console.log('obj',obj);
