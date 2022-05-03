#include <string>
#include <vector>
#include <stack>

using namespace std;

int solution(vector<vector<int>> board, vector<int> moves) {
    int answer = 0;
    int n = board.size();
    
    stack<int> s;
    for(int i=0; i<moves.size(); i++){
        int cur = moves[i]-1; //가로
        
        int top;
        for(int j=0; j<n; j++){
          //위에서부터 인형이 있는 칸 찾기
            if(board[j][cur]!=0){ // 인형이 있는 칸을 발견
                 if(!s.empty())
                    top= s.top();
                else
                    top=0;
               
                //인형 집기
                s.push(board[j][cur]);
                board[j][cur]=0; 
              
                // 중복돼서 사라지는 경우
                if(top==s.top()){
                    s.pop(); s.pop();
                    answer++;answer++;
                }
                break;
            }
        }
    }

    return answer;
}
