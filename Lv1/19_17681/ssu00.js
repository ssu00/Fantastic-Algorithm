function solution(n, arr1, arr2) {
    const toBinary=(num)=>{
        let square = n-1;
        let result="";
        for(;square>=0;square--){
            const fixed = Math.pow(2,square);
            const sub = Math.floor(num/fixed);
            result+=sub;
            num-=sub*fixed;            
        }
        return result;
    }
    
    const binaryArr1 = arr1.map((data)=> toBinary(data));
    const binaryArr2 = arr2.map((data)=> toBinary(data));
    var answer = [];
    for(let i=0;i<n;i++){
        let result="";
        for(let j=0;j<n;j++){
            if(binaryArr1[i][j]==1 || binaryArr2[i][j]==1) result+="#";
            else result+=" ";
        }
        answer.push(result);
    }    
    return answer;
}