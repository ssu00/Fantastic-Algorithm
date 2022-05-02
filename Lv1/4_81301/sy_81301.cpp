#include <string>
#include <vector>

using namespace std;

int solution(string s) {
    
    string ans="";
    
    for(int i=0; i<s.length(); i++){
        if('0'<=s[i]&& s[i]<='9')
            ans=ans+s[i];
        if(s[i]=='z'){
            ans=ans+'0';
            i+=3;
        }
        else if(s[i]=='o'){
            ans=ans+'1';
            i+=2;
        }
        else if(s[i]=='t'){
            if(s[i+1]=='w'){
            ans=ans+'2';
                i+=2;}
            else if(s[i+1]=='h')
            {
                ans=ans+'3';
                i+=4;
            }
        }
        else if(s[i]=='f'){
            if(s[i+1]=='o'){
            ans=ans+'4';
                i+=3;}
            else if(s[i+1]=='i')
            {
                ans=ans+'5';
                i+=3;
            }
        }
        else if(s[i]=='s'){
            if(s[i+1]=='i'){
                ans=ans+'6';
                i+=2;
            }
            else if(s[i+1]=='e'){
                ans=ans+'7';
                i+=4;
            }
        }
        else if(s[i]=='e'){
            ans=ans+'8';
            i+=4;
        }
        else if(s[i]=='n'){
            ans=ans+'9';
            i+=3;
        }
    }
    
    int answer = stoi(ans);
    return answer;
    
    
}
