/**
 * Returns the value of a nested property in an object based on a given path.
 *
 * @param {Object} element - The object to search within.
 * @param {Array} path - The path to the target property as an array of keys.
 * @return {*} - The value of the target property, or undefined if it doesn't exist.
 */
function pathToTarget (element, path) {
  let target = element;
  for (let i = 0; i < path.length; i++) {
    target = target[path[i]];
    if (!target) {
      break;
    }
  }
  return target;
}
