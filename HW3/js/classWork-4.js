arr = [
    {
        name: "Test1",
        type: 1,
        size: 100,
        flow: "direct"
    },
    {
        name: "Test2",
        type: 2,
        size: 120,
        flow: "direct"
    },
    {
        name: "Test3",
        type: 3,
        size: 130,
        flow: "direct"
    },
    {
        name: "Test4",
        type: 4,
        size: 140,
        flow: "direct"
    },
    {
        name: "Test5",
        type: 5,
        size: 150,
        flow: "direct"
    },
    {
        name: "Test6",
        type: 6,
        size: 160,
        flow: "reverse"
    },
    {
        name: "Test7",
        type: 7,
        size: 170,
        flow: "direct"
    },
    {
        name: "Test8",
        type: 8,
        size: 180,
        flow: "reverse"
    },
    {
        name: "Test9",
        type: 9,
        size: 190,
        flow: "reverse"
    },
    {
        name: "Test10",
        type: 10,
        size: 200,
        flow: "direct"
    },
];

const filterFunc = item => item.type < 9 && item.size > 140 && item.flow == "direct";
const mapFunc = item => item.name += "-direct";

const myFilter = (elem, func) => {
    let newArr = [];
    if(elem.length){
        const [x, ...rest] = elem;
        if(func(x)) {
            return newArr = [...newArr, x, ...myFilter(rest, func)];
        }else {
            return newArr = [...newArr, ...myFilter(rest, func)];
        }
    }else{
        return newArr;
    }
}

const myMap = (elem, func) => {
    if(elem instanceof Array){
        if (!elem.length) return [];
        let [x, ...rest] = elem;
        if(x instanceof Object) x = {...x};
        return [func(x), ...myMap(rest, func)];
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

const myMapForCompose = el => myMap(el, mapFunc);
const myFilterForCompose = el => myFilter(el, filterFunc);

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

console.log(compose(
    myMapForCompose,
    myFilterForCompose
)(arr));

