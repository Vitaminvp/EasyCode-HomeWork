const myFilter = (elem, func) =>
{
    let newArr;
    const [x, ...rest] = elem;
    console.log('x', x);
    console.log('rest', rest);
    if(func(x)){
        return newArr = [x, ...myFilter(rest, func)];
    }else{
        return newArr = [...myFilter(rest, func)];
    }
}
arr = [12, 3, 6, 87, 45];
const func = x => x > 10;

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