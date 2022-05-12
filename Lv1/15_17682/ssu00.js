function solution(dartResult) {
    const operation = [];
    let result=[];
    let num=0;
    for(let i=0;i<dartResult.length;i++){ //숫자 기준으로 나눠서 배열에 저장
        if(!isNaN(dartResult[i]) && result.length!=0){
            operation.push(result);
            result=[];
        }
        if(!isNaN(dartResult[i]) && dartResult[i+1]=='0') {
            result.push(`${dartResult[i]}0`);
            i++;
        } else{
            result.push(dartResult[i]);
        }
    }
    operation.push(result);
    
    let answers=[];
    operation.forEach((data,i)=>{
        let answerEach=0;
        for(x of data){
            if(!isNaN(x)) num=parseInt(x);
            else if(x=='S') answerEach+=Math.pow(num,1);
            else if(x=='D') answerEach+=Math.pow(num,2);
            else if(x=='T') answerEach+=Math.pow(num,3);
            else if(x=='*') {
                if(i==1) answers[0]*=2;
                if(i==2) answers[1]*=2;
                answerEach*=2;
            }
            else if(x=='#') answerEach*=(-1);            
        }
        answers.push(answerEach);
    })
    return answers.reduce((acc,cur)=>acc+cur);
}