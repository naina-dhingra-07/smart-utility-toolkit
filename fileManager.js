const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");

console.log("Creating File...");
fs.writeFile(filePath, "Hello Node.js\n", (err) => {
  if (err) return console.error("Error creating file:", err);
  console.log("File Created");

  console.log("Reading File...");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return console.error("Error reading file:", err);
    console.log("File Content:\n" + data.trim());

    console.log("Updating File...");
    fs.appendFile(filePath, "Learning FS Module\n", (err) => {
      if (err) return console.error("Error updating file:", err);
      console.log("File Updated");

      fs.readFile(filePath, "utf8", (err, updatedData) => {
        if (err) return console.error("Error reading updated file:", err);
        console.log("Updated Content:\n" + updatedData.trim());

        console.log("Deleting File...");
        fs.unlink(filePath, (err) => {
          if (err) return console.error("Error deleting file:", err);
          console.log("File Deleted");
        });
      });
    });
  });
});