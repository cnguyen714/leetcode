// https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/

var Node = function(val, next = null, prev = null) {
  this.prev = prev;
  this.next = next;
  this.val = val;
  this.arrIndex = null;
  if (this.val === undefined) return false;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.push = function (node) {
  if (this.length === 0) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
}

LinkedList.prototype.pop = function () {
  if (this.length === 0) {
    return false;
  } else if (this.length === 1) {
    let node = this.tail;
    this.head = null;
    this.tail = null;
    this.length--;
    return node.val;
  } else {
    let node = this.tail;

    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;
    this.tail.prev = null;
    return node;
  }
}

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.coll = {};
  this.arr = [];
  this.list = new LinkedList;
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  let node = new Node(val);
  if (this.coll[val] === undefined) {
    node.arrIndex = this.arr.length;
    this.coll[val] = [node];
    this.arr.push(node);
    this.list.push(node);
    return true;
  } else {
    node.arrIndex = this.arr.length;
    this.coll[val].push(node);
    this.arr.push(node);
    this.list.push(node);
    return true;
  }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (this.coll[val] === undefined) {
    return false;
  } else {
    let node = coll.val.pop();
    if (node) {
      let tail = this.list.tail;
      if (node === tail) {
        this.list.pop();
      } else {
        let prev = node.prev;
        let next = node.next;
        this.list.tail.prev.next = null;
        this.list.tail = this.list.tail.prev;
        this.list.tail = tail.prev;

        tail.prev = prev;
        tail.next = next;
      }

      if (node.arrIndex === this.arr.length - 1) {
        this.arr.pop();
      } else {
        let arrLast = this.arr.pop();
        arrLast.arrIndex = node.arrIndex;
        this.arr[node.arrIndex] = arrLast;
      }
    } else {
      return false;
    }
  }
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {

};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedCollection()
var param_1 = obj.insert(3)
console.log(param_1)
var param_2 = obj.remove(3)
console.log(param_2)