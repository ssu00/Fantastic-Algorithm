function solution(id_list, report, k) {
  var answer = [];

  const repo = [];
  id_list.forEach((e) =>
    repo.push({ name: e, repoNum: 0, repoName: [], result: 0 })
  );
  //순서대로 유저 저장

  report = new Set([...report]);
  //중복 신고 제거

  repo.forEach((e1) => {
    report.forEach((e2) => {
      if (e2.split(" ")[1] === e1.name) {
        e1.repoNum++; //유저가 신고당한 횟수 구하기
      }
      if (e2.split(" ")[0] === e1.name) {
        e1.repoName.push(e2.split(" ")[1]); //유저가 신고한사람
      }
    });
  });

  const stopUser = repo.filter((e) => {
    if (e.repoNum >= k) return true;
  }); //정지 당한 유저 구함.

  for (var i = 0; i < repo.length; i++) {
    repo[i].repoName.forEach((e1) => {
      stopUser.forEach((e2) => {
        if (e1 === e2.name) repo[i].result++;
      });
    });
  }

  repo.forEach((e) => answer.push(e.result));

  return answer;
}
