"use strict"
while(true){
    let num= prompt("Enter number: ");
    let arr=[];
    let j=0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            arr[j]=i;
            j++;
        }
    }
    alert(arr);
}