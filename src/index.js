module.exports = function longestConsecutiveLength(array) {
  const set = new Set(array);
  let length = 0;

  set.forEach(element => {
    if(!set.has(element - 1)) {
      let start = element;

      while(set.has(start))
        start++;

      length = Math.max(length, start - element);
    }
  });

  return length;
}
