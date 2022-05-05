function solution(numbers) {
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newArr = numberArr.filter((data) => !numbers.includes(data));
  var answer = newArr.reduce((acc, cur) => acc + cur);
  return answer;
}
