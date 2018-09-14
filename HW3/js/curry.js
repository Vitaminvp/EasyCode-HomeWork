// ========= BASE ==================

// log(status, context, message)

// function log(status) {
//   return function(context) {
//     return function(message) {
//       // fancy logging code here
//     };
//   };
// }

// =========== SAMPLE =================

// let add = x => y => x + y;
//
// let increment = add(1);
// let incrementBy2 = add(2);
//
// console.log('Increment 3 by 1:', increment(3));
// console.log('Increment 3 by 2:', incrementBy2(3));

// ============== UNCURRY PROBLEM ==============

// const add = x => y => x + y;
// let add2 = add(2);
//
// add2(4);
// add(2)(4); // 6, but should be add(2, 4)




const uncurry = f => (...args) => args.reduce( (g, x) => g(x), f);

const myUncurry = function (f) {
    console.log('f-', f);
    return function (...args) {
        console.log('args', args);
        return  args.reduce( (g, x) => {
            console.log('g:', g);
            console.log('x:', x);
            return g(x)
        }, f);
    }
};
const add = uncurry(x => y => x + y);
const myadd = myUncurry(x => y => z => x + y + z);



// let add2 = add(2);
// add2(4);
// add(2, 4);
// console.log('add2(4)', add2(4));
// console.log('add(2, 4)', add(2, 4));



// let myadd2 = myadd(2);
// myadd2(4);
// myadd(2, 4, 5);
// console.log('myadd2(4)', myadd2(4));
console.log('myadd(2, 4, 5)', myadd(2, 4, 5));








//
// function curry(fn) {
//     const oldArgs = Array.prototype.slice.call(arguments, 1); // отбрасываем первый аргумент
//
//     return function () {
//         const args = oldArgs.concat(Array.from(arguments));
//
//         return fn.apply(null, args); // вызываем функцию для, которой проводилось каррирование
//     }
// }
//
// function add(x, y) {
//     return x + y;
// }
//
// var add10 = curry(add, 10);
// var add_ = curry(add);
//
// var r1 = add10(5);  // 15
// var r2 = add10(10); // 20
// var r2 = add10(10); // 20
//
//
// console.log(r1 + "<br />");
// console.log(r2 + "<br />");
// console.log(add_(10, 20) + "<br />");
//
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// var newSum = curry(sum, 1, 2);
// var r3 = newSum(5); // 8
// console.log(r3);

// =============== LODASH ====================

// var log = _.curry(function(status, context, message) {
//   // fancy logging code here
// });

// log('status', 'context', 'message');

// var info = log('info');
// info('foo-context', 'foo-message');

// var apiInfo = info('api');
// apiInfo('api message');

// var dbWarn = log('warn', 'db');
// dbWarn('something terrible happened');
