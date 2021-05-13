/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}


var convertListNodeToStringNumber = function(ll) {
	var stringNumber = "" + ll.val;
	if (ll.next != undefined) {	
		var next = ll.next;
    stringNumber += "" + next.val
  	while (next.next != undefined) {
    	next = next.next;
      stringNumber += "" + next.val
    }
  }
  return stringNumber;
}

var createListNode = function (values, listNode) {
	if (values.length > 0) {
  	const val = parseInt(values.shift());
  	return createListNode(values, new ListNode(val, listNode))
  }
  return listNode
}

var addTwoNumbers = function(l1, l2) {
  var results = (parseInt(convertListNodeToStringNumber(l1)) + parseInt(convertListNodeToStringNumber(l2))).toString().split("")
	return createListNode(results, null)
};


const l1 = createListNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], null)
const l2 = createListNode([4, 6, 5], null)

// const l1 = new ListNode(3, new ListNode(4, new ListNode(2, undefined)))
// const l2 = new ListNode(4, new ListNode(6, new ListNode(5, undefined)))


console.log(addTwoNumbers(l1, l2))
// /Users/jirick/git/dynamic-programming/leet-code/add-two-numbers.js