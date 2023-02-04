




let elInp = document.querySelector('.inp')
let elBtn = document.querySelector('.btn')
//////////////////////////
let sec = document.querySelector('.secunt')
let soh = document.querySelector('.sohat')
let min= document.querySelector('.minut')
function pas(){
    text2.innerHTML = Number(text2.innerHTML)-1
     setTimeout("text1()",1000)
}



function ayrish(){
 if(soh.textContent != 0){
    sec.textContent = Number(sec.textContent)-1
    setTimeout("ayrish()",1000)
 }
}

elBtn.addEventListener('click', ()=>{
   sec.textContent= 1
   setTimeout(()=>{
      sec.textContent= 60
   },1000)
   /////////////////
   let a= Math.trunc(Math.floor(elInp.value) / 60)
   let b= elInp.value%60
   soh.innerHTML = a
   let clear = setTimeout(()=>{
      min.textContent = b
   },1000)
   clearTimeout(clear)
    
      min.textContent = b -1
   
   ee()

  ayrish()

    

    



   ///////////////////
   function ee(){
      if(a<10){
         soh.innerHTML = '0' + a
         }
         else{
          soh.innerHTML = a 
         }
   }
   //////////////////////

  
})
