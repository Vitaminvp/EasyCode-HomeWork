const arr = [1, 2, 5, 're', 65];
const str = "Some string";

const myReverse = ( el ) => {
    if(el.length < 1) return '';
    if(el instanceof Array){
        const newArr = [...el];
        return [newArr.pop(), ...myReverse(newArr)];
    }else if(typeof el == 'string'){
        return myReverse(el.substr(1)) + el[0];
    }else return undefined;

}

console.log(myReverse(arr));
console.log((arr));

console.log('_______________________________________________');

console.log(myReverse(str));
console.log((str));