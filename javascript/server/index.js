import { createServer } from "http";
import router from "./router.js";

const server = http.createServer((req, res) => {
  router(req, res); // 라우터 함수를 호출하여 요청을 처리합니다.
});

// 서버를 8080 포트에서 실행합니다.
server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
