// const  slowFn1 = () => setTimeout(() => console.log('Function1'), 700);
// const  slowFn2 = () => setTimeout(() => console.log('Function2'), 500);

// slowFn1();
// slowFn2();

// let fifteen = Promise.resolve(15);
// fifteen.then(value => console.log(`Got ${value}`));

// let  slowFn1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Function1'), 800);
// });
// let  slowFn2 = new Promise((resolve, reject) => setTimeout(() => resolve('Function2'), 500));

// function func1(arg='test1 - 800 ms') {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`${arg}`), 800);
//     });
// }
// function func2(arg='test2 - 500 ms') {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`${arg}`), 500);
//     });
// }
// function func3(arg='test3 - 300 ms') {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`${arg}`), 300);
//     });
// }
// function func4(arg='test4 - 100 ms') {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`${arg}`), 100);
//     });
// }

let  slowFn3 = (arg) => new Promise((resolve) => {
    setTimeout(() => resolve(arg), 3000);
});
let  slowFn4 = (arg) => new Promise((resolve) => {
    setTimeout(() => resolve(arg), 100);
});
async function func5(arg='test3 - 3000 ms') {
    return await slowFn3(arg);
}
async function func6(arg='test4 - 100 ms') {
    return await slowFn4(arg);
}
Promise.all([func5(), func6()]).then(results => {
    console.log(results);
});


// func1().then(result => console.log(`Fulfild: ${result}`));
// func2().then(result => console.log(`Fulfild: ${result}`));

// slowFn1.then(result => console.log(`Fulfild: ${result}`), result => console.log(`Reject: ${result}`));
// slowFn2
//     .then(result => console.log(`Fulfild: ${result}`))
//     .catch(result => console.log(`Reject: ${result}`));

// Promise.all([func1(), func2(), func3(), func4()]).then(results => {
//     console.log(results);
// });

// let  slowFn1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Function1'), 800);
// });
// let  slowFn2 = new Promise((resolve, reject) => setTimeout(() => resolve('Function2'), 500));


// Promise.all([slowFn1, slowFn2]).then(results => {
//     console.log(results);
// });
// new Promise((_, reject) => reject(new Error("Fail")))
//     .then(value => console.log("Handler 1"))
//     .catch(reason => {
//         console.log("Caught failure " + reason);
//         return "nothing";
//     })
//     .then(value => console.log("Handler 2", value));
// → Caught failure Error: Fail