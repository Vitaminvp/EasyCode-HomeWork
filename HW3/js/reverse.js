const arr = [1, 2, 5, 're', 65];
const str = "Some string";

const myFind = ( el ) => {
    if(el.length < 1) return '';
    if(el instanceof Array){
        const newArr = [...el];
        return [newArr.pop(), ...myFind(newArr)];

    }else if(typeof el == 'string'){

        return myFind(el.substr(1)) + el[0];

    }else return undefined;

}

console.log(myFind(arr));
console.log((arr));

console.log('_______________________________________________');

console.log(myFind(str));
console.log((str));