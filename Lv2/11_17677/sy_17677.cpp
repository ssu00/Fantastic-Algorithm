#include <string>
#include <algorithm>
#include <cctype>
#include <cmath>
#include <map>
using namespace std;
map<string, int> s1;
map<string, int> s2;
map<string, int> sum;
map<string, int> sub;

int solution(string str1, string str2) {
    transform(str1.begin(), str1.end(), str1.begin(), (int(*)(int))tolower);
    transform(str2.begin(), str2.end(), str2.begin(), (int(*)(int))tolower);

    for (int i = 0; i < str1.length() - 1; i++) {
        string s = str1.substr(i, 2);
        if (isalpha(s[0]) && isalpha(s[1])) {
            s1[s]++;
        }
    }
    for (int i = 0; i < str2.length() - 1; i++) {
        string s = str2.substr(i, 2);
        if (isalpha(s[0]) && isalpha(s[1])) {
            s2[s]++;
            sum[s]++; // s2만 미리 저장
        }
    }

    //s1 기준으로 loop
    for (auto it = s1.begin(); it != s1.end(); it++) {
        auto it2 = s2.find(it->first);
        if (it2 != s2.end()) { // s1, s2 모두에 있음
            sum[it->first] = max(it->second, it2->second);
            sub.insert({ it->first,  min(it->second, it2->second) });
        }
        else // s1에만 있음
            sum.insert({ it->first, it->second });
    }


    int n1 =0, n2 = 0;
    for (auto it = sub.begin(); it != sub.end(); it++) 
        n1 += it->second;
    for (auto it = sum.begin(); it != sum.end(); it++) 
        n2 += it->second;

    if(n1==0&&n2==0)
        return 65536;
    
    double ans = double(n1) / double(n2);
    ans *= 65536;
    ans = floor(ans);
    return int(ans);
}