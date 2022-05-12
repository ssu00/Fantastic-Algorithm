#include <string>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

vector<int> solution(vector<string> id_list, vector<string> report, int k) {

    int n = id_list.size(); // id 수
    
    // 이름 키, id map으로 저장
    map<string,int> id;
    for(int i=0; i<n; i++){
        id.insert({id_list[i],i});
    }
        
    vector<int> reported(n); // 각 id가 신고당한 횟수 저장
    vector<vector<int>> match(n); // id가 신고한 사람 저장
    
    int t = report.size(); // report 수
    
    //모든 report에 대하여
    for(int i=0; i<t; i++){
        //공백으로 분리 
        int split = report[i].find(' ');
        string whoReport = report[i].substr(0,split);
        string whoReported = report[i].substr(split+1,report[i].length()+1);
        
        int id1 = id[whoReport]; // 신고한 id
        int id2 = id[whoReported]; // 신고 당한 id
        
        // 중복 제거
        if(find(match[id1].begin(), match[id1].end(), id2)==match[id1].end()) 
        {
         match[id1].push_back(id2); //신고한 사람 -> 신고당한 사람
         reported[id2]++;    // 신고 당한 사람 횟수 저장 
        }
    }
    
    vector<int> answer(n);

    for(int i=0; i<n; i++){
        for(int j=0; j< match[i].size(); j++)
        {
            if(reported[match[i][j]]>=k)
                answer[i]++;
            }
        }
    
    return answer;
}
