function solution(N, stages) {
  let answer = [];
  let len = stages.length; //전체 도전자 수
  for (let i = 1; i <= N + 1; i++) {
    //1번스테이지부터 N+1스테이지 도전자까지 구한다.
    let temp = stages.filter((a) => a === i).length;
    answer.push([i, temp / len]); //스테이지, 실패율 저장
    //다음 스테이지 도전자 수 = 전체 도전자 수 - 현재 스테이지까지 도전한 사람 수
    len -= temp;
  }
  answer.pop(); //다 깬건 answer에 포함하지 않는다.
  answer = answer.sort((a, b) => b[1] - a[1]);
  answer = answer.map((a) => a[0]);
  return answer;
}
