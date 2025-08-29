// heart count 

let count = 0

let getHearts = document.querySelectorAll('.heart')
let heartNumber = document.getElementById('heart-number') ;
for(let heart of getHearts){
    heart.addEventListener('click',function(){
        count++
        heartNumber.innerText =count ;
    })
}
 
 
// call button 
let coin = 100 ;

let  coinNumbers = document.getElementById("coin-numbers") ;
 let alertBtn= document.querySelectorAll("alert-btn") ;
 let callHistory = document.getElementById("call-history") ;

