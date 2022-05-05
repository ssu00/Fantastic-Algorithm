#include<iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

bool cmp(vector<float> &v1, vector<float> &v2){
    if(v1[0] == v2[0]) //같은 값일때
        return v1[1]<v2[1]; //index로 비교 예외처리!!!
    else
        return v1[0]>v2[0];
}

vector<int> solution(int N, vector<int> stages) {
    int count[600][2]={0,}; // 도달한 사람, 성공한 사람    
    for(int i=0 ; i<stages.size(); i++){ 
        for(int j=1; j < stages[i]; j++){
            count[j][0]++; //도달
            count[j][1]++; //성공
        }
        count[stages[i]][0]++; //마지막은 도달만
    }
    
    vector<vector<float>> answer(N, vector<float>(2));
    for(int i=1 ; i<=N; i++){    
        if(count[i][0]==0) //0으로 나누는경우 예외처리!!!
            answer[i-1][0]=0; 
        else
            answer[i-1][0]=float(float(count[i][0]-count[i][1])/float(count[i][0]));
        answer[i-1][1]=i;
    }
    sort(answer.begin(),answer.end(),cmp);
    
    vector<int> ans(N);
    for(int i=0; i<N; i++){
        ans[i]=answer[i][1];
    } 
    
    return ans;
}
