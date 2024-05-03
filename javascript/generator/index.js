function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20
console.log(gen);

// 피보나치의 수열 풀이
function* a() {
  const arr = [];

  while (true) {
    if (arr.length === 0) arr.push(0);
    else if (arr.length === 1) arr.push(1);
    else arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    yield arr[arr.length - 1];
  }
}

const b = a();

console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());

// 더 나은 방법

function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
