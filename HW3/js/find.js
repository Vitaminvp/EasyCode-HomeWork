
const myFind = (elem, func) => {
    if(elem instanceof Array){
        for(let i = 0; i < elem.length; i++){
            if(func(elem[i], i, elem)) return elem[i];
        }
        return undefined;
    }else if (elem instanceof Object){
        for(let key in elem){
            if( func(elem[key], key, elem) ) return elem[key];
        }
        return undefined;
    }
}