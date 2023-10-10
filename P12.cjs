const fs = require("fs");

console.log("Starting....");
fs.readFile(__dirname+"/p12_temp.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error occured while reading file.");
  } else {
    console.log("File read successfully.");
    console.log(data);
  }
});
console.log("End.");