let add = x => y => z => z.map((item) => item + x+y);

let incX = add(1);
let incY = incX(2);

// console.log('Increment 3 by 1:', incY([1, 2, 3]));


var maxCallback = ( acc, cur ) => {
    console.log(acc,"  ", cur);
    return Math.max( acc.x, cur.x );
}
var maxCallback2 = ( max, cur ) => {
    console.log(max,"  ", cur);
    return Math.max( max, cur );
}

// reduce() without initialValue
// [ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
// [ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
// [                      ].reduce( maxCallback ); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
// [ { x: 22 }, { x: 42 } ].map( el => el.x )
// .reduce( maxCallback2, -Infinity );

// const arr = [{x:22}, {x:42}, {x:65}, {x:11}];
const arr_2 = [22, 42, 65, 11, 255];
const arr2 = [{x:222}, {x:42}];

// console.log(arr.reduce( maxCallback, 0 ));
// console.log(arr.map( el => el.x ).reduce(maxCallback2));

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    // console.log(accumulator, " - " ,current);
    const length = accumulator.length;
    if (length === 0 || accumulator[length - 1] !== current) {
    accumulator.push(current);
}
return accumulator;
}, []);
// console.log(result); //[1,2,3,4,5]

// Building-blocks to use for composition

const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality

const pipe = (...functions) => input => functions.reduce( (acc, fn) => fn(acc), input );

// Composed functions for multiplication of specific values

const multiply6  = pipe(double, triple);
const multiply9  = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);
const myMultiply = pipe(triple, double);
// const myMultiply = pipe(double, triple);

// Usage
multiply6(6);   // 36
multiply9(9);   // 81
multiply16(16); // 256
multiply24(10); // 240

console.log(myMultiply(1));