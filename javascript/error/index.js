const error = () => {
  throw "에러 문자열";
};

const internalError = () => {
  try {
    throw "내부 에러 문자열";
  } catch (error) {
    console.error(error);
  }
};

// run time error
const timeError = () => {
  setTimeout(() => {
    throw "Time Limit Exceeded";
  }, 3000);
};

const asyncError = async () => {
  let answer = 0;
  setTimeout(() => {
    answer = 10;
  }, 3000);
  return answer;
};

const main = async () => {
  try {
    // error();
    // internalError();
    // timeError();
  } catch (err) {
    console.error("main err ====>>>", err);
  }
};

main();

const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve("Success");
      throw new Error("This is an error");
    } catch (error) {
      reject(error);
    }
  }, 1000);
})
  .then((res) => {
    console.log("res ====>>>", res);
  })
  .catch((error) => {
    console.error("이곳에서 예외를 잡아냅니다.", error);
  });
