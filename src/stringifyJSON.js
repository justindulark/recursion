// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  var arrayValues = [];
  var objString = [];
  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  if (typeof obj === 'number' || obj === undefined || obj === null || typeof obj === 'boolean') {
  	return "" + obj;
  }
  if (Array.isArray(obj)) {
  	if (obj.length < 1) {
  		return "[" + arrayValues + "]";
  	} else {
  	    obj.forEach(function(element){
  	       arrayValues.push(stringifyJSON(element)) 
  	    });

  	    return "[" + arrayValues + "]"
  	}
  }
  //usually need to check if !null, but that is already checked further up
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      for (var key in obj) {
        //only push if property is not function or undefined
        if (!(typeof obj[key] === 'function' || typeof obj[key] === 'undefined')){
            objString.push("" + stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        }
      }
      console.log(objString)
      return '{' + objString + '}'
    }
  }
};
