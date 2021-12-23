const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Linear search is a very simple search algorithm. In this type of search,
// a sequential search is made over all items one by one. Every item is checked and if a
// match is found then that particular item is returned,
// otherwise the search continues till the end of the data collection.

const arr = [2, 5, 4, 87, 6, 8, 25, 48, 96];

const search = (num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
};
// Returns index of the number if found, if not, returns -1

rl.question(
  "Array: " + arr.join(", ") + "\n\nEnter number to be search: ",
  (num) => {
    const result = search(parseInt(num));

    console.log("\nResult(Index from array): " + result);

    rl.close();
  }
);

rl.on("close", () => {
  process.exit(0);
});
