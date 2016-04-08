exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if (arr[i] === item) return i
    }
    return -1
  },

  sum : function(arr) {
    return arr.reduce(function(curr, prev){
      return curr + prev;
    });
  },

  remove : function(arr, item) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== item) result.push(arr[i])
    }
    return result;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(curr){
      if (curr === item) count++;
    })
    return count;
  },

  duplicates : function(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
      var curr = arr.shift();
      if(arr.includes(curr)){
        if(!result.includes(curr)) result.push(curr)
      }
    }
    return result;
  },

  square : function(arr) {
    return arr.map(function(curr){
      return curr * curr;
    })
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    arr.forEach(function(curr, idx){
      if(curr == target) result.push(idx)
    })
    return result;
  }
};
