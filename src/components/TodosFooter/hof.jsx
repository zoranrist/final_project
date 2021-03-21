function hof(a) {
  return function (b) {
    console.log(a + "and" + b);
    return function (c) {
      console.log();
    };
  };
}

const hofHolder = hof(a); // --> returns typeof function

// ...

const f = hofHolder(b);

const h = f(c);
