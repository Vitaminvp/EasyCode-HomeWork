const Concat = function(elem){
    if(elem instanceof Array){
        let newArr = [...elem];

        if(arguments.length > 1){
            for(let i=1; i < arguments.length; i++){
                newArr  = [...newArr, ...arguments[i]];
            }
        }
        return newArr;
    }else if (elem instanceof Object){
        let newObj = {...elem}
        if(arguments.length > 1){
            for(let i=1; i < arguments.length; i++){
                newObj  = {...newObj, ...arguments[i]};
            }
        }
        return newObj;
    }else {
        return elem;
    }
};


