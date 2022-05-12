function solution(nums) {
    const getCombinations = (arr,num)=>{ //조합 구하기
        const results=[];
        if(num==1) return arr.map(data=>[data]);
        arr.forEach((confirm, i, origin)=>{
            const combinations = getCombinations(origin.slice(i+1),num-1);
            const attached = combinations.map((data)=>[confirm, ...data]);
            results.push(...attached);
        })
        return results;
    }
    
    const combinationArr=getCombinations(nums,3);
    let answer=0;
    for(x of combinationArr){ //소수 판별
        const sum = x[0]+x[1]+x[2];
        let flag = true;
        for(let i=2;i<sum;i++){
            if(sum%i==0) {
                flag=false;
                break;
            }
        }
        if(flag) answer++;
    }
    return answer;
}