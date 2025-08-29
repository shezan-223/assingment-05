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
 let alertBtns= document.querySelectorAll(".alert-btn") ;
 let callHistory = document.getElementById("call-history") ;

 for(const btn of alertBtns ){
    btn.addEventListener('click', function(){
      
      

       
        if( coin < 20 ){
            alert('Not Enough Coin')
            return
            
        } 
         coin -= 20 ;
         coinNumbers.innerText =coin ;
      let card =btn.closest('.card')

      let serviceName = card.querySelector(".service-name").innerText;
        let serviceNumber = card.querySelector(".service-number").innerText;
        alert('service :' + serviceName)
        alert('Number :' + serviceNumber)
     

   
     
       const li = document.createElement("li");
    li.innerText = serviceName + " - " + serviceNumber;
    callHistory.appendChild(li);
    


        
         
         
         
   
         


        
        
    })
 }