// 투 포인터는 두 개의 포인터를 사용하여 배열이나 연결 리스트를 순회하는 알고리즘 패턴입니다. 주요 패턴들과 예제를 설명해드리겠습니다:

// 1. 양쪽 끝에서 중앙으로 이동하는 패턴:
// 두 수의 합이 target인 쌍 찾기
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

// 사용 예
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]

// 2. 같은 방향으로 다른 속도:
// 연결 리스트의 중간 지점 찾기
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // 한 칸씩
    fast = fast.next.next; // 두 칸씩
  }

  return slow;
}

// 3. 슬라이딩 윈도우:
// 연속된 k개 정수의 최대 합
function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // 첫 번째 윈도우 합 계산
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // 윈도우 슬라이딩
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24

// 4. 중복 제거:
// 정렬된 배열에서 중복 제거
function removeDuplicates(nums) {
  if (nums.length <= 1) return nums.length;

  let writePointer = 1;

  for (let readPointer = 1; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[writePointer - 1]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }

  return writePointer;
}

let arr = [1, 1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(arr)); // 4
console.log(arr.slice(0, 4)); // [1,2,3,4]

// 5. 순환 탐지:
// 연결 리스트의 순환 감지
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // 순환 발견
    }
  }

  return false; // 순환 없음
}

// 6. 배열에서 특정 조건의 요소 찾기:
// 세 수의 합이 0인 조합 찾기
function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [[-1,-1,2],[-1,0,1]]

// 투 포인터 기법의 장점:
// 1. 공간 복잡도가 O(1)로 효율적
// 2. 대부분의 경우 시간 복잡도가 O(n)
// 3. 코드가 간결하고 이해하기 쉬움

// 사용 시 주의사항:
// 1. 포인터의 경계 조건 체크
// 2. 무한 루프 방지
// 3. 포인터 이동 조건의 정확성
// 4. 데이터가 정렬되어 있어야 하는 경우가 많음

// 이러한 패턴들을 잘 이해하고 있으면 많은 알고리즘 문제를 효율적으로 해결할 수 있습니다.
