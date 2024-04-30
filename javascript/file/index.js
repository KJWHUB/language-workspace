import { readdirSync, statSync } from "fs";

import path from "path";

const files = readdirSync("./sidebar"); // 모든 파일 조회

const processFiles = files
  .filter((file) => {
    const statsObj = statSync(path.join("./sidebar", file));

    if (!statsObj.isDirectory()) return false;

    const viewFileList = readdirSync("./sidebar/" + file);

    if (!viewFileList.includes("menu.js")) return false;

    return true;
  })
  .map(async (file) => {
    const fileData = await import(`./sidebar/${file}/menu.js`);

    return {
      fileName: file,
      fileData,
    };
  });

const menu = await Promise.all(processFiles);
console.log(menu);

// async function example() {
//   try {
//     const data = await readFile("./sidebar/content_1/menu.js", { encoding: "utf8" }); // 문자열 반환
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();
