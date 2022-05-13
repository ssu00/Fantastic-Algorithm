#include <string>
#include <vector>
#include <map>
using namespace std;

vector<string> solution(vector<string> record) {
    vector<vector<string>> answer; // {command , uid}
    map<string, string> nick; //uid -> nickname (갱신)
    vector<string> result; // 정답

    for (int i = 0; i < record.size(); i++) {
        int idx = record[i].find(" ");
        string command = record[i].substr(0, idx);
        int idx2 = record[i].find(" ", idx + 1);
        string uid = record[i].substr(idx + 1, idx2 - (idx + 1));
        answer.push_back({ command,uid });
        if (command != "Leave") {
            string name = record[i].substr(idx2 + 1, record[i].length());
            auto it = nick.find(uid);
            if (it != nick.end()) //닉네임 변경
                it->second = name; 
            else //처음 등장한 uid
                nick.insert({ uid, name });
        }
    }
    
    //uid->nickname 최종갱신 완료 후에 result 생성
    for (int i = 0; i < answer.size(); i++) {
        if(answer[i][0]=="Change")
            continue;
        string s = nick[answer[i][1]];
        if (answer[i][0] == "Enter")
            s += "님이 들어왔습니다.";
        else if (answer[i][0] == "Leave")
            s += "님이 나갔습니다.";
        result.push_back(s);
    }

    return result;

}
