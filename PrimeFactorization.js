var read = require("readline-sync");
var num = read.questionInt("Enter the no.");
var Array = [];
for (i = 2; i <= num; i++) {
    while (num % i == 0) {
        Array.push(i);
        num = num / i;
    }
}
console.log("Prime Factorization Array " +Array);