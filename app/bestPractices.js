exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    // let is block scope. Could use const if obj wouldn't be modified
    let myObject = {
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {
    if (flag) {
      var getValue = function() { return 'a'; }
    } else {
      var getValue = function() { return 'b'; }
    }

    return getValue();
  },

  parseInt : function(num) {
    // Provide radix value to get base 10 numbers.
    // Should always be specified to get predictable behavior
    return parseInt(num, 10);
  },

  identity : function(val1, val2) {
    // == is abstract, or loose, equality - converts to common type
    // === is strict equality
    return val1 === val2
  }
};
