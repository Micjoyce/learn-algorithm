// 递归计算 100 的和
// 需要做尾递归优化

function sum(num) {
  if (num <= 0) {  // 基准条件 base case
    return 0
  }
  // 递归条件 recursive case
  return num + sum(num - 1)
}

// console.log(sum(100))

// 尾递归优化
// 函数调用通过参数传递进来，不依赖上一层技术结果
// 首先，把上面尾递归代码抄过来。
// 将参数提取出来，成为迭代变量。原来的参数则用来初始化迭代变量。
// 创建一个迭代函数，迭代函数只用来只用来更新迭代变量。
// 将原来函数的里面所代码（不包括我们上面的迭代函数和迭代变量初始化）包在一个 while (true) 迭代循环里面。Tip：加一个 label 用于标识循环。
// 递归终止的 return 不变，尾递归的 return 替换成迭代函数，并且 continue 掉上面的迭代循环。Tip：上面的 label 在这里用。
function sum1(_num, _total) { // <= _num, _total 用作初始化变量
  var num = _num;
  var total = _total; // <= 将原来的 num, total 变量提出来编程迭代变量
  function _fact(_num, _total) { // <= 迭代函数非常简单,就是更新迭代变量而已
    num = _num;
    total = _total;
  }
  _fact_loop: while (true) { // <= 生成一个迭代循环
      if (num <= 0) {
          return total;
      } else {
          _fact(num - 1, num + total); continue _fact_loop; // <= 执行迭代函数，并且进入下一次迭代
      }
  }
}

console.log(sum1(100, 0))