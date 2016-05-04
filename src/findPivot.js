/**
sourced from author : https://github.com/yilenpan
repo link: https://github.com/yilenpan/algorithmofanalgorithm
**/

/////////////////////////////////////////////////////////////
// Alphabetical Words
// ----------------------------------------------------------
// I have an array of words that are mostly alphabetical,
// except they start somewhere in the middle of the alphabet,
// reach the end, and then start from the beginning of the
// alphabet.
//
// In other words, this is an alphabetically ordered array
// that has been "rotated." For example:
// ['dog','eagle','falcon', /*PIVOT*/ 'apple','bear','cat']
//
// Write a function that returns the index of the 'pivot'
//
/////////////////////////////////////////////////////////////

var findPivotedWord = function (array, start, end) {
  start = start || 0
  end = end || array.length -1;
  var middle = Math.round((start + end)/2);
  //if left is less than right the sub array is sorted
  if(start+1 === end){
    if(array[start].toLowerCase() > array[end].toLowerCase()){
      return start
    } else  {
      if(array[start] > array)
      return null;
    }
  }
  if(array[start].toLowerCase() < array[middle].toLowerCase()){
    return findPivotedWord(array,middle,end);
  } else {
    return findPivotedWord(array, start, middle);
  }
  
};

export default findPivotedWord
