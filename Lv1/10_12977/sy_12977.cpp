#include <vector>
#include <iostream>
using namespace std;
int count=0; 
int arr[3];
int n;
void dfs(int depth,int pos,vector<int> &nums){
    if(depth==3){
        int sum= arr[0]+arr[1]+arr[2];
        for(int i=2; i<sum; i++){
            if(sum%i==0)
             return;
            
        }
        count++;
        return;
    }
    for(int i=pos;i<n; i++){
        arr[depth]=nums[i];
        dfs(depth+1,i+1,nums);
    }
}

int solution(vector<int> nums) {
    n=nums.size();
    dfs(0,0,nums);

    return count;
}
