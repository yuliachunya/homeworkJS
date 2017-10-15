var size = 8;
var desk = " ";
var symbol = "#";
for (var a = 0; a < size; a++) {
    for (var b = 0; b < size; b++) {
        if
        ((a+b)% 2 === 0)
        desk += " ";
        else (desk += "#");
    }
    desk += "\n";
}
console.log(desk);