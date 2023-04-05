function count(input) {
  let data = {};
  for (let i = 0; i < input.length; i++)
    data[input[i]] =
      input[i] in data ? data[input[i]] + 1 : (data[input[i]] = 1);

  return data;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x", "z", "c"];
console.log(count(input1));

function groupByKey(input) {
  let data = {};
  for (let i = 0; i < input.length; i++)
    data[input[i].key] =
      input[i].key in data
        ? data[input[i].key] + input[i].value
        : input[i].value;

  return data;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 3 },
  { key: "c", value: 9 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
