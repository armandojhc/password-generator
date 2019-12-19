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

    if (characterType.indexOf('S') >= 0) {
        useSpecial = true;
        charChoices += "!@#$%^&*()_+;:{}[]|',./?<>";
    }

    if (characterType.indexOf('N') >= 0) {
        useLower = true;
        charChoices += "1,2,3,4,5,6,7,8,9";
    }

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
      
    var charChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz!@#$%^&*()_+;:{}[]|',./?<>1,2,3,4,5,6,7,8,9";
    newChar = charChoices[Math.floor(Math.random() * charChoices.length)];
    newPassword = newPassword + newChar;
    }

    
}
