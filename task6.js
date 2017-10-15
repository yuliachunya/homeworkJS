function countChar(x,y) {
    var string = x;
    var n = 0;
        for (i=0; i < (string.length); i++) {
            if (string.charAt(i) == y) {
                n +=1;
                console.log(string.charAt(i));
            }
            else
                console.log(false);
            }
    return n;
}

console.log(countChar('abc', 'b'));