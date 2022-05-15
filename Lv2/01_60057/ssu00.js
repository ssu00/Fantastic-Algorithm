function solution(s) {
    var answer = s.length;
    for(let i=1;i<=s.length/2;i++){
        let unit = s.substr(0,i), cnt = 1, str="";
        for(let j=i;j<s.length;j+=i){
            let compare = s.substr(j,i);
            if(unit==compare){
                cnt++;
            } else{
                str+= cnt==1? unit:cnt+unit;
                cnt=1;
                unit=compare;
            }
        }
        str+= cnt==1? unit:cnt+unit;
        answer=Math.min(answer,str.length);
    }
    return answer;
}