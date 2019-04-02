
function binarySearch(arr, num) {
  var low = 0
  var high = arr.length - 1
  while (low <= high) {
    var mid = Math.floor((high + low) / 2)  // 求中间值
    var guess = arr[mid]
    if (guess === num) {  // 如果找到直接返回
      return guess
    }
    if (guess > num) { // 如果中间值比实际值来的大，则下次的高点为 mid
      high = mid - 1 // 注意减去 1
    } else {
      low = mid + 1
    }
  }
  return undefined
}

var arr = [1, 3, 5, 6, 9, 10, 20, 23]
console.info(binarySearch(arr, 11))