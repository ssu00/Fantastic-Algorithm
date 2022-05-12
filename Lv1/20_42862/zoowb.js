function solution(n, lost, reserve) {
  var answer = 0;
  //여벌 체육복을 가져온 학생이 체육복 도난당했을 때는 못빌려줘서 제외함.
  let temp1 = reserve.filter((i) => !lost.includes(i));
  let temp2 = lost.filter((i) => !reserve.includes(i));

  for (let i = 0; i < temp1.length; i += 1) {
    for (let j = 0; j < temp2.length; j += 1) {
      if (temp2[j] === temp1[i] - 1 || temp2[j] === temp1[i] + 1) {
        temp2[j] = -1; //체육복 빌릴 수 있으면 -1로 바꾼다.
        break;
      }
    }
  }
  answer = n - temp2.filter((i) => i !== -1).length; // 마지막까지 체육복 없는사람 지움
  return answer;
}
