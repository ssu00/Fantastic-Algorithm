#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int solution(vector<int> numbers) {
    int answer = 0;
    vector<int> num = {0,1,2,3,4,5,6,7,8,9};
    
    for(int i=0; i<numbers.size(); i++){
        auto it= find(num.begin(), num.end(), numbers[i]); //iter 반환
        if(it!=num.end())
            num.erase(it);
    }
    
    for(int i=0; i<num.size(); i++)
        answer+=num[i];
    
        return answer;
}
