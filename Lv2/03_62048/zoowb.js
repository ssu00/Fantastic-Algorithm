function solution(w, h) {
  var answer = 0;
  answer = w * h;
  let previosSpare = 0;
  let disable = 0;
  for (let i = 1; i <= w; i++) {
    let test = (h * i) / w;
    disable += Math.ceil(test) - previosSpare;
    previosSpare = Math.floor(test);
  }
  return answer - disable;
}
