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

let add = x => y => x + y;

let increment = add(1);
let incrementBy2 = add(2);

console.log('Increment 3 by 1:', increment(3));
console.log('Increment 3 by 2:', incrementBy2(3));

// ============== UNCURRY PROBLEM ==============

// const add = x => y => x + y;
// let add2 = add(2);

// add2(4);
// add(2)(4); // 6, but should be add(2, 4)

// const uncurry = f => (...args) => args.reduce((g, x) => g(x), f);
// const add = uncurry(x => y => x + y);

// let add2 = add(2);
// add2(4);
// add(2, 4);

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
