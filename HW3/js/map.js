const Map = (elem, func) => {
    if(elem instanceof Array){
        const newArr = [...elem];
        for(let i=0; i<newArr.length; i++){
            newArr[i] = func(newArr[i]);
        }
        return newArr;
    }else if (elem instanceof Object){
        const newObj = {...elem}

        for(let key in newObj){
            newObj[key] = func(newObj[key]);
        }
        return newObj;
    }else {
        return func(elem);
    }
}