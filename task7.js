
function range (a,b,c) {
    var ran = [];
        if (c == undefined || c == 0){
            var c = 1;
        };

        if (a < b && c > 0) {

            for (i=a; i<=b; i=i+c){
                ran.push(i);
            };
        }
        else if (a < b && c < 0){

            for (i=a; i<=b; i=i-c){
                ran.push(i);
            };
        }
        else if (a > b && c > 0) {

            for (i=a; i>=b; i=i-c){
                ran.push(i);
            };
        }
        else if (a > b && c < 0) {

            for (i=a; i>=b; i=i+c){
                ran.push(i);
            };
        };     
return ran;
}

function sum(x) {
    var a = 0;
    for (i = 0; i < x.length; i++) {
        a += x[i];
    }
    return a;
}

console.log(range(1,10, -1));
console.log(sum(range(1,10,-1)));