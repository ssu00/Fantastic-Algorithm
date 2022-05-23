//수정해야도미...
//AB BA 같은 조합으로 판단해야................................
#include <string>
#include <vector>
#include <algorithm>
#include <map>
using namespace std;
int n;
vector<map<string, int>> m(11);

void dfs(int depth, string ord, string s, vector<int>& course, vector<int> &visit) {
    if (find(course.begin(), course.end(), depth) != course.end()) {
        if (m[depth].find(s) == m[depth].end())
            m[depth].insert({ s,1 });
        else
            m[depth][s]++;
        if (depth == n)
            return;
    }
    if(depth==ord.length())
        return;
    for (int i = depth; i < ord.length(); i++) {
        if (visit[i] == false) {
            visit[i] = true;
            s += ord[i];
            dfs(depth + 1, ord, s, course, visit);
            visit[i] = false;
            s=s.substr(0, s.length()-1 );
        }
    }

}
bool cmp(const pair<string, int>& a, const pair<string, int>& b) {
    if (a.second == b.second) return a.first > b.first;
    return a.second > b.second;
}


vector<string> solution(vector<string> orders, vector<int> course) {

    vector<string> answer;

    // course depth 만큼의 dfs    
    for (int i = 0; i < orders.size(); i++) {
        n = course[course.size() - 1];
        string s = "";
        vector<int> visit(20);
        dfs(0, orders[i], s, course,visit);
    }

    for (int i = 0; i < course.size(); i++) {
        int idx = course[i];
       // sort(m[idx].begin(), m[idx].end(), cmp);

        auto it = m[idx].begin();
        int maxcount = it->second;

        while(it!=m[idx].end()){
            if (it->second > maxcount)
                maxcount=it->second;
            it++;
        }
        if(maxcount>=2){
        it = m[idx].begin();
        while(it!=m[idx].end()){
            if (it->second == maxcount)
                answer.push_back(it->first);
            it++;
        }
        }
        
    }
    sort(answer.begin(), answer.end());
    return answer;
}
