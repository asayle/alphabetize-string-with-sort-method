function alphaOrder (str){
    //  create variable splitString and split it into an array of letters
    //  var splitString = str.split(''); 
    // // create variable sortString and sort it by alphabetical order
    //  var sortString = splitString.sort(); 
    // // create variable joinString to join letters together into one string
    //  var joinString = sortString.join('');
    // // return joinString
    //  return joinString

    // complete all of this on one line
      var newString = str.split('').sort().join('');
      return newString
      
    }
    
    console.log(alphaOrder('hello'));
    console.log(alphaOrder('goodbye'));