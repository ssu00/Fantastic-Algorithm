function solution(progresses, speeds) {
    let needs=[],answer = [];
    for(let i=0;i<progresses.length;i++){ //needs에 작업 일수 구해서 넣기
        needs.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    let prev=needs[0], cnt=0;
    for(x of needs){ //[i]번째가 [i+1]번째보다 크면 [i+1]번째 기능도 배포 가능
        if(x<=prev) cnt++;
        else {
            answer.push(cnt);
            cnt=1;
        }
        prev=Math.max(x,prev);
    }
    answer.push(cnt);
    return answer;
}