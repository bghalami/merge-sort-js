// Split the array into halves and merge them recursively
function mergeSort(array) {
  // if the array only has one digit
  if (array.length === 1) {
    // return the array, no sorting needed
    return array;
  };

  // get the mid point of the array, to split the halves
  // using const because this value should never change
  const middle = Math.floor(array.length / 2);
  // get all the numbers in the first half
  const left = array.slice(0, middle);
  // get all the numbers in the second half
  const right = array.slice(middle);

  // run our merge function with the sorted left, and sorted right arrays,
  // recursively breaking them down until they are all 1 digit long
  return merge(mergeSort(left),mergeSort(right));
};

// compare the arrays item by item and return the sorted result
function merge(left, right) {
  // using let because these values will be reassigned below (internet said let's better than var... so)
  // result will hold sorted array
  let result = [];
  // start these at 0 because we want to break our arrays down to one element, index[0]
  let indexLeft = 0;
  let indexRight = 0;

  // while our pieces to sort are more than one element long
  while (indexLeft < left.length && indexRight < right.length) {
    // if the first element in the left collection is less than the
    // first element of the right collection
    if (left[indexLeft] < right[indexRight]) {
      // then we add that number to the end of the result array
      result.push(left[indexLeft]);
      // and move to the next index of the left/first array
      indexLeft++;
    // if the first element in the RIGHT collection is less than the
    // first element in the LEFT collections
    } else {
      // then we add that number to the end of the result array
      result.push(right[indexRight]);
      // and move to the next index of the right/second array
      indexRight++;
    };
  };

  // here we concatinate(combine) the left and right arrays,
  // slicing them to the length of the current array so we don't end up taking
  // every element of the arrays for the number of times those elements are sorted
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

// this exports the file but lets me access mergeSort specifically
module.exports.mergeSort = mergeSort;
// same as above but with merge
module.exports.merge = merge;
