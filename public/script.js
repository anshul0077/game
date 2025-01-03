let userpick = document.querySelector("#user-Picked")
let cpuimg = document.querySelector(".cpuimg")
let userpimg=document.querySelector(".user-img")
let images = [
    { id: 0, iname: "scissor", src: "https://raw.githubusercontent.com/markteekman/rock-paper-scissors-game/58944aa93df3f58bfe876369f0576b4e025ae77e/public/icon-scissors.svg" },
    { id: 1, iname: "rock", src: "https://raw.githubusercontent.com/markteekman/rock-paper-scissors-game/58944aa93df3f58bfe876369f0576b4e025ae77e/public/icon-rock.svg" },
    { id: 2, iname: "paper", src: "https://raw.githubusercontent.com/markteekman/rock-paper-scissors-game/58944aa93df3f58bfe876369f0576b4e025ae77e/public/icon-paper.svg" },
]



let uid = document.querySelector(".user-image-div")
uid.addEventListener('click', (e) => {

    mapping(e)
    let randumNum = Math.floor(Math.random() * 3)
    console.log(randumNum);
    if (e.target.parentElement.tagName === "BUTTON") {

        console.log(e.target.parentElement.getAttribute("id"))
        console.log("userchooses =");
        randomImgae(randumNum)
        userpick.style.display="flex"
         console.log("this is the id of clicked image",e.target.parentElement.getAttribute("id"));
       
            
         console.log( images[e.target.parentElement.getAttribute("id")].src)
         console.log(userpimg.src=( images[e.target.parentElement.getAttribute("id")].src));
         

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


function mapping (e){


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
    setTimeout(() => {
        resetmsg.style.display = 'block'

    }, 100)
    setTimeout(() => {
        resetmsg.style.display = 'none'

    }, 2000)
    userCounter.innerHTML = 0
    cpuCounter.innerHTML = 0
}

//footer func completed








