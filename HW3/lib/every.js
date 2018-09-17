
const arr = [5, 7, 3, 2, 1];

const myFunc = x => x > 1;


const myEvery = (elem, func) => {
    if(elem.length > 0){
        const [x, ...rest] = elem;

        if (func(x, elem)) {
            return myEvery(rest, func);
        }
        else {
            return false;
        }
    }
    return true;
}

console.log('MyEvery', myEvery(arr, myFunc));