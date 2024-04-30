import path from "node:path";

const file = "/javascript/file/index.mjs";

path.dirname(file); // /users/joe
path.basename(file); // file.mjs
path.extname(file); // .mjs

console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
