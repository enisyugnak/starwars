/**
 * Get random items from an array without modifying the original array.
 * @param {Array} arr - The array to get items from.
 * @param {number} numItems - The number of random items to select.
 * @returns {Array} - The random items selected from the array.
 */
export const getRandomItems = (arr, numItems) => {
  if (numItems >= arr.length) {
    return [...arr]; // Return the whole array if requested items are more than or equal to array length
  }

  const copiedArray = [...arr];
  const randomItems = [];

  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * copiedArray.length);
    randomItems.push(copiedArray[randomIndex]);
    copiedArray.splice(randomIndex, 1); // Remove the selected item to avoid duplication
  }

  return randomItems;
};

/**
 * Shuffle an array without modifying the original array.
 * @param {Array} arr - The array to get items from.
 * @returns {Array} - shuffled items from the array.
 */
export const shuffleArray = (arr) => {
  const copiedArray = [...arr];
  for (let i = copiedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
  }
  return copiedArray;
};

/**
 * Remove duplicate items in an array of objects by given keys.
 * @param {Array} arr - array of objects
 * @param {Array} keys - array of keys to be removed
 * @returns {Array} - shuffled items from the array.
 */

export const removeDuplicatesByKeys = (arr, keys) => {
  const seen = new Set();
  return arr.filter((item) => {
    const keyValue = keys.map((key) => item[key]).join("-");
    if (seen.has(keyValue)) {
      return false;
    }
    seen.add(keyValue);
    return true;
  });
};
