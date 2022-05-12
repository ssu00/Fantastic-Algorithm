function solution(sizes) {
  var answer = 0;
  //가로 세로 중 더 큰 길이를 [0]인덱스로 옮긴다.
  sizes.forEach((i) => {
    if (i[0] < i[1]) {
      let temp = i[1];
      i[1] = i[0];
      i[0] = temp;
    }
  });
  //[0]인덱스 중 가장 긴 길이 * [1]인덱스 중 가장 긴 길이
  answer =
    sizes.sort((a, b) => b[0] - a[0])[0][0] *
    sizes.sort((a, b) => b[1] - a[1])[0][1];
  return answer;
}
