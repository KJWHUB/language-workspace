class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 노드 추가
  append(val) {
    // 새로운 노드 생성
    const newNode = new ListNode(val);

    // 빈 리스트일 경우
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // 마지막 노드 찾기
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    // 마지막 노드에 새로운 노드 추가
    current.next = newNode;
  }

  // 노드 삭제
  delete(val) {
    // 빈 리스트일 경우
    if (!this.head) return;

    // 첫 번째 노드 삭제
    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }

    // 중간 노드 삭제
    let current = this.head;
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // 리스트 출력
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new LinkedList();
console.log(list); // LinkedList { head: null }

list.append(1);
list.append(2);
list.append(3);

console.dir(list, { depth: 6 });

list.print(); // 1, 2, 3
list.delete(2);
list.print(); // 1, 3
