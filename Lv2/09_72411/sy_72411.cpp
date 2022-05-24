#include <string>
#include <vector>
#include <algorithm>
#include <map>
using namespace std;
int n;
map<string, int> m;

// 조합
void dfs(int index, string ord, string s) {
    if (s.length() == n) {
            m[s]++;
            return;
    }
    for (int i = index; i < ord.length(); i++) {
        dfs( i+1, ord, s+ord[i]);
    }
}

// map에서 value 기준으로 정렬
bool cmp(const pair<string, int>& a, const pair<string, int>& b) {
    return a.second > b.second;
}


vector<string> solution(vector<string> orders, vector<int> course) {

    vector<string> answer;
    
    // course 크기 별로 따로 돌리기  //!!!
    for (int c = 0; c < course.size(); c++) {
        m.clear();
        n = course[c];

        for (int i = 0; i < orders.size(); i++) {
            //AB와 BA가 같으므로 문자열을 먼저 정렬!!해서 조합을 찾는다
            sort(orders[i].begin(), orders[i].end());
        
            if (orders[i].length() >= n)
                dfs(0,orders[i], ""); //모든 조합 찾기
        }

        //map vector로 옮겨서 sort
        vector<pair<string, int>> sorted(m.begin(), m.end());
        sort(sorted.begin(), sorted.end(), cmp);
      
            int maxcount = sorted[0].second;
            if (maxcount >= 2)
                for (int s = 0; s < sorted.size(); s++)
                {
                    if (sorted[s].second < maxcount)
                        break;
                    answer.push_back(sorted[s].first);
                }
        
    }
    sort(answer.begin(), answer.end());
    return answer;
}
