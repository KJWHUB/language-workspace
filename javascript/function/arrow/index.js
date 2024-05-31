const arrowfunction = () => {
  console.log("Arrow function");

  console.log("this ====>>>", this);

  const a = 1;

  return {
    a,
    b: 2,
    c() {
      console.log("c function", this);
      this.a = 10;
      return this.a + this.b;
    },
  };
};

function normalfunction() {
  console.log("Normal function");

  console.log("this ====>>>", this);

  const a = 1;

  return {
    a,
    b: 2,
    c() {
      console.log("c function", this);
      this.a = 10;
      return this.a + this.b;
    },
  };
}

const main = () => {
  const a = arrowfunction();
  console.log("a ====>>>", a);
  console.log("a.c() ====>>>", a.c());
  console.log("a ====>>>", a);

  const b = normalfunction();
  console.log("b ====>>>", b);
  console.log("b.c() ====>>>", b.c());
  console.log("b ====>>>", b);
};

main();
