
// console.log(enemyShips) 
let shotCells = []

let gameRun = false
let countHitsPlayer = 0
let countHitsBot = 0

let step = 'player'
//функция атаки вражеского поля

let shipPositionForAtack = []
// console.log(shipPositon)
function startGame(){
    // console.log(shipPositon)
    gameRun = true
    startGameButton.style.display = "none"
    for(let ship of shipPositon){
        let cords = []
        if (ship[0] == 3){
            if (ship[2] == 'h'){
                cords = [
                    Number(ship[1]), 
                    Number(ship[1]) + 1, 
                    Number(ship[1]) + 2]
            } else{
                cords = [
                    Number(ship[1]), 
                    Number(ship[1]) + 10, 
                    Number(ship[1]) + 20]
            }
        } else if (ship[0] == 4){
            if (ship[2] == 'h'){
                cords = [
                    Number(ship[1]), 
                    Number(ship[1]) + 1, 
                    Number(ship[1]) + 2,
                    Number(ship[1]) + 3,]
            } else{
                cords = [
                    Number(ship[1]), 
                    Number(ship[1]) + 10, 
                    Number(ship[1]) + 20,
                    Number(ship[1]) + 30,]
            }
        } else if (ship[0] == 2){
            if (ship[2] == 'h'){
                cords = [
                    Number(ship[1]), 
                    Number(ship[1]) + 1]
            } else{
                cords = [
                    Number(ship[1]), 
                    Number(ship[1]) + 10]
            }
        } else if (ship[0] == 1){
            if (ship[2] == 'h'){
                cords = [
                    Number(ship[1])]
            } else{
                cords = [
                    Number(ship[1])]
            }
        }
        shipPositionForAtack.push([ship[3],0,cords,ship[2]])
    }
    // console.log()

    // console.log(shipPositon)
    // for (let i = 0; i < 40; i++){
    //     setTimeout(() => {
    //         enemyShot()
    //     }, 1000 * i);
    // }
    
}

startGameButton.addEventListener('click', startGame)

function attack(event){
    if (gameRun && step == 'player'){
        
    
    let block = event.target
    let blockId = Number(block.id.split('-')[1])
    if(!shotCells.includes(blockId)){
        if(block.classList.contains('friendlyShip')){
            // console.log('friend')
        } else{
            // console.log(event.target)
            let gif = document.createElement("img")
            let hit
            gif.className = 'gif'
            gif.src = 'images/1.gif'
            gif.style.width = '150px'
            gif.style.height ='150px'
            block.appendChild(gif)
            shotCells.push(blockId)
            step = 'bot'
            setTimeout(() => {
                gif.remove()
                // console.log(enemyShips)
                hit  = false
                for(let shippoint of enemyShips){
                        
                        let shipPointIndex = 0
                        // console.log(shippoint[0])
                        for(let ship of shippoint[0]){
                            if(ship == blockId){
                                console.log(shippoint[1].includes(false))
                                // shippoint.splice(shipPointIndex, 1)
                                let idx = 0
                                for (let shipStatus of shippoint[1]){
                                    // console.log(1)
                
                                    if(shipStatus == false){
                                        shippoint[1][idx] = true
                                        console.log(2)
                                        break
                                    }
                                    idx += 1
                                }
                                if(shippoint[1].includes(false)){
                                    hit = true
                                    let hitImg = document.createElement("img")
                                    hitImg.className = 'gif'
                                    hitImg.src = 'images/hit.png'
                                    hitImg.style.width = '40px'
                                    hitImg.style.height ='40px'
                                    block.appendChild(hitImg)
                                    
                                } else{
                                 for(let deck of shippoint[0]){
                                    let deckShip = document.querySelector(`#enemy-${deck}`)
                                    deckShip.style.background = 'rgb(93, 0, 0)'
                                 } 
                                 let hitImg = document.createElement("img")
                                    hitImg.className = 'gif'
                                    hitImg.src = 'images/hit.png'
                                    hitImg.style.width = '40px'
                                    hitImg.style.height ='40px'
                                    block.appendChild(hitImg)
                                    hit = true
                                }
                            }
                            shipPointIndex += 1
                        }
                        
                        // console.log(enemyShips)
                }
                
                
            if(!hit){
                let hitImg = document.createElement("img")
                
                hitImg.className = 'gif'
                hitImg.src = 'images/miss.png'
                hitImg.style.width = '25px'
                hitImg.style.height ='25px'
                block.appendChild(hitImg)
            } else{
                countHitsPlayer += 1
                if(countHitsPlayer == 20){
                    gameRun = false
                let winScreen = document.querySelector(".winScreen")
                winScreen.style.display = "flex"
                setTimeout(() => {
                    winScreen.classList.toggle('activebg')
                }, 1);
              
                }
            }
            enemyShot()
            step = 'player'
            }, 500);
        }
    }
}
}

// задаем событие нажатия на ячейку вражеского поля для атаки
for (let ship of shipPlace){
    ship.addEventListener('click', attack)
}
