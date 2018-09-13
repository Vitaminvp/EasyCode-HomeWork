const myReduce = (elem, func, initial) => {
    if(elem instanceof Array){
        let tempEl = null;
        let i = null;
        if(initial){
            tempEl = initial;
            i = 0;
        } else{
            tempEl = elem[0];
            i = 1;
        }
        for(; i < elem.length; i++){
            tempEl = func(tempEl, elem[i], i, elem);
        }
        return tempEl;
    }else return undefined;

}