const { readFile, writeFile } = require("fs");

console.log(" 1 start");
readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}

	const first = result;
	readFile("./content/second.txt", "utf8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;

		writeFile(
			"./content/result-Async.txt",
			`Here is the result : ${first} ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log(" 2 done with this task");
			}
		);
	});
});

console.log(" 3 starting next task");
