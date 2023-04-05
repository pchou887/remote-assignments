// 迴圈版本
function binarySearchPosition(numbers, target) {
  let top = 0,
    end = numbers.length,
    mid;
  if (numbers[end - 1] === target) return end - 1;
  do {
    mid = Math.floor((top + end) / 2);
    if (numbers[top] === target) return top;
    else if (target < numbers[mid]) end = mid + 1;
    else top = mid;
  } while (mid !== end - 1);
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 7, 8, 9, 10], 9));
console.log(binarySearchPosition([1], 12));
