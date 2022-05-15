function solution(s) {
  var answer = 0;
  answer = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = "";
    let count = 1;
    let temp = s.substr(0, i);
    let check = 0;

    for (check = i; check <= s.length; check += i) {
      let n = s.substr(check, i);

      if (temp === n) {
        count += 1;
      } else {
        if (count === 1) str = str + temp;
        else str = str + count + temp;

        count = 1;
        temp = n;
      }
    }
    if (count === 1) str = str + temp;
    else str = str + count + temp;
    answer = Math.min(answer, str.length);
  }

  return answer;
}
