var Array = [];
let p = Math.floor(Math.random()*1000);
Array.push(p)
let max1 = p;
let small1 = p;
let r = 0 ;
let k = 0 ;
for(i=0;i<10;i++){
    let m = Math.floor(Math.random()*1000);
    Array.push(m);//entering data in array
    if(Array[i]>max1){
        r = max1;
        max1 = Array[i];
        
    }else if(r<Array[i]){
         r = Array[i];
        
    }else if(Array[i]<small1){
        k = small1;
        small1 = Array[i];
        
    }else if(k>Array[i]){
        k = Array[i];
    }     
}    
console.log(Array);
console.log("Largest Element: "+max1);
console.log("Second Largest Element: "+r);
console.log("Smallest Element: "+small1);
console.log("Second Smallest Element: "+k);
