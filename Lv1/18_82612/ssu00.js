function solution(price, money, count) {
    var answer = 0, sum=0;
    for(let i=1;i<=count;i++) sum+=i;
    answer=sum*price-money>=0?sum*price-money:0;
    return answer;
}