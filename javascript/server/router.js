import { handleRootRequest, handleAboutRequest, handleContactRequest } from "./controller.js";

// URL과 처리 함수를 매핑하는 라우터 객체
const routes = {
  "/": handleRootRequest,
  "/about": handleAboutRequest,
  "/contact": handleContactRequest,
};

// 요청 URL에 따라 적절한 처리 함수를 호출하는 함수
function router(req, res) {
  const routeHandler = routes[req.url];
  if (routeHandler) {
    routeHandler(req, res);
  } else {
    // 해당 URL이 없을 경우 404 오류를 반환합니다.
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
}

export default router;
