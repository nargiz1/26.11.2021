"use strict"
let crAmount=prompt("Enter loan:");
let months=prompt("Enter months:")
let monthArr=[];
monthArr.length=months;
amountPerMonth(crAmount, months);

function amountPerMonth(crAmount, months){
    let amountPerMonth;
    amountPerMonth=crAmount/months;
    if(crAmount%months==0){
        for(let i=0; i<monthArr.length; i++){
            monthArr[i]=amountPerMonth;
        }
    }
    else{
        for(let i=0; i<(monthArr.length-1); i++){
            monthArr[i]=amountPerMonth;
        }
        monthArr[monthArr.length-1]=amountPerMonth+(crAmount%months);
    }
    for(let j=1; j<=monthArr.length; j++){
        console.log("Month "+j+": "+ Math.round(monthArr[j-1]));
    }
}