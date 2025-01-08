/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  // Code here
  const maxWordLength = Math.max(...names.map((word) => word.length));
  const upAndDownBorder = "*".repeat(maxWordLength + 4);

  const result =
    upAndDownBorder +
    "\n" +
    `${names
      .map((name) => `* ${name + " ".repeat(maxWordLength - name.length)} *`)
      .join("\n")}` +
    "\n" +
    upAndDownBorder;

  return result;
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));
