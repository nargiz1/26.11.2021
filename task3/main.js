"use strict"
let arr=[3,5,76,74,24,67,78];
let max=arr[0];
for(let element of arr){
    if(element>max){
        max=element;
    }
}
alert(max);