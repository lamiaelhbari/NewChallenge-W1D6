const fs = require("fs");

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject("File not found !");
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = readFileAsync;
