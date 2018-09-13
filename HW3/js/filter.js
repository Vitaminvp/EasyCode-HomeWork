
const Filter = (elem, func) => {
    if(elem instanceof Array){
        const tempArr = [...elem];
        let newArr = [];
        for(let i=0; i < tempArr.length; i++){
            if(func(tempArr[i])) newArr.push(tempArr[i]);
        }
        return newArr;
    }else if (elem instanceof Object){
        const newObj = {...elem}
        for(let key in newObj){
            if(!func(newObj[key])) {
                delete newObj[key];
            }
        }
        return newObj;
    }else {
        return func(elem);
    }
}