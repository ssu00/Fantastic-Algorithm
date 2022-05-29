#include <string>
#include <vector>
#include<map>
#include<algorithm>
using namespace std;
map<string, int> m;
vector<string> result;
bool cmp(const pair<string, int>& a, const pair<string, int>& b) {
    return a.second > b.second;
}
vector<int> solution(string s) {
    s = s.substr(1, s.length() - 2);

    while (1) {
        int endidx = s.find('}');
        if (endidx == string::npos)
            break;
        string cur = s.substr(1, endidx - 1);

        while (1) {
            int nextidx = cur.find(',');
            if (nextidx == string::npos) {
                m[cur]++;
                break;
            }
            string num = cur.substr(0, nextidx);
            m[num]++;
            cur = cur.substr(nextidx + 1, cur.length());
        }
        if (endidx == s.length() - 1)
            break;
        s = s.substr(endidx + 2, s.length());
    }

    vector<pair<string, int>> v(m.begin(), m.end());
    sort(v.begin(), v.end(), cmp);

    vector<int> answer;
    for (auto it = v.begin(); it != v.end(); it++) {
        answer.push_back(stoi(it->first));
    }
    return answer;
}