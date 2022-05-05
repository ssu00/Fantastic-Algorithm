#include <string>
#include <vector>
#include <cmath>
#include <map>
using namespace std;

string solution(vector<int> numbers, string hand) {
    int left =10;    //왼손 위치
    int right = 11;    //오른손 위치

    string answer = "";
  
    //각 번호별 x,y 좌표
    map<int, int> x ={{1,0},{4,0},{7,0},{10,0},{2,1},{5,1},{8,1},{0,1},{3,2},{6,2},{9,2},{11,2}};
    map<int, int> y={{1,0},{2,0},{3,0},{4,1},{5,1},{6,1},{7,2},{8,2},{9,2},{10,3},{0,3},{11,3}};
    
    for(int i=0; i<numbers.size(); i++){
        int cur = numbers[i];
        if(cur==1||cur==4||cur==7){
            answer+="L";
            left=cur;
        }
        else if(cur==3||cur==6||cur==9){
            answer+="R";
            right=cur;
        }
        else if(cur==2||cur==5||cur==8||cur==0){
            int left_dis = abs(x[cur]-x[left])+abs(y[cur]-y[left]);
            int right_dis= abs(x[cur]-x[right])+abs(y[cur]-y[right]);
            if(left_dis<right_dis){
                answer+="L";
                left=cur;
            }
            else if(right_dis<left_dis){
                answer+="R";
                right=cur;
            }
            else{
                if(hand=="left"){
                     answer+="L";
                left=cur;
                }
                else{
                    answer+="R";
                    right=cur;
                }
            }
            
        }
        
    }
    return answer;
}
