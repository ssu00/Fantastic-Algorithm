#include <string>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> solution(vector<int> lottos, vector<int> win_nums) {
    int count=0; 
    int lost=0;    
    for(int i=0; i<6; i++){
        if(lottos[i]==0)
            lost++;
        if(find(win_nums.begin(),win_nums.end(),lottos[i])!=win_nums.end()) //찾음
            count++;
    }
    
    int match[7]={6,6,5,4,3,2,1}; //답이 몇개일때 몇등인지
    
    vector<int> answer(2);

    answer[0]=match[lost+count];
    answer[1]=match[count];
    
    return answer;
}
