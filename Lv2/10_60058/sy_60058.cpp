#include <string>
#include <stack>
#include <algorithm>
using namespace std;

bool ifDone(string p) {
    stack<char> s;
    for (int i = 0; i < p.length(); i++) {
        if (!s.empty() && s.top() == '(' && p[i] == ')')
            s.pop();
        else
            s.push(p[i]);
    }
    return s.empty();
}

string solution(string p) {
    if (ifDone(p))
        return p;

    //1
    if (p.length() == 0)
        return p;
    //2
    string answer = "";
    string u = "";
    string v = "";
    int idx = 0;
    int left = 0;
    int right = 0;
    for (int i = 0; i < p.length(); i++) {
        if (p[i] == '(') left++;
        else right++;
        if (left == right) {//u v 분리
            u = p.substr(idx, i - idx + 1);
            idx = i + 1;
            v = p.substr(idx, p.length() - idx + 1);
            break;
        }
    }
    //3
    // 문자열 v에 대해 1단계부터 다시 수행한 결과 문자열을 
    // u에 이어 붙인 후 반환합니다. 
    if (ifDone(u)) {
       return u + solution(v);
    }
    
    //4
    else
    {
        string s="";
        s += "(";
        s += solution(v);
        s += ")";
        u = u.substr(1, u.length() - 2);
        for (int i = 0; i < u.length(); i++) {
            if (u[i] == '(')u[i] = ')';
            else u[i] = '(';
        }       
        s += u;
        return s;
    }
}
