/**
 * Input: 6
 *
 * Sample output:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 */
const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    // const hashes = "#".repeat(i);
    // console.log(hashes);
    let hashes = "";
    for (let j = 1; j <= i; j++) {
      hashes += "#";
    }
    console.log(hashes);
  }
};

/**
 * Input: 6
 *
 * Sample output:
 *      #
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 */
const staircase2 = (n) => {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);

    console.log(spaces + hashes);
  }
};

staircase(6);
staircase2(6);
