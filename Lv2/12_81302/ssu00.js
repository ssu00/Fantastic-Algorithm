function solution(places) {
    var answer = [];
    const getAround=(arr, i, j)=>{
        if(i>0 && arr[i-1][j]=='P') return false;
        if(j>0 && arr[i][j-1]=='P') return false;
        if(i<4 && arr[i+1][j]=='P') return false;
        if(j<4 && arr[i][j+1]=='P') return false;
        if(i>0 && j>0 && arr[i-1][j-1]=='P'){
            if(arr[i-1][j]!='X' || arr[i][j-1]!='X') return false;
        }
        if(i<4 && j<4 && arr[i+1][j+1]=='P'){
            if(arr[i+1][j]!='X' || arr[i][j+1]!='X') return false;
        }
        if(i>0 && j<4 && arr[i-1][j+1]=='P'){
            if(arr[i-1][j]!='X' || arr[i][j+1]!='X') return false;                     }
        if(i<4 && j>0 && arr[i+1][j-1]=='P'){
            if(arr[i+1][j]!='X' || arr[i][j-1]!='X') return false;                     }
        return true;
    }
    
    places.forEach((data,i)=>{
        let room = Array.from(Array(5), () => new Array(5));
        let flag2=true;
        for(let i=0;i<5;i++){
            let flag=true;
            for(let j=0;j<5;j++){
                if(data[i][j]=='P'){
                    if(!getAround(data,i,j)){
                        flag=false; break;
                    } else flag=true;
                }
            }
            if(!flag) {flag2=false; break;}
            else flag2=true;
        }
        flag2?answer.push(1):answer.push(0);
    })
    return answer;
}