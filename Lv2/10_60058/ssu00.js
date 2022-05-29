function solution(p) {
    const mySplit=(str)=>{
        let u='', left=0, right=0;
        for(x of str){
            x=='(' ? left++ : right++;
            u+=x;
            if(left==right) break;
        }
        return u;
    }
    
    const alright=(u)=>{
        let stack=[];
        for(x of u){
            if(stack[stack.length-1]=="(" && x==")") stack.pop();
            else stack.push(x);
        }
        return stack.length==0 ? true:false;
    }
    
    const recursive=(str)=>{
        let u=mySplit(str);
        let v=str.substr(u.length);
        if(u.length==0) return "";
        else if(alright(u)){
            let result1=recursive(v);
            return u+result1;
        } else{
            let newStr="(", myU='';
            newStr+=recursive(v)+")";
            for(x of u.substr(1,u.length-2))
                myU+= x=="("?")":"(";
            newStr+=myU;
            return newStr;
        }
    }
    
    return recursive(p, "");
}