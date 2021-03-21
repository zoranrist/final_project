function f() {}

let a = [2, 3, 5, 12, 9];

let o = {
  a: 1,
  b: 2,
};

let o_2 = { ...o };

const max = Math.max(...a);
console.log(max);
