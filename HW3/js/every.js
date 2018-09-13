const MyEvery = (elem, func) => {
    if(elem instanceof Array){
        for(let i = 0; i < elem.length; i++){
            if(!func(elem[i], i, elem)) return false;
        }
        return true;
    }else if (elem instanceof Object){
        for(let key in elem){
            if(!func(elem[key], key, elem)) return false;
        }
        return true;
    }else{
        return func(elem);
    }
}