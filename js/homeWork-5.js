const arr = [
    {
        key: "QWr234RT", //
        type: "mapped", // possible values "unmapped", "need verification", "mapped"
        merchantName: "David", // make from merchantName and merchantSurname new fild merchantFullName, and remove this fields
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61134", // filter by zip
        transactions: {   // calculate in new field all transactions
            new: 1363,
            returning: 245
        },
        reviews: [ // filter bad reviews < 5
            { comment: "Cool guy", rating: 8 },
            { comment: "Ugh", rating: 3 },
        ],
        listOfStores: "west, nord, center" // make it array of stores
    },
    {
        key: "QWr234RY",
        type: "need verification", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61136",
        transactions: {
            new: 15,
            returning: 198
        },
        reviews: [
            { comment: "Cool guy", rating: 6 },
            { comment: "Ugh", rating: 2 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RU",
        type: "mapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61136",
        transactions: {
            new: 335,
            returning: 65
        },
        reviews: [
            { comment: "Cool guy", rating: 5 },
            { comment: "Ugh", rating: 2 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RI",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61114",
        transactions: {
            new: 456,
            returning: 32
        },
        reviews: [
            { comment: "Cool guy", rating: 9 },
            { comment: "Ugh", rating: 6 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RO",
        type: "need verification", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61116",
        transactions: {
            new: 345,
            returning: 23
        },
        reviews: [
            { comment: "Cool guy", rating: 9 },
            { comment: "Ugh", rating: 9 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RP",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61126",
        transactions: {
            new: 395,
            returning: 34
        },
        reviews: [
            { comment: "Cool guy", rating: 5 },
            { comment: "Ugh", rating: 4 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RA",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61135",
        transactions: {
            new: 45,
            returning: 232
        },
        reviews: [
            { comment: "Cool guy", rating: 8 },
            { comment: "Ugh", rating: 5 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RS",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61107",
        transactions: {
            new: 98,
            returning: 67
        },
        reviews: [
            { comment: "Cool guy", rating: 7 },
            { comment: "Ugh", rating: 2 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RD",
        type: "need verification", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61105",
        transactions: {
            new: 345,
            returning: 233
        },
        reviews: [
            { comment: "Cool guy", rating: 676 },
            { comment: "Ugh", rating: 64 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RF",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61155",
        transactions: {
            new: 65,
            returning: 21
        },
        reviews: [
            { comment: "Cool guy", rating: 7 },
            { comment: "Ugh", rating: 1 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RG",
        type: "mapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61456",
        transactions: {
            new: 213,
            returning: 456
        },
        reviews: [
            { comment: "Cool guy", rating: 6 },
            { comment: "Ugh", rating: 2 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RH",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61152",
        transactions: {
            new: 65,
            returning: 456
        },
        reviews: [
            { comment: "Cool guy", rating: 8 },
            { comment: "Ugh", rating: 3 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RJ",
        type: "need verification", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61125",
        transactions: {
            new: 45,
            returning: 678
        },
        reviews: [
            { comment: "Cool guy", rating: 7 },
            { comment: "Ugh", rating: 7 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RK",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61135",
        transactions: {
            new: 135,
            returning: 135
        },
        reviews: [
            { comment: "Cool guy", rating: 3 },
            { comment: "Ugh", rating: 4 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RL",
        type: "need verification", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61123",
        transactions: {
            new: 123,
            returning: 345
        },
        reviews: [
            { comment: "Cool guy", rating: 7 },
            { comment: "Ugh", rating: 9 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RZ",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61186",
        transactions: {
            new: 554,
            returning: 867
        },
        reviews: [
            { comment: "Cool guy", rating: 6 },
            { comment: "Ugh", rating: 5 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RX",
        type: "mapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61187",
        transactions: {
            new: 234,
            returning: 123
        },
        reviews: [
            { comment: "Cool guy", rating: 2 },
            { comment: "Ugh", rating: 3 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RC",
        type: "mapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61188",
        transactions: {
            new: 77,
            returning: 88
        },
        reviews: [
            { comment: "Cool guy", rating: 5 },
            { comment: "Ugh", rating: 3 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RV",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61175",
        transactions: {
            new: 145,
            returning: 175
        },
        reviews: [
            { comment: "Cool guy", rating: 2 },
            { comment: "Ugh", rating: 3 },
        ],
        listOfStores: "west, nord, center"
    },
    {
        key: "QWr234RB",
        type: "unmapped", 
        merchantName: "David",
        merchantSurname: "Arenas",
        merchantCity: "Charlotte",
        merchantZip: "61139",
        transactions: {
            new: 154,
            returning: 134
        },
        reviews: [
            { comment: "Cool guy", rating: 5 },
            { comment: "Ugh", rating: 3 },
        ],
        listOfStores: "west, nord, center"
    }
];
const myFilter = (elem, func) => {
    let newArr = [];
    if(elem.length){
        let [x, ...rest] = elem;
        if(x instanceof Object) x = {...x};
        if(func(x)) return newArr = [...newArr, x, ...myFilter(rest, func)];
        else return newArr = [...newArr, ...myFilter(rest, func)];
    }else return newArr;
}
const myMap = (elem, func) =>{
    if(elem instanceof Array){
        if (!elem.length) return [];
        let [x, ...rest] = elem;
        if(x instanceof Object) x = {...x};
        if(x instanceof Array) x = [...x];
        return [func(x), ...myMap(rest, func)];
    }else if (elem instanceof Object){
        const newObj = {...elem}
        for(let key in newObj){
            newObj[key] = func(newObj[key]);
        }
        return newObj;
    }else return func(elem);
};

const filterFunc = item => item.type == "unmapped" && item.merchantZip < 61175;
const mapFunc = item => ({
    key: item.key,
    type: item.type,
    merchantFullName: item.merchantName + " " + item.merchantSurname,
    merchantCity: item.merchantCity,
    merchantZip: item.merchantZip,
    transactions: {...item.transactions, summ: item.transactions.new + item.transactions.returning},
    reviews: myFilter([...JSON.parse(JSON.stringify(item.reviews))], el => el.rating > 5),
    listOfStores: myMap(Array.from(item.listOfStores.split(',')), item => item.trim())
});

const myMapForCompose = el => myMap(el, mapFunc);
const myFilterForCompose = el => myFilter(el, filterFunc);


const print = arg => document.write(JSON.stringify(arg));

let slowFn = (arg) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(arg), 1000);
    setTimeout(() => reject(new Error('O_o)')), 2000);
});

const myFuncPromise = (arg) => {
    return slowFn(arg)
                .then(result => myFilterForCompose(result))
                .then(result => myMapForCompose(result))
                .then(result => {
                        console.table(result);
                        print(result);
                        return result;
                    })
                .catch(err => console.error(err));
}

myFuncPromise(arr);

async function myFuncAsync(arg){
    try {
        let arr = await slowFn(arg);
        arr = myMapForCompose(myFilterForCompose(arr));
        console.table(arr);
        print(arr);
        return arr;
    } catch (err){
        console.error(err);
    }
}

myFuncAsync(arr);

