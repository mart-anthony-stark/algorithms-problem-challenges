const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Bubble Sort is the simplest sorting algorithm that works by
// repeatedly swapping the adjacent elements if they are in wrong order.
const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
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
