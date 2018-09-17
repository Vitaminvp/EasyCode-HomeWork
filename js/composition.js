// ========== BASE ==============

// const compose = (f1, f2) => value => f1( f2(value) );
//
// const example = compose(
//   val => { console.log(1); return `1<${val}>`; },
//   val => { console.log(2); return `2<${val}>`; },
// );
//
// console.log("Compose");
// console.log(example('hello'));

// ================ REAL ==============
// const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const compose = function(...fns){
  return fns.reduce( (f, g) => {
      return (...args) => {
        f(g(...args))
      }
  });
}
const pipe = (...fns) => compose.apply(compose, fns.reverse());

const example = compose(
  val => { console.log(1); return `1<${val}>`; },
  val => { console.log(2); return `2<${val}>`; },
  val => { console.log(3); return `3<${val}>`; }
);

// const example2 = pipe(
//   val => { console.log(1); return `1<${val}>`; },
//   val => { console.log(2); return `2<${val}>`; },
//   val => { console.log(3); return `3<${val}>`; }
// )

console.log("Compose");
console.log(example('hello'));

// console.log("Pipe");
// console.log(example2('hello'));

// =============== COMPARE ==============

// 'Hello'
//   .replace(/Hello/g, 'Bye')
//   .concat('!')
//   .repeat(2)
//   .split('!')
//   .filter(x=>x!='!')
//   .map(x=>'Hello').toString();

// compose(
//   replace(/Hello/g,'Bye'),
//   concat('!'),
//   repeat(2),
//   split('!'),
//   filter(x=>x!='!'),
//   map(x=>'Hello'),
//   toString
//  )('Hello');
