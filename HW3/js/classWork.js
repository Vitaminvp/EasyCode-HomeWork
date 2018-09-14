let add = x => y => z => x+ y+ z.reduce((sum, current) => sum+current, 0);

let incX = add(1);
let incY = incX(2);

console.log('Increment 3 by 1:', incY([1, 2, 3]));
