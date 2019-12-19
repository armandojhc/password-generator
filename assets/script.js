function generatePasswordBt() {
  
	var pwLength = prompt("Password length (8-128)?","16");
	//alert ("Password length is " + pwLength);
	
  	if (pwLength < 8 || pwLength > 128) {
      alert("Password length needs to be between 8-128 length!");
      return;
    }
  
  	var useSpecial = false;
  	var useNumeric = false;
  	var useUpper = false;
  	var useLower = false;
	var characterType = prompt("Select whether you would like Special, Numeric, Uppercase, and Lowercase characters (type S, N, U or L)");
  	
  	var charChoices = "";
  	if (characterType.indexOf('S') >= 0) useSpecial = true;
  	if (characterType.indexOf('N') >= 0) useNumeric = true;
  	if (characterType.indexOf('U') >= 0) {
      useUpper = true;
      charChoices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  	if (characterType.indexOf('L') >= 0) {
      useLower = true;
      charChoices += "abcdefghijklmnopqrstuvwxyz";
    }
  
  	if (!(useSpecial || useNumeric || useUpper || useLower)) {
      alert ("Please choose at least one character type (S, N, U or L).");
      return;
    }
  
  	var newPassword = "";
  	var newChar;
  
	for (var i=0; i<pwLength; i++) {
      
     charChoices =  // Select a character from among the selected choices
       newChar = //character randomly picked from charChoices
       newPassword = newPassword + newChar;
      // Add that character to newPassword
      
    }

  	// Update the innerHTML of your html file to show password. Use the element id to do this
  	document.getElementById("NN").innerHTML = newPassword;
  	
}
