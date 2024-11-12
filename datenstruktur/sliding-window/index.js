// 예제 1: 크기가 k인 연속 부분 배열의 최대 합 찾기
function maxSumSubarray(arr, k) {
  if (arr.length < k) {
    return null;
  }

  // 첫 번째 윈도우의 합 계산
  let windowSum = arr.slice(0, k).reduce((sum, num) => sum + num, 0);
  let maxSum = windowSum;

  // 슬라이딩 윈도우 시작
  for (let i = 0; i < arr.length - k; i++) {
    windowSum = windowSum - arr[i] + arr[i + k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// 사용 예시
const numbers = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(numbers, k)); // 출력: 9 (5 + 1 + 3)

// 예제 2: 주어진 합이 되는 연속된 부분 배열 찾기
function findSubarrayWithSum(arr, targetSum) {
  let currentSum = 0;
  let start = 0;
  const result = [];

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum > targetSum && start < end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === targetSum) {
      result.push(arr.slice(start, end + 1));
    }
  }

  return result;
}

// 사용 예시
const numbers2 = [1, 4, 20, 3, 10, 5];
console.log(findSubarrayWithSum(numbers2, 33)); // 출력: [[20, 3, 10]]

// 예제 3: 중복 없는 가장 긴 부분 문자열 찾기
function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();
  let result = "";

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    } else {
      if (end - start + 1 > maxLength) {
        maxLength = end - start + 1;
        result = str.slice(start, end + 1);
      }
    }

    charMap.set(currentChar, end);
  }

  return {
    length: maxLength,
    substring: result,
  };
}

// 사용 예시
console.log(longestSubstringWithoutRepeating("abcabcbb"));
// 출력: { length: 3, substring: "abc" }

// 예제 4: 고정 크기 윈도우의 평균 계산
function movingAverage(arr, windowSize) {
  if (arr.length < windowSize) {
    return [];
  }

  const result = [];
  let windowSum = arr.slice(0, windowSize).reduce((sum, num) => sum + num, 0);
  result.push(windowSum / windowSize);

  for (let i = windowSize; i < arr.length; i++) {
    windowSum = windowSum - arr[i - windowSize] + arr[i];
    result.push(windowSum / windowSize);
  }

  return result;
}

// 사용 예시
const temperatures = [1, 3, 2, 6, 8, 4, 7];
console.log(movingAverage(temperatures, 3));
// 출력: [2, 3.67, 5.33, 6, 6.33]
