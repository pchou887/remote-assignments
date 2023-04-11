// 巢狀迴圈版本(加法)，次數O(n^2 / 2)
function twoSum(nums, target) {
  for (let holdIndex = 0; holdIndex < nums.length; holdIndex++) {
    for (
      let adaptIndex = holdIndex + 1;
      adaptIndex < nums.length;
      adaptIndex++
    ) {
      if (nums[holdIndex] + nums[adaptIndex] === target)
        return [holdIndex, adaptIndex];
    }
  }
}
// Map版本(減法)，次數O(n)
function twoSumSearchDiff(nums, target) {
  const diffLibrary = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (nums[i] in diffLibrary) {
      return [diffLibrary[nums[i]], i];
    } else {
      diffLibrary[diff] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
