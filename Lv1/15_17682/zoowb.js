function solution(dartResult) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < dartResult.length; i = i + 2) {
    let point;
    if (i + 1 < dartResult.length && dartResult[i + 1] === "0") {
      //10이면 i하나 더 올려줌
      point = 10;
      i++;
    } else {
      point = parseInt(dartResult[i]);
    }
    let s = dartResult[i + 1];
    if (s === "D") {
      //D면 제곱
      point *= point;
    } else if (s === "T") {
      //T일 때 세제곱
      point *= point * point;
    }
    if (i + 2 < dartResult.length && dartResult[i + 2] === "*") {
      // *일 때 현재,이전값 *2
      point *= 2;
      if (arr.length !== 0) {
        arr[arr.length - 1] *= 2;
      }
      i++;
    } else if (i + 2 < dartResult.length && dartResult[i + 2] === "#") {
      //, #이면 현재 -1
      point *= -1;
      i++;
    }
    arr.push(point);
  }
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}
