import { s_instanceResponse, s_instance, createInstance } from "./s_instance.js";

import a from "./a.js";
import b from "./b.js";

console.log("program start");

(() => {
  const resA = a();
  const resB = b();
  const resC = s_instance();
  const resD = new s_instance();
  // const resE = createInstance(); 생성자 함수 이므로 new 키워드를 사용해야함 그렇지 않으면 런타임 에러 발생
  const resF = new createInstance();

  const allLog = (n = 0) => {
    console.log(`s_in ${n}`, "default", s_instanceResponse, "resA", resA.instance, "resB", resB.instance, "resC", resC, "resD", resD, "resF", resF);
  };

  allLog(1);
  console.log("resA.instance === resB.instance", resA.instance === resB.instance); // 참조가 같은지 확인
  console.log("instance chaeck A", resA.instance instanceof s_instance);
  console.log("instance chaeck B", resB.instance instanceof s_instance);
  console.log("instance chaeck C", resC instanceof s_instance);
  console.log("instance chaeck D", resD instanceof s_instance);
  console.log("instance chaeck F", resF instanceof createInstance);

  resA.updateInstance(200);

  allLog(2);

  console.log(
    "count",
    "default",
    s_instanceResponse.getS_in(),
    "resA",
    resA.instance.getS_in(),
    resA.instance.s_in,
    "resB",
    resB.instance.getS_in(),
    "resC",
    resC.getS_in(),
    "resD",
    resD.getS_in(),
    "resF",
    resF.getS_in()
  );
})();

console.log("program end");
