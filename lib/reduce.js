const myReduce = (elem, func, initial) => {
    if(elem instanceof Array){
        let tempEl;
        let [first, ...rest] = elem;
        if(elem.length > 1){
            if(initial){
                tempEl = func(initial, first);
                return tempEl = myReduce(rest, func, tempEl);
            }else{
                tempEl = func(elem[0], elem[1]);
                let [newFirst, ...newRest] = rest;
                return tempEl = myReduce(newRest, func, tempEl);
            }
        }else if( elem.length == 1 ){
            if(initial) return tempEl = func(initial, elem[0]);
            return elem[0];
        }else{
            return initial;
        }
        return tempEl;
    }else return undefined;
}
const arr = [2];
const myFuncForReduce = (sum, item) => sum * item + 1;
console.log("myReduce", myReduce(arr, myFuncForReduce, 5));


const myReduceWFor = (elem, func, initial) => {
    if(elem instanceof Array){
        let tempEl = null;
        let i = null;
        if(initial){
            tempEl = initial;
            i = 0;
        } else{
            tempEl = elem[0];
            i = 1;
        }
        for(; i < elem.length; i++){
            tempEl = func(tempEl, elem[i], i, elem);
        }
        return tempEl;
    }else return undefined;
}
console.log("myReduce", myReduceWFor(arr, myFuncForReduce, 5));