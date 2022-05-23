function solution(s) {
  var answer = [];
  for (var i = 0; i < s.length; i++) {
    if (!answer.length || answer[answer.length - 1] !== s[i]) answer.push(s[i]);
    else answer.pop();
  }

  return answer.length === 0 ? 1 : 0;
}
