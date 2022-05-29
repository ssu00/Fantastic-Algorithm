function solution(p) {
  var answer = "";
  if (p === "") return ""; // w가 빈 문자열이면 빈 문자열을 반환한다.
  let u, v;
  let num = 0;

  let len = p.length;
  for (let i = 0; i < len; i++) {
    p[i] === "(" ? num++ : num--;
    if (num === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  } // w에서 균형잡힌 문자열까지 문자열 u로 선언하고, 나머지를 v로 선언한다.

  const ulen = u.length;
  for (let i = 0; i < ulen; i++) {
    u[i] === "(" ? num++ : num--;
    if (num < 0) {
      // cnt < 0 이면 올바른 문자열이 아니므로 3-2를 수행한다.
      let str = "";
      str += `(${solution(v)})`;
      for (let j = 1; j < ulen - 1; j++) {
        u[j] === "(" ? (str += ")") : (str += "(");
      }
      return str;
    }
  }
  answer = u + solution(v);
  return answer; // 이 3-1의 리턴이 수행되려면 u가 올바른 문자열이어야 한다.
}
