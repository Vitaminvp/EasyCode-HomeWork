const myFlatten = elem => {
    if(elem instanceof Array) {
        let result = [];
        const newEl = [...elem];
        newEl.forEach(el => {
            if(el instanceof Array){
                result = [...result, ...myFlatten(el)];
            }else{
                result = [...result, el];
            }
        });
        return result;

    }
}

arr = [ 1 ,  [ 2 ,  [ 3 ,  [ 4 ]] ,  5, [ 6 ]], 7, [ 8, [ 9 ]]];
console.log('myFlatten', myFlatten(arr));
console.log('arr', arr);
