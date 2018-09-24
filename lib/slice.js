const arr = [5, 7, 3, 2, 1, 54, 65, 23, 55, 9];
const obj = {
    a: 1,
    b: 2,
    c: 3
}

const mySlice = (el, first = 0, last = el.length) => {
    if(el instanceof Array){
        if (first < 0 ) first = el.length + first;
        if (last < 0 ) last = el.length + last;
        if (first > last) [first, last] = [last, first];
        if (first == last) return [];
        if(first < el.length && first < last){
            return result = [el[first], ...mySlice(el, ++first, last)];
        }else return [];
    }else{
        return undefined;
    }
};


console.log('mySlice', mySlice(arr, -1));
console.log('----------------------------------------------');
// console.log('mySlice', mySlice(obj));

// console.log('arr',arr);
// console.log('obj',obj);
