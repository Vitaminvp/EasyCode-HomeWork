const arr = [5, 7, 3, 2, 1, 54, 65, 23];
const obj = {
    a: 1,
    b: 2,
    c: 3
}

const mySlice = (el, first, last) => {
    if(el instanceof Array){

        
        return [...el];

    }else{
        return el;
    }
}


console.log('mySlice', mySlice(arr));
console.log('----------------------------------------------');
console.log('mySlice', mySlice(obj));

console.log('arr',arr);
console.log('obj',obj);
