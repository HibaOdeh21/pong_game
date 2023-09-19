import Ball from "./ball.js"
import Ball from "./Paddle.js"
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new paddle (document.getElementById("player-paddle"))
const computerPaddle = new paddle (document.getElementById("computer-paddle"))

let lastTime
function update(time){
    if(lastTime!=null){
        const delta = time - lastTime
        ball.update(delta)
        computerPaddle=update(delta. ball.y)

    }

    lastTime=time
    window.requestAnimationFrame(update)
}

document.addEventListener("mousemove",e =>{
    playerPaddle.position=(e.y/window.innerHeight)*100
})
window.requestAnimationFrame(update)