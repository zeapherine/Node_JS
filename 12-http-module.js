const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to our homepage.");
	}
	if (req.url === "/about") {
		res.end("This is our short history.");
	}

	req.end(`
	<h1>Oops!!!</h1>
	<p>We can't seem to find the page you are looking for.</p>
	<a href="/">back home</a>
	`);
});

console.log("listening on port 5000");
server.listen(5000);
