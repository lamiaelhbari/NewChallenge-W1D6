const readFileAsync = require("./readFile");
const writeFileAsync = require("./writeFile");

let filePaths = [
  "files/fileTest1.txt",
  "files/fileTest2.txt",
  "files/fileTest3.txt",
];
// Develop a function processFiles that:

async function processFiles(filePaths) {
  for (let i = 0; i < filePaths.length; i++) {
    let filePath = filePaths[i];
    try {
      // 1-Reads multiple text files ------> :
      let content = await readFileAsync(filePath);

      // 2-Manipulates the content --------> :
      // 2-1 adding a timestamp :
      const timestamp = new Date().toISOString();
      content = `${timestamp}: ${content}`;

      // 2-2 reversing the content :
      content = content.split("").reverse().join("");
      // 2-3 converting it to uppercase :
      content = content.toUpperCase();

      // 3-Writes the modified content to new files :

      await writeFileAsync(filePath + "_modified", content);
      console.log(`File ${filePath}_modified has been written successfully.`);
    } catch (error) {
      console.error(`Error processing file ${filePath}: ${error}`);
    }
  }
}

processFiles(filePaths);
module.exports = processFiles;
