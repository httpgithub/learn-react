//  Generator.prototype.throw()

//Generator 函数返回的遍历器对象(iterator)，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
var g = function*() {
  try {
    yield 1;
  } catch (e) {
    console.log("内部捕获", e);
  }
};

var i = g();
console.info(i.next());
i.throw("e");
console.info(i.next());
//注意iterator外部抛出异常， 一定在遍历之前{ value: undefined, done: true }抛出异常，否则报错
// 报错  i.throw("e")

console.info(
  "================================================================="
);
//eg2
var g = function*() {
  try {
    yield;
  } catch (e) {
    console.log("内部捕获", e);
  }
};

var i = g();
i.next();

try {
  i.throw("a");
  i.throw("b");
} catch (e) {
  console.log("外部捕获", e);
}

// 内部捕获 a
// 外部捕获 b
//上面代码中，遍历器对象i连续抛出两个错误。第一个错误被 Generator 函数体内的catch语句捕获。
//i第二次抛出错误，由于 Generator 函数内部的catch语句已经执行过了，不会再捕捉到这个错误了，
//所以这个错误就被抛出了 Generator 函数体，被函数体外的catch语句捕获。

console.info(
  "================================================================="
);
// throw方法可以接受一个参数，该参数会被catch语句接收，建议抛出Error对象的实例。
var g = function*() {
  try {
    yield;
  } catch (e) {
    console.log(e);
  }
};

var i = g();
i.next();
i.throw(new Error("出错了！"));
// Error: 出错了！(…)

console.info(
  "================================================================="
);
//如果 Generator 函数内部没有部署try...catch代码块，那么throw方法抛出的错误，将被外部try...catch代码块捕获。
var g = function*() {
  while (true) {
    yield;
    console.log("内部捕获", e);
  }
};

var i = g();
i.next();

try {
  i.throw("a");
  i.throw("b");
} catch (e) {
  console.log("外部捕获", e);
}
// 外部捕获 a

console.info(
  "================================================================="
);
//throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。
function* gen() {
  try {
    yield 1;
  } catch (e) {
    console.log("内部捕获");
  }
}

var g = gen();
g.throw(1);
//上面代码中，g.throw(1)执行时，next方法一次都没有执行过。这时，抛出的错误不会被内部捕获，而是直接在外部抛出，导致程序出错。这种行为其实很好理解，因为第一次执行next方法，等同于启动执行 Generator 函数的内部代码，否则 Generator 函数还没有开始执行，这时throw方法抛错只可能抛出在函数外部。

console.info(
  "================================================================="
);

//Generator.prototype.return()
//Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }




console.info(
  "================================================================="
);

console.info(
  "================================================================="
);

console.info(
  "================================================================="
);

console.info(
  "================================================================="
);

console.info(
  "================================================================="
);

console.info(
  "================================================================="
);

