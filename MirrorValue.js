var mirrorValue = [];
for (let index = 0; index < 100; index++) {
    let numberToString = index.toString();
    if (numberToString.charAt(0) == numberToString.charAt(1)) {
        let StringToInteger = parseInt(numberToString);
        mirrorValue.push(StringToInteger)
    }

}
console.log(mirrorValue);