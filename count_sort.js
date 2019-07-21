function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
      sortedIndex = 0;
      arrLen = arr.length,
      bucketLen = maxValue + 1;

  for (var i = 0; i < arrLen; i++) {
      if (!bucket[arr[i]]) {
          bucket[arr[i]] = 0;
      }
      bucket[arr[i]]++;
      console.info(arr[i])
  }


  for (var j = 0; j < bucketLen; j++) {
      while(bucket[j] > 0) {
          arr[sortedIndex++] = j;
          bucket[j]--;
      }
  }

  return arr;
}

var arr = [5, 7, 1, 10, 9, 12, 3, 3]

console.info(countingSort(arr, 15))