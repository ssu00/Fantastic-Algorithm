function solution(absolutes, signs) {
  var answer = absolutes.reduce((acc,cur,i)=>signs[i]?acc+cur:acc-cur,0);
  return answer;
}