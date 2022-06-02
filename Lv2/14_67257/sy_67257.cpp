#include <string>
#include <vector>
using namespace std;
vector<long long> num;
vector<char> cal;

long long calnum(long long a, long long b, char c) {
    if (c == '+') return a + b;
    else if (c == '-') return a - b;
    else return a * b;
}

void calculate(char c, vector<long long> &num, vector<char> &cal ) {
    auto it = cal.begin();
    auto it2 = num.begin();
    while (1) {
        if (it == cal.end())
            break;
        if (*it == c) {
            *it2 = calnum(*it2, *(it2+1), c);
            it=cal.erase(it);
            num.erase(it2+1);
        }
        else {
            it++;
            it2++;
        }
    }
}

long long solution(string expression) {

    long long pre = 0;
    for (int i = 0; i < expression.length(); i++) {
        if (expression[i] == '+' || expression[i] == '-' || expression[i] == '*') {
            num.push_back(pre);
            cal.push_back(expression[i]);
            pre = 0;
        }
        else { // 숫자
            pre = pre * 10 + expression[i] - '0'; // 숫자 저장
        }
    }
    num.push_back(pre);


    vector<vector<char>> v = { {'*','+','-'},{'*','-','+'}, {'+','*','-'}, {'+','-','*'}, {'-','+','*'}, {'-','*','+'} };
    long long ans = 0;
    for (int i = 0; i < 6; i++) {
        vector<char> cal1 = cal;
        vector<long long> num1 = num;
        for (int k = 0; k < 3; k++) {
            calculate(v[i][k], num1, cal1);
        }
        if (ans < abs(num1[0]))ans = abs(num1[0]);
    }

    return ans;
}