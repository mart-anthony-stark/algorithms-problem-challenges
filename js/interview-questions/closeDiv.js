/**
 * Write a function that accepts a String as an argument.
 *
 * The string is supposed to be HTML, but all the div elements
 * are missing their closing tags.
 *
 * The function's job is to find and close all the divs in the
 * provided HTML string.
 *
 * The function should return the entire corrected string.
 */

function closeDivs(html) {
  // Your code here
  let output = "";
  let detected = false;

  for (let i = 0; i < html.length; i++) {
    if (
      html[i] === "<" &&
      html[i + 1] === "d" &&
      html[i + 2] === "i" &&
      html[i + 3] === "v"
    ) {
      output += detected ? "</div>" : "<div>";
      i += 4;

      detected = !detected;
    } else {
      output += html[i];
    }
  }

  return output;
}

// test cases
console.log(closeDivs("<div><p>asdwe</p><div>")); // <div></div><div></div>
console.log(closeDivs("<div>asdqwe</div>")); // <div></div>
