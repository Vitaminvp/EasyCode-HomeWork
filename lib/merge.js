var  obj1 = {
    'a' : [{  'b' :  2  } ,  {  'd' :  4  }]
};
var  obj2 = {
    'a' : [{  'c' :  3  } ,  {  'e' :  5  }]
};
var  obj3 = {
    'a' : [{  'f' :  3  } ,  {  'j' :  5  }]
};

const myMerge = (elem, ...args) => {
    if (elem instanceof Object){
        let [first, ...rest] = args;
        let item1;
        let item2;
        if (first instanceof Object){
            if(Object.keys(elem).length >= Object.keys(first).length) {
                item1 = {...elem};
                item2 = {...first};
            }else {
                item2 = {...elem};
                item1 = {...first};
            }
            for(let key in item1){
                for(let i = 0; i < item1[key].length; i++){
                    item1[key][i] = { ...item1[key][i], ...item2[key][i] };
                }
            }
            return myMerge(item1, ...rest);
        }else return myMerge(elem, ...rest);
    }
};


console.log(myMerge(obj1, obj2, obj3));