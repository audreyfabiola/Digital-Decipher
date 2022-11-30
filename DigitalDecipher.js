function digitalDecipher(eMessage, key) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var result = ""
    var splitting = key.toString().split("") 

    for(var i = 0; i < eMessage.length; i+=1){
        result += alphabet[eMessage[i] - 1 - splitting[i % splitting.length]];
}

return result;

}
console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));