function checkPalindrome(palindrome) {    
    var x = palindrome.length;
    for (var i = 0; i < x / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
