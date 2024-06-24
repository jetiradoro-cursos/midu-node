const fs = require("node:fs/promises");

console.log("leyendo primer archivo");

fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log(text);
});

console.log("leyendo segundo archivo");

fs.readFile("./archivo_2.txt", "utf-8").then((text) => {
  console.log(text);
});
