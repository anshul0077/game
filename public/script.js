let  userCounter=document.querySelector("#user-counter")
let cpuCounter=document.querySelector("#CPU-counter")
let nav=document.querySelector(".nav")
// nav ref
let rulesBtn=document.querySelector("#Rulesbtn")
let resetBtn=document.querySelector("#Resetbtn")
let rulesDiv=document.querySelector(".rules")
const newLocal = ""
let resetmsg=document.querySelector(".resetmsg")
//footer ref
let main=document.querySelector(".main")

//main
function rulesdivfxn(){
    let flag=0
    rulesBtn.addEventListener('click',()=>{
        if(flag==0){
        rulesDiv.style.display="block"
        nav.style.filter="blur(10px)"
        main.style.filter="blur(10px)"
    flag=1
       }
    else{
        rulesDiv.style.display="none"
        nav.style.filter="blur(0px)"
        main.style.filter="blur(0px)"
flag=0
    }
    })
    
}
rulesdivfxn()
resetBtn.addEventListener('click',resetscore)
function resetscore(){
setTimeout(()=>{
resetmsg.style.display='block'

},100)
setTimeout(()=>{
    resetmsg.style.display='none'

},2000)
userCounter.innerHTML=0
cpuCounter.innerHTML=0
}

//footer func completed





