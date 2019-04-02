// 选择排序的事件复杂度为 O(n^2)

// 找出数组中最小的值
function getSmallIdx(arr) {
  var small = arr[0]
  var smallIdx = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i]
      smallIdx = i
    }
  }
  return smallIdx
}

function selectSort(arr) {
  var newArr = []
  var len = arr.length
  for (let i = 0; i < len; i++) {
    console.info(i)
    var smallIndex = getSmallIdx(arr)
    newArr.push(arr[smallIndex]) // 更新到新的数组中
    arr.splice(smallIndex, 1) // 通过 splice 删除数组
  }
  return newArr
}

var arr = [3, 19, 4, 6, 8 ,10, 8, 9]

console.log(selectSort(arr))