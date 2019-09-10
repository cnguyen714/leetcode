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
  if (this.coll[val] === undefined || this.coll[val].length === 0) {
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
    return false;
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
    let node = this.coll[val].pop();
    if (node) {
      let tail = this.list.tail;
      if (node === tail) {
        this.list.pop();
      } else if ( node === this.list.head) {
        this.list.head = this.list.head.next;
        this.list.length--;
      } else {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
        this.list.length--;
      }

      if (node.arrIndex === this.arr.length - 1) {
        this.arr.pop();
      } else {
        let arrLast = this.arr.pop();
        arrLast.arrIndex = node.arrIndex;
        this.arr[node.arrIndex] = arrLast;
      }
      return true;

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
  let node = this.arr[Math.floor(Math.random() * this.arr.length)];
  if (node) return node.val;
  return undefined;
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedCollection()
// obj.insert(4)
// obj.insert(3)
// obj.insert(4)
// obj.insert(2)
// obj.insert(4)
// obj.remove(4)
// obj.remove(3)
// obj.remove(4)
// obj.remove(4)
// console.log(obj.getRandom())
// console.log(obj.remove(3))
// console.log(obj.remove(3))
// console.log(obj.remove(3))

// obj.insert(1)
// obj.remove(1)
// obj.insert(1)

console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.insert(0))
console.log(obj.remove(0))
console.log(obj.insert(0))

// obj.insert(1000000000)
// obj.insert(1000000001)
// obj.insert(1000000002)
// obj.insert(1000000003)
// obj.insert(1000000004)
// obj.insert(1000000005)
// obj.insert(1000000006)
// obj.insert(1000000007)
// obj.insert(1000000008)
// obj.insert(1000000009)
// obj.insert(1000000010)
// obj.insert(1000000011)
// obj.insert(1000000012)
// obj.insert(1000000013)
// obj.insert(1000000014)
// obj.insert(1000000015)
// obj.insert(1000000016)
// obj.insert(1000000017)
// obj.insert(1000000018)
// obj.insert(1000000019)
// obj.insert(1000000020)
// obj.insert(1000000021)
// obj.insert(1000000022)
// obj.insert(1000000023)
// obj.insert(1000000024)
// obj.insert(1000000025)
// obj.insert(1000000026)
// obj.insert(1000000027)
// obj.insert(1000000028)
// obj.insert(1000000029)
// obj.insert(1000000030)
// obj.insert(1000000031)
// obj.insert(1000000032)
// obj.insert(1000000033)
// obj.insert(1000000034)
// obj.insert(1000000035)
// obj.insert(1000000036)
// obj.insert(1000000037)
// obj.insert(1000000038)
// obj.insert(1000000039)
// obj.insert(1000000040)
// obj.insert(1000000041)
// obj.insert(1000000042)
// obj.insert(1000000043)
// obj.insert(1000000044)
// obj.insert(1000000045)
// obj.insert(1000000046)
// obj.insert(1000000047)
// obj.insert(1000000048)
// obj.insert(1000000049)
// obj.insert(1000000050)
// obj.insert(1000000051)
// obj.insert(1000000052)
// obj.insert(1000000053)
// obj.insert(1000000054)
// obj.insert(1000000055)
// obj.insert(1000000056)
// obj.insert(1000000057)
// obj.insert(1000000058)
// obj.insert(1000000059)
// obj.insert(1000000060)
// obj.insert(1000000061)
// obj.insert(1000000062)
// obj.insert(1000000063)
// obj.insert(1000000064)
// obj.insert(1000000065)
// obj.insert(1000000066)
// obj.insert(1000000067)
// obj.insert(1000000068)
// obj.insert(1000000069)
// obj.insert(1000000070)
// obj.insert(1000000071)
// obj.insert(1000000072)
// obj.insert(1000000073)
// obj.insert(1000000074)
// obj.insert(1000000075)
// obj.insert(1000000076)
// obj.insert(1000000077)
// obj.insert(1000000078)
// obj.insert(1000000079)
// obj.insert(1000000080)
// obj.insert(1000000081)
// obj.insert(1000000082)
// obj.insert(1000000083)
// obj.insert(1000000084)
// obj.insert(1000000085)
// obj.insert(1000000086)
// obj.insert(1000000087)
// obj.insert(1000000088)
// obj.insert(1000000089)
// obj.insert(1000000090)
// obj.insert(1000000091)
// obj.insert(1000000092)
// obj.insert(1000000093)
// obj.insert(1000000094)
// obj.insert(1000000095)
// obj.insert(1000000096)
// obj.insert(1000000097)
// obj.insert(1000000098)
// obj.insert(1000000099)
// obj.insert(-1000000000)
// obj.insert(-1000000001)
// obj.insert(-1000000002)
// obj.insert(-1000000003)
// obj.insert(-1000000004)
// obj.insert(-1000000005)
// obj.insert(-1000000006)
// obj.insert(-1000000007)
// obj.insert(-1000000008)
// obj.insert(-1000000009)
// obj.insert(-1000000010)
// obj.insert(-1000000011)
// obj.insert(-1000000012)
// obj.insert(-1000000013)
// obj.insert(-1000000014)
// obj.insert(-1000000015)
// obj.insert(-1000000016)
// obj.insert(-1000000017)
// obj.insert(-1000000018)
// obj.insert(-1000000019)
// obj.insert(-1000000020)
// obj.insert(-1000000021)
// obj.insert(-1000000022)
// obj.insert(-1000000023)
// obj.insert(-1000000024)
// obj.insert(-1000000025)
// obj.insert(-1000000026)
// obj.insert(-1000000027)
// obj.insert(-1000000028)
// obj.insert(-1000000029)
// obj.insert(-1000000030)
// obj.insert(-1000000031)
// obj.insert(-1000000032)
// obj.insert(-1000000033)
// obj.insert(-1000000034)
// obj.insert(-1000000035)
// obj.insert(-1000000036)
// obj.insert(-1000000037)
// obj.insert(-1000000038)
// obj.insert(-1000000039)
// obj.insert(-1000000040)
// obj.insert(-1000000041)
// obj.insert(-1000000042)
// obj.insert(-1000000043)
// obj.insert(-1000000044)
// obj.insert(-1000000045)
// obj.insert(-1000000046)
// obj.insert(-1000000047)
// obj.insert(-1000000048)
// obj.insert(-1000000049)
// obj.insert(-1000000050)
// obj.insert(-1000000051)
// obj.insert(-1000000052)
// obj.insert(-1000000053)
// obj.insert(-1000000054)
// obj.insert(-1000000055)
// obj.insert(-1000000056)
// obj.insert(-1000000057)
// obj.insert(-1000000058)
// obj.insert(-1000000059)
// obj.insert(-1000000060)
// obj.insert(-1000000061)
// obj.insert(-1000000062)
// obj.insert(-1000000063)
// obj.insert(-1000000064)
// obj.insert(-1000000065)
// obj.insert(-1000000066)
// obj.insert(-1000000067)
// obj.insert(-1000000068)
// obj.insert(-1000000069)
// obj.insert(-1000000070)
// obj.insert(-1000000071)
// obj.insert(-1000000072)
// obj.insert(-1000000073)
// obj.insert(-1000000074)
// obj.insert(-1000000075)
// obj.insert(-1000000076)
// obj.insert(-1000000077)
// obj.insert(-1000000078)
// obj.insert(-1000000079)
// obj.insert(-1000000080)
// obj.insert(-1000000081)
// obj.insert(-1000000082)
// obj.insert(-1000000083)
// obj.insert(-1000000084)
// obj.insert(-1000000085)
// obj.insert(-1000000086)
// obj.insert(-1000000087)
// obj.insert(-1000000088)
// obj.insert(-1000000089)
// obj.insert(-1000000090)
// obj.insert(-1000000091)
// obj.insert(-1000000092)
// obj.insert(-1000000093)
// obj.insert(-1000000094)
// obj.insert(-1000000095)
// obj.insert(-1000000096)
// obj.insert(-1000000097)
// obj.insert(-1000000098)
// obj.insert(-1000000099)

// console.log(obj.getRandom())
// console.log(obj.getRandom())
// console.log(obj.getRandom())
// console.log(obj.getRandom())
// console.log(obj.getRandom())

// obj.remove(1000000000)
// obj.remove(1000000001)
// obj.remove(1000000002)
// obj.remove(1000000003)
// obj.remove(1000000004)
// obj.remove(1000000005)
// obj.remove(1000000006)
// obj.remove(1000000007)
// obj.remove(1000000008)
// obj.remove(1000000009)
// obj.remove(1000000010)
// obj.remove(1000000011)
// obj.remove(1000000012)
// obj.remove(1000000013)
// obj.remove(1000000014)
// obj.remove(1000000015)
// obj.remove(1000000016)
// obj.remove(1000000017)
// obj.remove(1000000018)
// obj.remove(1000000019)
// obj.remove(1000000020)
// obj.remove(1000000021)
// obj.remove(1000000022)
// obj.remove(1000000023)
// obj.remove(1000000024)
// obj.remove(1000000025)
// obj.remove(1000000026)
// obj.remove(1000000027)
// obj.remove(1000000028)
// obj.remove(1000000029)
// obj.remove(1000000030)
// obj.remove(1000000031)
// obj.remove(1000000032)
// obj.remove(1000000033)
// obj.remove(1000000034)
// obj.remove(1000000035)
// obj.remove(1000000036)
// obj.remove(1000000037)
// obj.remove(1000000038)
// obj.remove(1000000039)
// obj.remove(1000000040)
// obj.remove(1000000041)
// obj.remove(1000000042)
// obj.remove(1000000043)
// obj.remove(1000000044)
// obj.remove(1000000045)
// obj.remove(1000000046)
// obj.remove(1000000047)
// obj.remove(1000000048)
// obj.remove(1000000049)
// obj.remove(1000000050)
// obj.remove(1000000051)
// obj.remove(1000000052)
// obj.remove(1000000053)
// obj.remove(1000000054)
// obj.remove(1000000055)
// obj.remove(1000000056)
// obj.remove(1000000057)
// obj.remove(1000000058)
// obj.remove(1000000059)
// obj.remove(1000000060)
// obj.remove(1000000061)
// obj.remove(1000000062)
// obj.remove(1000000063)
// obj.remove(1000000064)
// obj.remove(1000000065)
// obj.remove(1000000066)
// obj.remove(1000000067)
// obj.remove(1000000068)
// obj.remove(1000000069)
// obj.remove(1000000070)
// obj.remove(1000000071)
// obj.remove(1000000072)
// obj.remove(1000000073)
// obj.remove(1000000074)
// obj.remove(1000000075)
// obj.remove(1000000076)
// obj.remove(1000000077)
// obj.remove(1000000078)
// obj.remove(1000000079)
// obj.remove(1000000080)
// obj.remove(1000000081)
// obj.remove(1000000082)
// obj.remove(1000000083)
// obj.remove(1000000084)
// obj.remove(1000000085)
// obj.remove(1000000086)
// obj.remove(1000000087)
// obj.remove(1000000088)
// obj.remove(1000000089)
// obj.remove(1000000090)
// obj.remove(1000000091)
// obj.remove(1000000092)
// obj.remove(1000000093)
// obj.remove(1000000094)
// obj.remove(1000000095)
// obj.remove(1000000096)
// obj.remove(1000000097)
// obj.remove(1000000098)
// obj.remove(1000000099)
// obj.remove(-1000000000)
// obj.remove(-1000000001)
// obj.remove(-1000000002)
// obj.remove(-1000000003)
// obj.remove(-1000000004)
// obj.remove(-1000000005)
// obj.remove(-1000000006)
// obj.remove(-1000000007)
// obj.remove(-1000000008)
// obj.remove(-1000000009)
// obj.remove(-1000000010)
// obj.remove(-1000000011)
// obj.remove(-1000000012)
// obj.remove(-1000000013)
// obj.remove(-1000000014)
// obj.remove(-1000000015)
// obj.remove(-1000000016)
// obj.remove(-1000000017)
// obj.remove(-1000000018)
// obj.remove(-1000000019)
// obj.remove(-1000000020)
// obj.remove(-1000000021)
// obj.remove(-1000000022)
// obj.remove(-1000000023)
// obj.remove(-1000000024)
// obj.remove(-1000000025)
// obj.remove(-1000000026)
// obj.remove(-1000000027)
// obj.remove(-1000000028)
// obj.remove(-1000000029)
// obj.remove(-1000000030)
// obj.remove(-1000000031)
// obj.remove(-1000000032)
// obj.remove(-1000000033)
// obj.remove(-1000000034)
// obj.remove(-1000000035)
// obj.remove(-1000000036)
// obj.remove(-1000000037)
// obj.remove(-1000000038)
// obj.remove(-1000000039)
// obj.remove(-1000000040)
// obj.remove(-1000000041)
// obj.remove(-1000000042)
// obj.remove(-1000000043)
// obj.remove(-1000000044)
// obj.remove(-1000000045)
// obj.remove(-1000000046)
// obj.remove(-1000000047)
// obj.remove(-1000000048)
// obj.remove(-1000000049)
// obj.remove(-1000000050)
// obj.remove(-1000000051)
// obj.remove(-1000000052)
// obj.remove(-1000000053)
// obj.remove(-1000000054)
// obj.remove(-1000000055)
// obj.remove(-1000000056)
// obj.remove(-1000000057)
// obj.remove(-1000000058)
// obj.remove(-1000000059)
// obj.remove(-1000000060)
// obj.remove(-1000000061)
// obj.remove(-1000000062)
// obj.remove(-1000000063)
// obj.remove(-1000000064)
// obj.remove(-1000000065)
// obj.remove(-1000000066)
// obj.remove(-1000000067)
// obj.remove(-1000000068)
// obj.remove(-1000000069)
// obj.remove(-1000000070)
// obj.remove(-1000000071)
// obj.remove(-1000000072)
// obj.remove(-1000000073)
// obj.remove(-1000000074)
// obj.remove(-1000000075)
// obj.remove(-1000000076)
// obj.remove(-1000000077)
// obj.remove(-1000000078)
// obj.remove(-1000000079)
// obj.remove(-1000000080)
// obj.remove(-1000000081)
// obj.remove(-1000000082)
// obj.remove(-1000000083)
// obj.remove(-1000000084)
// obj.remove(-1000000085)
// obj.remove(-1000000086)
// obj.remove(-1000000087)
// obj.remove(-1000000088)
// obj.remove(-1000000089)
// obj.remove(-1000000090)
// obj.remove(-1000000091)
// obj.remove(-1000000092)
// obj.remove(-1000000093)
// obj.remove(-1000000094)
// obj.remove(-1000000095)
// obj.remove(-1000000096)
// obj.remove(-1000000097)
// obj.remove(-1000000098)
// obj.remove(-1000000099)
// console.log(obj.getRandom())