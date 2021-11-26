"use strict"
while(true){
    let num=prompt("Enter number: ");
    let multpl=1;
    for(let i=1; i<=num; i++){
        multpl*=i;
    }
    alert(multpl);
}