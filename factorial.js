// 递归计算 100 的和

function sum(num) {
  if (num <= 0) {  // 基准条件 base case
    return 0
  }
  // 递归条件 recursive case
  return num + sum(num - 1)
}
console.log(sum(100))