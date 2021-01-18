// 给定一个排序链表，删除所有包含重复数字的节点，只保留原始链表中没有重复出现的数字

// 1 > 2 > 3 > 3 > 4 > 4 > 5  // 1 > 2 > 5
// 1 > 1 > 1 > 2 > 3  // 2 > 3

// dummy 虚拟节点

function ListNode(val, next) {
  this.val = val
  this.next = next
}

const deleteDuplicates = function (head) {
  if (!head || head.next) return head
  // dummy指向头节点
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  // cur后必须有两个节点
  while (cur.next && cur.next.next) {
    // 对两个节点进行比较
    if (cur.next.val === cur.next.next.val) {
      // 记录重复的值
      let val = cur.next.val
      while (cur.next && cur.next.next.val === val) {
        // 删除
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}