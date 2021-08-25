export function encryptCaesar(inputString, key) {
	var UpperCase = inputString.toUpperCase();
	var encrypted = "";
	for (var i = 0; i < UpperCase.length; i++){
    var ascii = UpperCase[i].charCodeAt();
    if (ascii >= 65 && ascii <= 90){
    	encrypted += String.fromCharCode(ascii + key);
    }else if (ascii >= 97 && ascii <= 122) {
        encrypted += String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
	}
	return encrypted;
}
