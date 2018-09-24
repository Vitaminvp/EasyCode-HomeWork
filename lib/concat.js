const myConcat = (...args) =>{
    let newArr = [];
    let firstArg = (args[0] instanceof Array)? args[0]: [args[0]];
    if(firstArg){
        if(args.length > 1){
            const restArg = args.slice(1);
            newArr  = [...newArr, ...firstArg, ...myConcat(...restArg)];
        }else{
            newArr  = [...newArr, ...firstArg];
        }
        return newArr;
    }
    return newArr;
};

console.log('myConcat', myConcat([1, 2], [3, 'we'], [5, 'fd'], 4, 'fg', [ 2, [5]], [[[5], 3]]));
console.log('myConcat', myConcat(1, 2, 3));





// const myConcat = function(){
//     let newArr = [];
//     let firstArg = (arguments[0] instanceof Array)? arguments[0]: [arguments[0]];
//     if(firstArg){
//         if(arguments.length > 1){
//             const restArg = Array.prototype.slice.call(arguments, 1);
//             newArr  = [...newArr, ...firstArg, ...myConcat(...restArg)];
//         }else{
//             newArr  = [...newArr, ...firstArg];
//         }
//         return newArr;
//     }
//     return newArr;
// };

// const Concat = function(elem){
//     if(elem instanceof Array){
//         let newArr = [...elem];
//
//         if(arguments.length > 1){
//             for(let i=1; i < arguments.length; i++){
//                 newArr  = [...newArr, ...arguments[i]];
//             }
//         }
//         return newArr;
//     }else if (elem instanceof Object){
//         let newObj = {...elem}
//         if(arguments.length > 1){
//             for(let i=1; i < arguments.length; i++){
//                 newObj  = {...newObj, ...arguments[i]};
//             }
//         }
//         return newObj;
//     }else {
//         return elem;
//     }
// };


