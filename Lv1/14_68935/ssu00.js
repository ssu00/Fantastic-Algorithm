function solution(n) {
    const getMaxSquare=(num)=>{
        for(let i=0;;i++){
            if(Math.pow(3,i)>num) return i-1;
            else if(Math.pow(3,i)==num) return i;
        }
    }
    
    const toTernary=(num)=>{
        let square = getMaxSquare(num);
        let result="";
        for(;square>=0;square--){
            const fixed = Math.pow(3,square);
            const sub = Math.floor(num/fixed);
            result+=sub;
            num-=sub*fixed;            
        }
        return result;
    }
    
    const toDecimal=(ternary)=>{
        let square = 0, result = 0;
        for(x of ternary){
            console.log(x);
            result+=x*Math.pow(3, square);
            square++;
        }
        return result;
    }
    
    var answer = toDecimal(toTernary(n));
    return answer;
}