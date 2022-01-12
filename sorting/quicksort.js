const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Quick sort is a comparison sort, meaning that it can sort items of any type for
// which a "less-than" relation (formally, a total order) is defined.
function sort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];

  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return sort(left).concat(pivot, sort(right));
}

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
