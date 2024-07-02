// binary search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 5)); // 4
console.log(binarySearch(arr, 10)); // -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);

  console.log(nums);

  let count = 0;

  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    console.log("start", count, l, r);
    if (nums[l] + nums[r] < target) {
      count += r - l;
      l++;
    } else {
      r--;
    }
  }

  return count;
};

const nums = [-1, 1, 2, 3, 1];
const target = 3;
console.log(countPairs(nums, 2)); // 3

console.clear();
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
const maxDistance = function (position, m) {
  position.sort((a, b) => a - b);

  const n = position.length;

  let min = 1; // 최소
  let max = Math.floor((position[n - 1] - position[0]) / (m - 1)); // 최대

  let answer = 1;

  while (min <= max) {
    let mid = min + Math.floor((max - min) / 2);

    console.log("start", min, max, mid);

    if (canWePlace(position, mid, m)) {
      answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return answer;
};

function canWePlace(arr, dist, balls) {
  let countBalls = 1;
  let lastPlaced = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - lastPlaced >= dist) {
      countBalls++;
      lastPlaced = arr[i];
    }
    if (countBalls >= balls) {
      return true;
    }
  }
  return false;
}

// 1부터 20까지
const position = Array.from({ length: 20 }, (_, i) => i + 1);
const m = 4;

console.log(maxDistance(position, m)); // 6
