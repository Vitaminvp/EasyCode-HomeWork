const  obj1 = {
    'a' : [{  'b' :  2  } ,  {  'd' :  4  }]
};
const  obj2 = {
    'a' : [{  'c' :  3  } ,  {  'e' :  5  }]
};
const  obj3 = {
    'a' : [{  'f' :  3  } ,  {  'j' :  5  },  {  'k' :  5  },  {  'z' :  9  }]
};
const  obj4 = {
    'a' : [{  'x' :  3  } ,  {  'v' :  5  },  {  'p' :  4  }]
};

const myMerge = (elem, ...args) => {
    if (elem instanceof Object){
        let [first, ...rest] = args;
        let item1 = {...elem};
        let item2 = {...first};
        if (first instanceof Object){
            if(Object.keys(elem).length < Object.keys(first).length) {
                item2 = {...elem};
                item1 = {...first};
            }
            for(let key in item1){
                if(item2[key]) {
                    if (item1[key].length < item2[key].length) {
                        for(let i = 0; i < item2[key].length; i++){
                            item1[key][i] = { ...item2[key][i], ...(item1[key][i]?item1[key][i]:[]) };
                        }
                    }else{
                        for(let i = 0; i < item1[key].length; i++){
                            item1[key][i] = { ...item1[key][i], ...(item2[key][i]?item2[key][i]:[]) };
                        }
                    }
                }
            }
        return myMerge(item1, ...rest);
        }else return item1;
    }else return {...elem};
};
console.log("myMerge: ", myMerge(obj1, obj2, obj3, obj4));