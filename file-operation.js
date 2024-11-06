const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();
const myfile = process.env.FILENAME;
const text = "Hello, World!";

fs.writeFile(myfile, text, (err) => {
  if (err) {
    console.error("Error when writting file: ", err);
    return;
  }
  console.log("The text was successfully writtem to the file!");
});

fs.readFile(myfile, "utf-8", (err, data) => {
  if (err) {
    console.error("Error when reading file: ", err);
    return;
  }
  console.log(data);
});
