export function isPalindrome(inputString) {
    for (var i = 0; i < inputString.length / 2; i++) {
        if (inputString.charAt(i) !== InputString.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
