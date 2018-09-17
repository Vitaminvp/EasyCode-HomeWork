const myReduce = (elem, func, initial) => {
    if(elem instanceof Array){
        let tempEl = null;
        let i = null;
        let [first, ...rest] = elem;
        if(initial){
            tempEl = initial;
            i = 0;
        } else{
            tempEl = first;
            i = 1;
        }
        for(; i < elem.length; i++){
            tempEl = func(myReduce(, elem[i], i, elem);
        }
        return tempEl;
    }else return undefined;

}


const arr = [5, 7, 3, 2, 1];
const myFuncForReduce = (sum, item) => sum + item;
console.log("myReduce", myReduce(arr, myFuncForReduce));

// const myReduce = (elem, func, initial) => {
//     if(elem instanceof Array){
//         let tempEl = null;
//         let i = null;
//         if(initial){
//             tempEl = initial;
//             i = 0;
//         } else{
//             tempEl = elem[0];
//             i = 1;
//         }
//         for(; i < elem.length; i++){
//             tempEl = func(tempEl, elem[i], i, elem);
//         }
//         return tempEl;
//     }else return undefined;
//
// }