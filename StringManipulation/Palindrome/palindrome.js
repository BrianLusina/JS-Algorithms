var Palindrome = function(){};

Palindrome.prototype.isPalindrome = function(str){
  //punctuation marks
  var re = /[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/gi;
  //turn strings to lower case and removes puncuation
  var iniStr = str.toLowerCase().replace(re,"");
  var finalStr = iniStr.replace(/\s+/g,"");
  if(finalStr.split("").reverse().join("") == finalStr){
    return true;
  }else{
    return false;
  }
}

module.exports = Palindrome
