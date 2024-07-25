const a = [];

const b = a[-1];

console.log(b); // undefined

const map = new Map([
  [1, 2],
  [3, 4],
  [5, 6],
]);

const keys = map.keys();

console.log(keys); // MapIterator { 1, 3, 5 }
console.log(keys.return);

console.log(keys.next().value);

const arr = [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7];
const arr2 = [...arr].sort((a, b) => a - b);

console.log(arr.length);
console.log(arr);
console.log(arr2);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], arr2[i]);
  if (arr[i] !== arr2[i]) {
    console.log("not equal");
  }
}

const arr3 = arr2.filter((item, index) => item === arr[index]);

console.log(arr3.length);

(() => {
  for (let i = 0; i < 10; i++) {
    console.log("iii >>>", i);
    for (let j = 0; j < 10; j++) {
      console.log("jjj", j);
      if (j === 5) {
        return;
      }
    }
  }
})();

let A = 1;
let B = 2;
