function isUniform(num) {
  var first = num[0]
    for (var i = 1; i < num.length; i ++){
      if (num[i]  !== first) {
            return false;   
      }
    }
    return true;
}