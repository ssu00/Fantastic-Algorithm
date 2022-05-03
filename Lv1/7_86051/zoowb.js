function solution(numbers) {
  const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var answer = numList.filter((x) => !numbers.includes(x));

  return answer.reduce((a, b) => a + b);
}
