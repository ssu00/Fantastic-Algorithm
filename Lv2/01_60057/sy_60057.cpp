#include <string>
#include <vector>
#include<iostream>
using namespace std;
int ans = 9999999;

int solution(string s) {
    int n = s.length();

    string answer = "";
    int count = 1;
    string cur = "";

    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n+i; j = (j + i)) { //마지막 하고 한번 더
            string temp;
            if (j >= n)
                temp = "";
            else
                temp= s.substr(j, i);
            if (cur == temp) {//같으면
                count++;
            }
            else {//다르면 (여기서 갱신)
                if (count != 1) //기존에 같은 값이 있을시
                {
                    answer += to_string(count);
                    count = 1;
                }
                answer += cur;
            }
            cur = temp;
        }
        if (answer.length() < ans)ans = answer.length();
        answer = "";
        count = 1;
        cur = "";
    }

    return ans;
}
