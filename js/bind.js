// ========== BASE ================

// function add(a, b) {
//   return a + b;
// }
 
// function inc(n) {
//   return add(1, n);
// }

// ============== SAMPLE =============

let add = (a, b) => a / b;

let increment = add.bind(null, 9, 2);
let incrementBy2 = add.bind(null, 6);

console.log('Increment 3 by 1:', increment());
// console.log('Increment 3 by 2:', incrementBy2(3));
