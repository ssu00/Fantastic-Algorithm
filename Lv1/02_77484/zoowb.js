function solution(lottos, win_nums) {
    var answer = [];
    var min = lottos.filter(x=>win_nums.includes(x)).length;
    var zeroCount = lottos.filter(x=>{
        if(x===0){
            return true;
        }
    }).length;
    var max = min+zeroCount;
    max>1?max=7-max:max=6;
    answer.push(max);
    min>1?min=7-min:min=6;
    answer.push(min);
    
    return answer;
}
