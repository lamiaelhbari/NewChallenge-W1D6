const fs = require("fs");

function writeFileAsync(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("file written successfully !");
      }
    });
  });
}

module.exports = writeFileAsync;
