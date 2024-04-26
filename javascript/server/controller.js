export function handleRootRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to the homepage!\n");
}

export function handleAboutRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to the about page!\n");
}

export function handleContactRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to the contact page!\n");
}
