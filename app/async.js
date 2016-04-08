exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var result = new Promise(function(resolve, reject){
      if(value){
        return resolve(value)
      } else {
        return reject(Error("False"))
      }
    })
    return result;
  },

  manipulateRemoteData : function(url) {
    var parse = function(response){
      return response.json();
    };

    var sortJSON = function(data){
      var arr = [];
      for(var key in data){
        if(typeof data[key] == 'object') {
          arr = arr.concat(sortJSON(data[key]));
        } else {
          arr.push(data[key])
        }
      }
      return arr.sort();
    }

    var result = fetch(url).then(parse);
    return result.then(sortJSON);
  }
};
