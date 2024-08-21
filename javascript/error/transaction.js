const obj = {
  name: "John",
};

function test() {
  try {
    console.log(obj.name);

    obj.name = "Doe";

    throw new Error("This is an error");
  } catch (error) {
    console.error("error:", error);
  } finally {
    console.log("finally", obj);
  }
}

test();

// 트랜잭션 처리
function transaction() {
  const originalState = { ...obj }; // 원래 상태 저장

  try {
    console.log(obj.name);

    obj.name = "Doe";

    throw new Error("This is an error");
  } catch (error) {
    console.error("error:", error);
    Object.assign(obj, originalState); // 롤백
  } finally {
    console.log("finally", obj);
  }
}
