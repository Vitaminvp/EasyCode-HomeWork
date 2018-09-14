const myFilter = (elem, func) => {
    let newArr = [];
    if(elem.length){
        const [x, ...rest] = elem;
        if(func(x)) {
            return newArr = [...newArr, x, ...myFilter(rest, func)];
        }else {
            return newArr = [...newArr, ...myFilter(rest, func)];
        }
    }else{
        return newArr;
    }
}
arr = [12, 3, 6, 87, 45, 1000, 85, 1, 'df', [3, 5]];
const func = x => x > 1;

console.log(myFilter(arr, func));

//
// const Filter = (elem, func) => {
//     if(elem instanceof Array){
//         const tempArr = [...elem];
//         let newArr = [];
//         for(let i=0; i < tempArr.length; i++){
//             if(func(tempArr[i])) newArr.push(tempArr[i]);
//         }
//         return newArr;
//     }else if (elem instanceof Object){
//         const newObj = {...elem}
//         for(let key in newObj){
//             if(!func(newObj[key])) {
//                 delete newObj[key];
//             }
//         }
//         return newObj;
//     }else {
//         return func(elem);
//     }
// }