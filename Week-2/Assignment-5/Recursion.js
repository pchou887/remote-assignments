// 遞迴版本
function RecursionBinarySearch(nums, top, end, t) {
  let mid;
  mid = Math.floor((top + end) / 2);
  if (nums[top] === t) return top;
  else if (nums[end - 1] === t) return end - 1;
  else if (mid === end - 1) return -1;
  else if (t < nums[mid]) return RecursionBinarySearch(nums, top, mid + 1, t);
  else return RecursionBinarySearch(nums, mid, end, t);
}

function BinarySearch(numbers, target) {
  return RecursionBinarySearch(numbers, 0, numbers.length, target);
}

console.log(BinarySearch([1, 2, 5, 7, 8, 9, 10], 6));
console.log(BinarySearch([1, 2, 5, 6, 7, 9, 10, 11], 11));
