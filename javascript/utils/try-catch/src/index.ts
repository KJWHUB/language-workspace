import chalk from "chalk";
import { catchError } from "./error";
import { getProduct } from "./map";

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputId = (): Promise<string> => {
  return new Promise((resolve) => {
    rl.question("Enter product ID: ", (id) => {
      console.log("");
      resolve(id);
    });
  });
};

const play = async () => {
  const id = await inputId();

  // 0 입력시 종료
  if (id === "0") {
    rl.close();
    return;
  }

  const [data, error] = await catchError(getProduct(Number(id)));

  if (error) {
    console.log(chalk.red("잘못된 상품 ID 입니다. ", error.message));
  } else if (data) {
    console.log(chalk.blue("상품 정보: "), data);
  }

  console.log("");

  await play();
};

/**
 * Main function
 */
async function main() {
  console.log(chalk.green("[ON] main"));

  await play();

  console.log(chalk.green("[OFF] main"));
}

main();
