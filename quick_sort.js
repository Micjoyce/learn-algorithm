var arr = [5, 7, 1, 10, 9, 12, 3]

function quicksort(arr) {
  if (arr.length < 2) { // 递归的基准条件
    return arr
  }
  var pivot = arr[0]
  var left = [] // 计算小于选定中心点值集合
  var right = [] // 计算大于等于选定中心点值集合
  var len = arr.length
  for (let i = 1; i < len; i++) {
    const item = arr[i];
    if (item < pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  // 递归计算所有所有值集合
  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(arr))