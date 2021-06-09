var Array = [];
for(let i= 0;i<10;i++){
    let m = Math.floor(Math.random()*1000);
    Array.push(m);
}
n = Array.length;
Array.sort()
console.log(Array);
console.log("Largest Element: "+Array[n-1]);
console.log("Second Largest Element: "+Array[n-2]);
console.log("Smallest Element: "+Array[0]);
console.log("Second Smallest Element: "+Array[1]);
