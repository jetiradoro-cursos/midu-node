const fs = require("node:fs");

const stats = fs.statSync("./archivo.txt");

console.log({
  is_file: stats.isFile(),
  is_dir: stats.isDirectory(),
  is_link: stats.isSymbolicLink(),
  size: stats.size,
});
