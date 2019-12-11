/* eslint-disable no-unused-vars */
function sort(array) {
  let newArr = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let previousIndex, currentFirstLetter, currentIndex;
  for (let i = 0; i < alphabet.length; i++) {
    debugger;
    currentFirstLetter = array[i][0];
    currentIndex = alphabet.indexOf(currentFirstLetter);
    if (currentIndex > previousIndex) {
      newArr.push(array[i]);
      previousIndex = currentIndex;
    } else {
      newArr.unshift(array[i]);
      previousIndex = currentIndex;
    }
  }
  return newArr;
}
