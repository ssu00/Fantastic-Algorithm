#include <string>
#include <vector>
#include<iostream>
using namespace std;
vector<int> answer;
int arr[100][100];
void rotate(int x1,int y1, int x2, int y2){
    int ans = arr[x1][y1];
    
    int temp[4] = {arr[x1][y1],arr[x1][y2],arr[x2][y2],arr[x2][y1]};
    if(temp[1]<ans)ans=temp[1];
    if(temp[2]<ans)ans=temp[2];
    if(temp[3]<ans)ans=temp[3];
    
    //>
    for(int i=y2;i>y1;i--){
        arr[x1][i]=arr[x1][i-1];
        if(arr[x1][i]<ans)ans=arr[x1][i];
    }
    
    //V
    for(int i=x2; i>x1+1; i--){
        arr[i][y2]=arr[i-1][y2];
        if(arr[i][y2]<ans)ans=arr[i][y2];
    }
     arr[x1+1][y2]=temp[1];
    
    //<
    for(int i=y1; i<y2-1 ; i++){
        arr[x2][i]=arr[x2][i+1];
        if(arr[x2][i]<ans)ans=arr[x2][i];
    }
    arr[x2][y2-1]=temp[2];

    //ㅅ
    for(int i=x1; i<x2-1; i++){
        arr[i][y1]=arr[i+1][y1];
        if(arr[i][y1]<ans)ans=arr[i][y1];
    }
    arr[x2-1][y1]=temp[3];
    
    answer.push_back(ans);
    
}
vector<int> solution(int rows, int columns, vector<vector<int>> queries) {
    
    for(int i=0; i<rows; i++){
        for(int j=1; j<=columns;j++)
            arr[i][j-1]=i*columns + j;
    }
    
    for(int i=0; i<queries.size();i++){
        rotate(queries[i][0]-1,queries[i][1]-1,queries[i][2]-1,queries[i][3]-1);
    }
    return answer;
}