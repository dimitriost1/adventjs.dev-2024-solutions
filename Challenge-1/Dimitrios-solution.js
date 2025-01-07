/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  // Code here
  let giftsSet = new Set(gifts);
  let giftsArray = [...giftsSet].sort((a, b) => a - b);
  return giftsArray;
}
