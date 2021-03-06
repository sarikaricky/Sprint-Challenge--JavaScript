/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};p.forEach (function(key, value){
  console.log ("Key: " + key);
  console.log ("Value: " + value);
});

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a 
  //transformation function (iteratee).
  // Return the new array.
};map.forEach((value, key) => {
  console.log(key, value);
});

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  {return (...args); => {
    const limitFunctionCallCount = []; 
    limitFunctionCallCount.push(...args);
    if (limitFunctionCallCount.includes(...args)) {
      for (let i = 0; i <limitFunctionCallCount; i++) {
        if ((limitFunctionCallCount[i]) === (...arg)) {
          return cb(...args);
  };
  };

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
return (...args) => {
  const cache = [];
  cache.push(...args);
  if (cache.includes(...args)) {
    for (let i = 0; i < cache.length; i++) {
      if ((cache[i]) === (...arg)) {
        return cb(...args); 
      };
    };

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is 
  //that you need to do it recursivley!
  var str2 = "";
  var count = str.length-1;
  for(var i = count; i>=0; i--){
  str2 += str.charAt(i);
  }
  return str2;
  return str.split('').reverse().join('');
}
 
reverseString("hello");
//reverseString("Howdy");
 
//reverseString("Greetings from Earth");

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const testKey = obj[Object.keys(obj)[0]];
  const x = (obj2, testCase) => {
  const objKey = Object.keys(obj2);
    for (let i = 0; i < objKey.length; i++) {
      if (typof obj2[objKey[i]] === 'object') return
  x(obj2[objKey[i]], testCase);
     if (testKey !== obj2[obj2[objKey[i]]) return false;
    }
  return true; 
};
  return x(obj, testKey); 

/* eslint-enable no-unused-vars */

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};  for (let i = 0; i< elements.length; i++) {
      if (typeof elements[i] === 'object') {
        elements[i] = flatten(elements[i]);
      }
}
return elements; 
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
