function solution(expression) {
  var answer = [];
  const order = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];
  for (let i = 0; i < order.length; i++) {
    const sArr = expression.split(/(\D)/);
    for (let j = 0; j < order[i].length; j++) {
      while (sArr.includes(order[i][j])) {
        const point = sArr.indexOf(order[i][j]);
        sArr.splice(
          point - 1,
          3,
          eval(sArr[point - 1] + sArr[point] + sArr[point + 1])
        );
      }
    }

    answer.push(Math.abs(sArr[0]));
  }
  return Math.max(...answer);
}
