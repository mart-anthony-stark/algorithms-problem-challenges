const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Quick sort is a comparison sort, meaning that it can sort items of any type for
// which a "less-than" relation (formally, a total order) is defined.
const sort = (arr) => {
  if (arr.length <= 1) return arr;

  let left = [];
  let right = [];

  let newArray = [];
  const pivot = arr.pop();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return newArray.concat(sort(left), pivot, sort(right));
};

rl.question(
  "Enter numbers separated by commas\nEx. 4,6,1,5,7,2\n",
  function (nums) {
    const arr = nums
      .replace(/s+/g, "")
      .split(",")
      .map((n) => parseInt(n));
    const sortedArray = sort(arr).join(", ");
    console.log("Sorted array", sortedArray);
    rl.close();
  }
);

rl.on("close", function () {
  process.exit(0);
});
