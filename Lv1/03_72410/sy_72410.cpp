#include<iostream>
#include <string>
#include <vector>

using namespace std;

string solution(string new_id) {

    //1
    for(int i=0; i< new_id.length() ; i++){
        if('A'<=new_id[i] && new_id[i]<='Z')
            new_id[i]=new_id[i]+32;
    }
       
    //2
    // length가 계속 바뀌기 때문에 iterator 사용
    string::iterator it=new_id.begin();
    while(it!=new_id.end()){
         if('a'<=*it && *it<='z'){}
        else if('0'<=*it && *it <='9'){}
        else if(*it=='-'||*it=='_'||*it=='.'){}
        else
        {
            new_id.erase(it);
            continue; // erase 후 다음값 반환
        }
        it++;
    }
    
    //3
    it=new_id.begin();
    while(it!=new_id.end()){
        if(*it=='.'&& *(it+1)=='.')
        {
            new_id.erase(it);
            continue; // erase 후 다음값 반환
        }
        it++;
    }
    
    //4
    if(new_id[0]=='.')
        new_id.erase(0,1);
    if(new_id[new_id.length()-1]=='.')
        new_id.erase(new_id.length()-1,1);
    
    //5
    if(new_id.length()==0)
        new_id="a";
    
    //6
    if(new_id.length()>=16){
        new_id=new_id.substr(0,15);
        if(new_id[14]=='.')
            new_id.erase(14,1);
    }
    

    //7
    if(new_id.length()==1)
        new_id=new_id+new_id+new_id;
    else if(new_id.length()==2)
        new_id=new_id+new_id[1];
    
    return new_id;
}
