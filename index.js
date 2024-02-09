const processFiles = require("./processLogic");

const filePaths = ["files/fileTest4.txt", "files/fileTest5.txt"];

// Calling the function to process the files :
processFiles(filePaths)
  .then(() => {
    console.log("All files processed successfully.");
  })
  .catch((error) => {
    console.error("Error processing files:", error);
  });
