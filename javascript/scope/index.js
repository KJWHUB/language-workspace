let a = "Hello";
const b = {
  name: "John",
};

function a1(str) {
  str = "World";
}

function b1(obj) {
  obj.name = "Doe";
}

const c = {
  name: "John",
};
function c1(obj) {
  obj = {
    name: "Doe",
  };
}

a1(a);
b1(b);
c1(c);

console.log(a);
console.log(b);
console.log(c);
