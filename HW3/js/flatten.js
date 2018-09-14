
const myFlatten = elem => {
    if(elem instanceof Array) {
        if (!elem.length) return;
        let [x, ...[rest]] = elem;
        console.log('rest', rest);
        if(x instanceof Array){
            const newX = [...x];
            return [...newX, myFlatten(rest)];

        }else{
            const newX = x;
            return [newX, myFlatten(rest)];
        }
    }
}

arr = [ 1 ,  [ 2 ,  [ 3 ,  [ 4 ]] ,  5 ]];
console.log('arr', arr);
console.log('myFlatten', myFlatten(arr));
