function solution(N, stages) {
    const failureRate=(stage)=>{ //실패율 구하는 함수
        const arrived = stages.filter((data)=>data>=stage) //도달
        const notCleared = arrived.filter(data=>data==stage); //도달&not cleared
        if(arrived.length==0) return 0; //도달한 사람이 없다면 0 반환
        return notCleared.length/arrived.length;
    }

    let failureArr=[];
    for(let i=1;i<=N;i++){
        failureArr.push([i,failureRate(i)]);
    }

    failureArr.sort(function(a,b){
        return b[1]-a[1];
    })

    var answer = [];
    failureArr.forEach((data)=>{
        answer.push(data[0]);
    })
    return answer;
}