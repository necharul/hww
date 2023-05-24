let playerOneInput = document.querySelector(".playerOneInput")
let playerOneButton = document.querySelector(".playerOneButton")
let playerTwoInput = document.querySelector(".playerTwoInput")
let playerTwoButton = document.querySelector(".playerTwoButton")
let player = document.querySelector(".player")
let chance = document.querySelector(".chance")
let error = document.querySelector(".error")

let count = 5



playerOneButton.addEventListener("click",function(){

    if(!playerOneInput.value){
        error.innerHTML = "Please enter something"
    }else{

        if(!(playerOneInput.value-12)){
            error.innerHTML = "Please enter a number"
        }else{
            if(playerOneInput.value <= 10 && playerOneInput.value > 0){
                playerOneInput.style.display = "none"
                playerOneButton.style.display = "none"
                playerTwoInput.style.display = "inline-block"
                playerTwoButton.style.display = "inline-block"
                error.innerHTML = ""
                player.innerHTML = "Player 2"
                chance.style.display = "block"
                chance.innerHTML = `Chance: ${count}`
            }else{
                error.innerHTML ="Please enter number between 1 to 10"
            }
        }
    }

    

})


playerTwoButton.addEventListener("click",function(){
 

    if(count > 1){
        count--
        chance.innerHTML = `Chance: ${count}`
        if(playerOneInput.value == playerTwoInput.value){
            player.innerHTML = "Player 2 Winner"
            playerTwoButton.style.display = "none" 
        }
    }else{
        count=0
        chance.innerHTML = `Chance: ${count}`
        playerTwoButton.style.display = "none" 
        player.innerHTML = "Player 1 Winner"
    }

    
})


