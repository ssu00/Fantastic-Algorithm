#include <iostream>
#include<string>
#include <stack>
using namespace std;
int solution(string s){
    stack<char> st;
    for(int i=0; i<s.length(); i++){
        if(st.empty()==false&&s[i]==st.top())
            st.pop();
        else
            st.push(s[i]);
    }
    if(st.empty())
        return 1;
    else
        return 0;
    
}
//정확성o
/*int solution(string s)
{
    int i =0;
   while(1){
       if(i==s.length())
           break;
       if(s[i]==s[i+1])
       {    s.erase(i,2);
            if(i>0)
                i=i-1;
       }
       else
           i++;
   }
    int answer = 0;
    if(s.length()==0)
        answer=1;
    
    return answer;
}*/