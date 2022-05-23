#include <string>
#include <vector>
using namespace std;
int n;
int answer;
int tar;
void dfs(vector<int> numbers, int depth, int sum) {
    if (depth == n) {
        if (sum == tar) {
            answer++;
        }
        return;
    }
    dfs(numbers, depth + 1, sum + numbers[depth] );
    dfs(numbers, depth + 1, sum - numbers[depth]);

}
int solution(vector<int> numbers, int target) {
    n = numbers.size();
    tar = target;
    dfs(numbers, 0, 0);
    return answer;
}