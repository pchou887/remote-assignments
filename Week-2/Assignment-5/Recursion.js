// 遞迴版本
function RecursionBinarySearch(nums, TopIndex, EndIndex_Except, t) {
  let MidIndex;
  MidIndex = Math.floor((TopIndex + EndIndex_Except) / 2);
  if (nums[TopIndex] === t) return TopIndex;
  else if (nums[EndIndex_Except - 1] === t) return EndIndex_Except - 1;
  else if (MidIndex === EndIndex_Except - 1 && TopIndex === MidIndex - 1)
    return -1;
  else if (t < nums[MidIndex])
    return RecursionBinarySearch(nums, TopIndex, MidIndex + 1, t);
  else return RecursionBinarySearch(nums, MidIndex, EndIndex_Except, t);
}

function BinarySearch(numbers, target) {
  if (numbers.length > 1)
    return RecursionBinarySearch(numbers, 0, numbers.length, target);
  else if (numbers[0] === target) return 0;
  else return -1;
}

console.log(BinarySearch([1], 0));
console.log(BinarySearch([1, 2, 3, 5, 6, 7, 9, 10, 11], 7));
