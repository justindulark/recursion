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
    //why does this work? At first you would think that x++
    //never happens and the function keeps going into the next childnode
    //but when there is no more childnodes, it pops back up to the function that
    //called it and x++ resolves, and test gets called on the node.childNodes[x+1],
    //and goes deeper into the childNodes list until there is no more, pops up
    //and does it again. This type of recursion is called corecursion...
    //recursion with no base case!
    for(var x = 0; x < node.childNodes.length; x++) {
      test(node.childNodes[x]);
    }
  }
  //test whole page
  test(document.body);
  return hasClassName;
};
