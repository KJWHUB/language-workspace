// @ts-check
// JSDoc 으로 타입스크립트 검사기능을 사용할 수 있음

/**
 * @param {any[]} arr
 */
function compact(arr) {
  if (arr.length > 10) return arr.trim(0, 10);
  //                              ~~~~
  // 'any[]' 형식에 'trim' 속성이 없습니다.ts(2339)
  return arr;
}

/**
 * 두 수의 합을 구한다.
 * @type { (a: number, b: number) => number }
 */
const add = (a, b) => a + b;
