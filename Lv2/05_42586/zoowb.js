function solution(progresses, speeds) {
  var answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  console.log(days);
  let max = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= max) {
      answer[j] += 1;
    } else {
      max = days[i];
      answer[++j] = 1;
    }
  }
  return answer;
}
