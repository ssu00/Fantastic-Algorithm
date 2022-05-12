function solution(nums) {
    const numSet=new Set(nums);
    var answer= numSet.size>=nums.length/2 ? nums.length/2 : numSet.size;
    return answer;
}