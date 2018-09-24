const arr = [5, 7, 3, 2, 1];

const myFunc = x => x > 6;


const mySome = (elem, func) => {
    if(elem.length > 0){
        const [x, ...rest] = elem;
        if (!func(x, elem)) {
            return mySome(rest, func);
        }
        else {
            return true;
        }
    }
    return false;
}

console.log('MySome', mySome(arr, myFunc));










// const MySome = (elem, func) => {
//     if(elem instanceof Array){
//         for(let i = 0; i < elem.length; i++){
//             if(func(elem[i], i, elem)) return true;
//         }
//         return false;
//     }else if (elem instanceof Object){
//         for(let key in elem){
//             if(func(elem[key], key, elem)) return true;
//         }
//         return false;
//     }else{
//         return func(elem);
//     }
// }
