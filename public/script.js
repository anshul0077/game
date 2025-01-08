
let userpick = document.querySelector("#user-Picked")
let cpuimg = document.querySelector(".cpuimg")
let display = document.querySelector(".display")
let userpimg = document.querySelector(".user-img")

let cpoints=0
let upoints=0
let pointdis = document.querySelector(".point-text")
let images = [
    { id: 0, iname: "scissor", src: "https://raw.githubusercontent.com/markteekman/rock-paper-scissors-game/58944aa93df3f58bfe876369f0576b4e025ae77e/public/icon-scissors.svg" },
    { id: 1, iname: "rock", src: "https://raw.githubusercontent.com/markteekman/rock-paper-scissors-game/58944aa93df3f58bfe876369f0576b4e025ae77e/public/icon-rock.svg" },
    { id: 2, iname: "paper", src: "https://raw.githubusercontent.com/markteekman/rock-paper-scissors-game/58944aa93df3f58bfe876369f0576b4e025ae77e/public/icon-paper.svg" },
]


let randumNum
let uid = document.querySelector(".user-image-div")
uid.addEventListener('click', (e) => {


    randumNum = Math.floor(Math.random() * 3)
    console.log(randumNum);
    if (e.target.parentElement.tagName === "BUTTON") {
        display.style.display = "flex"
        
        logic(e)
        renderfirst()

        console.log(e.target.parentElement.getAttribute("id"))
        console.log("userchooses =");
        randomImgae(randumNum)
        userpick.style.display = "flex"
        console.log("this is the id of clicked image", e.target.parentElement.getAttribute("id"));


        console.log(images[e.target.parentElement.getAttribute("id")].src)
        userpimg.src = (images[e.target.parentElement.getAttribute("id")].src)


    }

})
function randomImgae(randumNum) {
    if (randumNum == 0) {
        console.log(images[0].iname)
        cpuimg.src = images[0].src
    }
    else if (randumNum == 1) {
        console.log(images[1].iname)
        cpuimg.src = images[1].src
    }
    else if (randumNum == 2) {
        console.log(images[2].iname)
        cpuimg.src = images[2].src

    }

}




//assets
let userCounter = document.querySelector("#user-counter")
let cpuCounter = document.querySelector("#CPU-counter")
let nav = document.querySelector(".nav")
// nav ref
let rulesBtn = document.querySelector("#Rulesbtn")
let resetBtn = document.querySelector("#Resetbtn")
let rulesDiv = document.querySelector(".rules")

let resetmsg = document.querySelector(".resetmsg")
//footer ref
let main = document.querySelector(".main")
//main
function rulesdivfxn() {
    let flag = 0
    rulesBtn.addEventListener('click', () => {
        if (flag == 0) {
            rulesDiv.style.display = "block"
            nav.style.filter = "blur(10px)"
            main.style.filter = "blur(10px)"
            flag = 1
        }
        else {
            rulesDiv.style.display = "none"
            nav.style.filter = "blur(0px)"
            main.style.filter = "blur(0px)"
            flag = 0
        }
    })

}
rulesdivfxn()
resetBtn.addEventListener('click', resetscore)
function resetscore() {
    display.style.display="none"
    userpick.style.display="none"
    cpuimg.src=""
    
    setTimeout(() => {
        resetmsg.style.display = 'block'

    }, 100)
    setTimeout(() => {
        resetmsg.style.display = 'none'

    }, 2000)
    cpoints=0
upoints=0
    cpuCounter.innerHTML=cpoints
    userCounter.innerHTML=upoints

}

//footer func completed

/////////////////////////////////////////////////     THE MAIN LOGIC   //////////////////////////////////////////////////////////////////

function logic(event) {
    if (event.target.parentElement.getAttribute("id") == randumNum) {
          
            pointdis.style.color="white"
        pointdis.innerHTML = "DRAW"
    }
    // if((parseInt(cpuCounter.innerHTML))==20){
    //     console.log("THe CPU WINS THE GAME");
        
    //    }

    else if (event.target.parentElement.getAttribute("id") == 0) {
        if (randumNum == 1) {
            pointdis.innerHTML="CPU WIN"
            pointdis.style.color="red"
            cpuCounter.innerHTML=cpoints+=1
            console.log("cpu win");
            console.log("user loose");


        }
        else {
            pointdis.innerHTML="USER WIN"
            pointdis.style.color="yellow"
            userCounter.innerHTML=upoints+=1

            console.log("user win ");
            console.log("cpu loose");
            

        }

    }
    else if(event.target.parentElement.getAttribute("id") == 1){
        if(randumNum==0){
                    pointdis.innerHTML="USER WIN"
            pointdis.style.color="yellow"
            userCounter.innerHTML=upoints+=1

        console.log("user  win");
        console.log("cpu loose");

        
        }
        else{
              pointdis.innerHTML="CPU WIN"
            pointdis.style.color="red"
            cpuCounter.innerHTML=cpoints+=1



          console.log("cpu win ");
          console.log("user loose");

          
        }

    }
    else if(event.target.parentElement.getAttribute("id") == 2){
        if(randumNum==1){
                    pointdis.innerHTML="USER WIN"
            pointdis.style.color="yellow"
            userCounter.innerHTML=upoints+=1

            console.log("user  win");
            console.log("cpu loose");

            
            }
            else{
                  pointdis.innerHTML="CPU WIN"
            pointdis.style.color="red"
            cpuCounter.innerHTML=cpoints+=1



                console.log("cpu win");
                
              console.log("user loose");
              
            }
    }

  // 0== scissor
    //1==rock
    //2==paper






}

let dis=document.querySelector(".description")
function playagain(){
 dis.addEventListener('click',e=>{
    if(e.target.tagName=="BUTTON"){
   resetscore()
   dis.style.display="none"
   nav.style.filter = ""
            main.style.filter = ""
        
    }
 })
}
playagain()

function  renderfirst(){
    if(parseInt(cpuCounter.innerHTML)==20){
        // alert("cpu win the game")
          dis.style.display="flex"
          dis.innerHTML=`<p class="text-red-500">CPU</p>&nbsp; win the game  <br><br>  <button
      class="playbtn rounded-sm  shadow-lg shadow-black   py-2 text-blue-800 font-bold w-40 tracking-widest px-5 text-sm bg-white">
      PLAY AGAIN
    </button>`
           nav.style.filter = "blur(10px)"
            main.style.filter = "blur(10px)"
             
        
    }
    if(parseInt(userCounter.innerHTML)==20){
        // alert("user win the game")
        dis.style.display="flex"
        dis.innerHTML=`<p class="text-yellow-500">USER</p>&nbsp; win the game  <br><br>  <button
      class="playbtn rounded-sm  shadow-lg shadow-black   py-2 text-blue-800 font-bold w-40 tracking-widest px-5 text-sm bg-white">
      PLAY AGAIN
    </button>`
         nav.style.filter = "blur(10px)"
            main.style.filter = "blur(10px)"
            
                        
    }
}
