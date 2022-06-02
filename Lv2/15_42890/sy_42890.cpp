#include <string>
#include <vector>
#include <set>
#include <algorithm>
using namespace std;
int n;
vector<vector<string>> r;
vector<string> ans;
int l;

bool unique(string s) {
    // 유일성 : set(중복 x)에 넣어서 row 개수 확인
    set<string> set;
    for (int j = 0; j < r.size(); j++) {
        string temp = "";
        for (int i = 0; i < s.length(); i++) {
            temp += r[j][s[i] - '0'];
        }
        set.insert(temp);
    }
    if (set.size() == r.size()) return true;
    else return false;
}

bool min(string s) {
     //최소성 : string includes로 부분 집합 확인
    for (int i = 0; i < ans.size(); i++) {
        if (includes(s.begin(), s.end(),ans[i].begin(), ans[i].end()))
            return false;
    }
    return true;
}
void dfs(int depth, int pos, string s, int n) {
    if (depth == n) {
        if (unique(s) && min(s))
            ans.push_back(s);
        return;
    }
    for (int i = pos; i < l; i++) {
        dfs(depth + 1, i + 1, s + to_string(i), n);
    }
}

int solution(vector<vector<string>> relation) {
    r = relation;
    l = relation[0].size();
    for (int i = 1; i <= l; i++) {
        //i개 짜리
        dfs(0, 0, "", i);
    }

    return ans.size();
}