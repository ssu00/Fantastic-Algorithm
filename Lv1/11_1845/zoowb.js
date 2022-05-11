function solution(nums) {
  var answer = 0;
  const set = [...new Set(nums)];
  answer = nums.length / 2 < set.length ? nums.length / 2 : set.length;
  return answer;
}
