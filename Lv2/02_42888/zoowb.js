function solution(record) {
  var answer = [];
  let users = [];

  for (let i = 0; i < record.length; i++) {
    const temp = record[i].split(" ");
    if (temp[0] !== "Leave") {
      users[temp[1]] = temp[2];
      if (temp[0] == "Enter") {
        answer.push([temp[1], "님이 들어왔습니다."]);
      }
    } else {
      answer.push([temp[1], "님이 나갔습니다."]);
    }
  }

  answer = answer.map(([a, b]) => {
    return "" + users[a] + b;
  });

  return answer;
}
