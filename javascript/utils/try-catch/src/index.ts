import chalk from "chalk";
import { catchError, catchErrorTyped, CustomError } from "./error";
import { getProduct, successProductTitle } from "./map";

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 터미널 너비를 가져옵니다.
const terminalWidth = process.stdout.columns;

// 구분선 문자열을 생성합니다.
const separator = "*".repeat(terminalWidth);

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

  if (isNaN(Number(id))) {
    console.log(chalk.red("숫자를 입력해주세요."));
    console.log("");
    await play();
    return;
  }

  const [data, error] = await catchErrorTyped(getProduct(Number(id)), [CustomError]);

  if (error) {
    console.log(chalk.red("잘못된 상품 ID 입니다. ", error.message));
  } else if (data) {
    console.log(chalk.blue(successProductTitle(terminalWidth)));
    console.table(data);
    console.log(chalk.blue(separator));
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
