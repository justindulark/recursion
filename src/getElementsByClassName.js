// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var hasClassName = [];
  function test(node) {
    if(node.classList && node.classList.contains(className)) {
      hasClassName.push(node);
    }
    for(var x = 0; x < node.childNodes.length; x++) {
      test(node.childNodes[x]);
    }
  }
  test(document.body);
  return hasClassName;
};
