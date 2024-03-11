const fs = require("fs");

function moreWork() {
    console.log('more work');
}

try {
    const data = fs.readFileSync("data/test.txt"); // blocks here until file is read
    console.log(data);
    moreWork();
} // file content will go first, then print more work

catch(err) {
    console.log(err.message);
}

