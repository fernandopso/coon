function RandomNumbers(movieId, length) {
  var ranNums = []
  var i = 3
  while (i !== 0) {
    var id = Math.floor(Math.random() * (length+1))
    if (id !== movieId && ranNums.indexOf(id) == -1) {
      i--
      ranNums.push(id);
    }
  }
  return ranNums
}

export default RandomNumbers;