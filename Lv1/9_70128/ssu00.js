function solution(a, b) {    
  const answer=a.map((data,i)=>data*b[i]).reduce((acc,cur)=>{
     return acc+cur;
  },0)    
  return answer;
}