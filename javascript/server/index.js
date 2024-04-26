import { createServer } from "http";

// 서버를 생성합니다.
const server = createServer((req, res) => {
  // 요청 URL에 따라 다른 작업을 수행합니다.
  if (req.url === "/") {
    // 루트 URL에 대한 GET 요청을 처리합니다.
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, world!\n");
  } else if (req.url === "/about") {
    // "/about" URL에 대한 GET 요청을 처리합니다.
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page\n");
  } else if (req.url === "/contact") {
    // "/contact" URL에 대한 GET 요청을 처리합니다.
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact page\n");
  } else {
    // 해당 URL이 없을 경우 404 오류를 반환합니다.
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

// 서버를 8080 포트에서 실행합니다.
server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
