function solution(lottos, win_nums) {
  let right = 0,
    dontKnow = 0;
  lottos.forEach((data) => {
    if (data == 0) dontKnow++;
    else if (win_nums.includes(data)) right++;
  });

  let maxCount = right + dontKnow;
  let minCount = right;
  let maxRank = maxCount <= 1 ? 6 : 7 - maxCount;
  let minRank = minCount <= 1 ? 6 : 7 - minCount;

  var answer = [maxRank, minRank];
  return answer;
}
