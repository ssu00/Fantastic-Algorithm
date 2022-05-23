#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;

    while(progresses.size()!=0){
   
        //하루
        for(int k=0; k<progresses.size(); k++)
            progresses[k]+=speeds[k];
        
        auto cur = progresses.front();
        int i=0;
        while(cur>=100){
            progresses.erase(progresses.begin());
            speeds.erase(speeds.begin());
            i++;
            if(progresses.size()==0)
                break;
            cur = progresses.front();
        }
        if(i>0)
             answer.push_back(i);

    }
    
    return answer;
}