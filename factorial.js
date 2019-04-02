// 递归计算 100 的和
// 需要做尾递归优化

function sum(num) {
  if (num <= 0) {  // 基准条件 base case
    return 0
  }
  // 递归条件 recursive case
  return num + sum(num - 1)
}

console.log(sum(100))

// 尾递归优化
// 函数调用通过参数传递进来，不依赖上一层技术结果
// 可以通过 curry 处理
function sum1(num, total) {
  if (num <= 0) {
    return total
  }
  return sum(num, total)
}

console.log(sum1(100, 0))