class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class Solution(object):

  def nodeToStrVal(self, l1):
    str_val = str(l1.val)
    if l1.next != None:
      next = l1.next
      str_val += str(next.val)

      while next.next != None:
          next = next.next
          str_val += str(next.val)
    return str_val

  def addTwoNumbers(self, l1, l2):
    a1 = int(self.nodeToStrVal(l1))
    a2 = int(self.nodeToStrVal(l2))
    print("{0} + {1}".format(a1, a2))
    result = a1 + a2
    print(result)
    return self.createListNode([int(x) for x in str(result)], None)

  def createListNode(self, values, listNode):
    if len(values) > 0:
      val = values.pop(0)
      return self.createListNode(values, ListNode(val, listNode))
    return listNode


def create_list_node(values, list_node):
  if len(values) > 0:
    val = values.pop(-1)
    return create_list_node(values, ListNode(val, list_node))
  return list_node


l1 = create_list_node([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], None)
l2 = create_list_node([4, 6, 5], None)

s = Solution()
print(s.addTwoNumbers(l1, l2))
