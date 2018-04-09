const fs = require('fs');

const writeResult = data => {
  fs.writeFile("message.json", data, err => {
    if (err) {
      throw err;
    }
    console.log("The file has been saved.");
  });
};

module.exports = writeResult;