const os = require("os");

//info about current user.
const user = os.userInfo();
console.log(user);

// methods returns the systen uptime in seconds.
console.log(`The system UPtime is ${os.uptime()} seconds`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMemls: os.freemem(),
};
console.log(currentOS);
