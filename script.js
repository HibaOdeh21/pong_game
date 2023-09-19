import Ball from "./ball.js"
import Ball from "./Paddle.js"
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new paddle (document.getElementById("player-paddle"))
const computerPaddle = new paddle (document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

let lastTime
function update(time){
    if(lastTime!=null){
        const delta = time - lastTime
        ball.update(delta,[playerPaddle.rect(),computerPaddle.rect()])
        computerPaddle=update(delta. ball.y)
          if (isLose()) handdleLose()
    }

    lastTime=time
    window.requestAnimationFrame(update)
}

function isLose(){
    const rect = ball.rect
    return rect.right >= window.innerHeight || rect.left <=0
        
    
}
function handdleLose(){
    const rect = ball.rect
    if(rect.right>=window.innerWidth){
        playerScoreElem.textContent =parseInt(playerScoreElem.textContent)+1
    } else{
        computerScoreElem.textContent =parseInt(computerScoreElem.textContent)+1
    }
 ball.reset()
 computerPaddle.reset()
}
document.addEventListener("mousemove",e =>{
    playerPaddle.position=(e.y/window.innerHeight)*100
})
window.requestAnimationFrame(update)