function countAandB(input) {
  count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "b") count++;
  }
  return count;
}
function toNumber(input) {
  output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].charCodeAt() - 96);
  }
  return output;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1));

console.log(toNumber(input1));

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2));
console.log(toNumber(input2));
