// 迴圈版本
function binarySearchPosition(numbers, target) {
  let TopIndex = 0,
    EndIndex_Except = numbers.length,
    MidIndex;
  do {
    MidIndex = Math.floor((TopIndex + EndIndex_Except) / 2);
    if (numbers[TopIndex] === target) return TopIndex;
    // EndIndex 永遠不包含於索引數字時，就不需要去判別 EndIndex 是否為答案，也不會一直使重複找同一個數
    else if (target < numbers[MidIndex]) EndIndex_Except = MidIndex + 1;
    // 一直去壓縮 TopIndex 只要出現對值在下次迴圈就會回傳
    else TopIndex = MidIndex;
    // 當搜尋過後 Top Mid End 的 Index 成等差數列，此數則在某兩數之間或小於第一項
    // 或是 Top Index 找到 array 中的最後一數還是無法找到，則此數列可能為一數，或是會大於本數列最後一數
  } while (
    TopIndex !== MidIndex - 1 &&
    EndIndex_Except !== MidIndex - 1 &&
    TopIndex !== numbers.length - 1
  );
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7, 9, 10], 8));
console.log(binarySearchPosition([1], 0));
