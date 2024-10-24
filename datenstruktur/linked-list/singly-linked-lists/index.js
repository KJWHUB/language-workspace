// const exlist = {
//   head: {
//     value: 6,
//     next: {
//       value: 10,
//       next: {
//         value: 12,
//         next: {
//           value: 3,
//           next: null,
//         },
//       },
//     },
//   },
// };

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;

const list = new LinkedList(node1);

console.dir(list, { depth: 5 });
