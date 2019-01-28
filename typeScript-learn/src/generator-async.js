var fetch = require("node-fetch");
var fs = require("fs");

//上面代码中，Generator 函数封装了一个异步操作，该操作先读取一个远程接口，然后从 JSON 格式的数据解析信息。就像前面说过的，这段代码非常像同步操作，除了加上了yield命令。
function* gen() {
  var url = "https://api.github.com/users/github";
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next();
//g.next() 返回一个iterator的元素，包括 value  和 done
console.log("g.next" + JSON.stringify(result));
result.value
  .then(function(data) {
    return data.json();
  })
  .then(function(data) {
    g.next(data);
  });

//thunk
// ES6版本
const Thunk = function(fn) {
  return function(...args) {
    console.info("ddddddddd");
    return function(callback) {
      return fn.call(this, ...args, callback);
    };
  };
};
function f(a, cb) {
  cb(a);
}

const ft = Thunk(f);
//ft返回的是一个function，不带回调的参数
// function(...args) {
//     console.info("ddddddddd");
//     return function(callback) {
//       return fn.call(this, ...args, callback);
//     };
//   };

console.info("ft的类型:" + ft);

const callback = ft(1);
// callback 返回的是callback函数
// function(callback) {
//     return fn.call(this, ...args, callback);
//   }
console.info("callback的类型:" + callback);

callback(console.log); // 1

//Thunk 函数的自动流程管理

function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    //result.value 返回的是一个thunk函数，后面是一个回调函数
    //  {
    //     done：
    //     value：thunkfunction
    // }
    result.value(next);
    //等价于
    // let thunk = result.value
    // thunk(next)
  }

  next();
}
var readFileThunk = Thunk(fs.readFile);

var g = function*() {
  var f1 = yield readFileThunk("fileA");
  var f2 = yield readFileThunk("fileB");
  var fn = yield readFileThunk("fileN");
};

run(g);
