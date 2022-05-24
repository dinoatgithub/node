const Express = require("express");

const app = Express();
const port = 8080;

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});
