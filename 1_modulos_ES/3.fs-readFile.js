const fs = require("node:fs");

console.log("leyendo primer archivo");

fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
});

console.log("leyendo segundo archivo");

fs.readFile("./archivo_2.txt", "utf-8", (err, text2) => {
  console.log(text2);
});
