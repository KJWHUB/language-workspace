const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

// myPromise.then(handleFulfilledA, handleRejectedA).then(handleFulfilledB, handleRejectedB).then(handleFulfilledC, handleRejectedC);

console.log("Start");
console.log(myPromise);

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

const now = Date.now();

// 지난 시간
const a = setTimeout(() => {
  const passed = Date.now() - now;
  console.log("패스", passed);

  return 1;
}, 1000);

throw "Time Limit Exceeded";

console.log("ooo", await a);
