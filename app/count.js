exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var to;
    function startCount() {
      console.log(start++);

      if (start <= end) {
        to = setTimeout(startCount, 100);
      }
    }
    startCount();

    return {
      cancel: function(){
        to && clearTimeout(to)
      }
    };
  }
};
