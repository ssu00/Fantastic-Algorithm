function solution(nums) {
  var answer = 0;
  var temp = []; //더한 경우의 수 저장하는 배열

  //3개 수 뽑아서 더하기
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length - i - 1; j++) {
      for (var k = 0; k < nums.length - i - j - 2; k++) {
        temp.push(nums[i] + nums[i + j + 1] + nums[i + j + k + 2]);
      }
    }
  }
  //소수인 수의 개수 구하기
  temp.forEach((a) => {
    var check = true;
    for (var i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        check = false;
      }
    }
    if (check) answer++;
  });

  return answer;
}
