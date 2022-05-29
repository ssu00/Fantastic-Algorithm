function solution(str1, str2) {
  if(str1.length==0 && str2.length==0) return 65536;
  let arr1=[], arr2=[];
  let isAlp = /[a-zA-Z]/;
  const makeArr=(arr, str)=>{
      for(let i=0;i<str.length-1;i++){
          if(isAlp.test(str[i]) && isAlp.test(str[i+1]))
              arr.push(str[i]+str[i+1]);
      }
      arr.sort();
  }
  
  makeArr(arr1,str1.toUpperCase());
  makeArr(arr2,str2.toUpperCase());
  
  const intersection = [...new Set(arr1.filter(i=>arr2.includes(i)))];
  const union = [...new Set([...arr1, ...arr2])];
  
  let interCnt=0;
  for(x of intersection){
      const min = Math.min(arr1.filter((i)=>i==x).length,arr2.filter((i)=>i==x).length);
      interCnt+=min;
  }

  let unionCnt=0;
  for(x of union){
      const max = Math.max(arr1.filter((i)=>i==x).length,arr2.filter((i)=>i==x).length);
      unionCnt+=max;
  }

  if(unionCnt==0) return 65536;
  return Math.floor(interCnt/unionCnt*65536)
}