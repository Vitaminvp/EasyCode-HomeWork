var arr = [
    { 'user':  'barney',   'age': 36 },
    { 'user':  'barney2',  'age': 36 },
    { 'user1': 'barney3',  'age': 36 },
    { 'user':  'fred',     'age': 40 }
];
const obj = {
    a: 1,
    b: 2,
    c: 3
};

const myPluck = (el, path) => {
    if(el instanceof Array){
        let [first, ...rest] = [...el];
        if(first && first instanceof Object){
            first = {...first};
            if (first[path]) return [first[path], ...myPluck(rest, path)];
            else return [...myPluck(rest, path)];
        }
        return [];
    }else return undefined;
};


console.log('myPluck', myPluck(arr, "age"));
console.log('----------------------------------------------');
// console.log('myPluck', myPluck(obj, "age"));
//
// console.log('arr',arr);
// console.log('obj',obj);
