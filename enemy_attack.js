let alredyEnemyHit = []
let oftenCells = [33, 34, 35, 43, 44, 45, 53, 54, 55, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 90, 91, 92, 93, 94, 95, 96, 97, 98, 24, 34, 44, 54, 64, 74, 84, 0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, 28, 31, 33, 35, 37, 39]
let priority3 = []
let priority4 = []
// let oftenCells = [24] 
let lastShot


function enemyShot(){
    if (gameRun){
        if(priority4.length > 0){
            let randomNumber
            randomNumber = Math.floor(Math.random() * priority4.length);
            makeShot(priority4[randomNumber])
        }
        else if(priority3.length > 0){
            let randomNumber
            randomNumber = Math.floor(Math.random() * priority3.length);
            makeShot(priority3[randomNumber])
        } 
        else if(oftenCells.length > 0){
            let randomNumber
            randomNumber = Math.floor(Math.random() * oftenCells.length);
            makeShot(oftenCells[randomNumber])
        }
        else{
            let randomNumber 
            
            while (true) {
                randomNumber = Math.floor(Math.random() * 100);
                if(!alredyEnemyHit.includes(randomNumber)){
                    makeShot(randomNumber)
                
                    break
                }

            }
            

            
        }
    }
}

function makeShot (index){
    // console.log('4 PRIORITY',priority4)
    console.log('3 PRIORITY',priority3)
    let allCells = document.querySelectorAll('.friendlyShip')
    let currentCell = allCells[index]
    let successShot = false
    // currentCell.style.background = "black"
    alredyEnemyHit.push(index)


    

    for(let ship of shipPositionForAtack) {
    if(ship[2].includes(index)){
        ship[1] += 1
        successShot  = true
        countHitsBot += 1
        if(countHitsBot == 20){
            gameRun = false
            let winScreen = document.querySelector(".loseScreen")
            winScreen.style.display = "flex"
            setTimeout(() => {
                winScreen.classList.toggle('activebg')
            }, 1);
          

        }
        
        if(ship[2].length == ship[1]){
            priority3 = []
            for(let position of ship[2]){
                console.log(position)
                if( position > 9){
                    if(!alredyEnemyHit.includes(position - 10)){
                        alredyEnemyHit.push(position - 10)
                        // allCells[position - 10].style.background = "yellow"
                        console.log("TOP")
                    }
                    if( position % 10 != 0){
                        if(!alredyEnemyHit.includes(position - 11)){
                            alredyEnemyHit.push(position - 11)
                            // allCells[position - 11].style.background = "yellow"
                            console.log("TOP LEFT")
                        }
                    }
                    if( (position + 1) % 10 != 0){
                        if(!alredyEnemyHit.includes(position - 9)){
                            alredyEnemyHit.push(position - 9)
                            // allCells[position - 9].style.background = "yellow"
                            console.log("TOP RIGHT")
                        }
                    }
                }
                if( position < 90){
                    if(!alredyEnemyHit.includes(position + 10)){
                        alredyEnemyHit.push(position + 10)
                        // allCells[position + 10].style.background = "yellow"
                        console.log("BOTTOM")
                    }
                    if( position % 10 != 0){
                        if(!alredyEnemyHit.includes(position + 9)){
                            alredyEnemyHit.push(position + 9)
                            // allCells[position + 9].style.background = "yellow"
                            console.log("BOTTOM LEFT")
                        }
                    }
                    if( (position + 1) % 10 != 0){
                        if(!alredyEnemyHit.includes(position + 11)){
                            alredyEnemyHit.push(position + 11)
                            // allCells[position + 11].style.background = "yellow"
                            console.log("BOTTOM RIGHT")
                        }
                    }
                }
                if( position % 10 != 0){
                    if(!alredyEnemyHit.includes(position - 1)){
                        alredyEnemyHit.push(position - 1)
                        // allCells[position - 1].style.background = "yellow"
                        console.log("LEFT")
                    }
                }
                if( (position + 1) % 10 != 0){
                    if(!alredyEnemyHit.includes(position + 1)){
                        alredyEnemyHit.push(position + 1)
                        // allCells[position + 1].style.background = "yellow"
                        console.log("RIGHT")
                    }
                }
            }
        }
        else if (ship[2].length != 1){
            if (priority3.length == 0 && priority4.length == 0){
                lastShot = index
                if (index % 10 != 0){
                    if (!alredyEnemyHit.includes(index - 1)){
                        priority3.push(index - 1)
                    }
                }
                if( index > 9){
                    if (!alredyEnemyHit.includes(index - 10)){
                        priority3.push(index - 10)
                    }
                }
                if ((index + 1) % 10 != 0){
                    if (!alredyEnemyHit.includes(index + 1)){
                        priority3.push(index + 1)
                    }
                }
                if( index < 90){
                    if (!alredyEnemyHit.includes(index + 10)){
                        priority3.push(index + 10)
                    }
                }
            } else if (priority4.length == 0){
                priority3 = []

                if(ship[3] == 'v'){
        
                    if (index < lastShot){
                        if( index > 9){
                            if (!alredyEnemyHit.includes(index - 10)){
                                priority4.push(index - 10)
                            }
                        }
                        if( index < 80){
                            if (!alredyEnemyHit.includes(index + 20)){
                                priority4.push(index + 20)
                            }
                        }
                    }
                    if (index > lastShot){
                        // console.log(4)
                        if( index > 19){
                            if (!alredyEnemyHit.includes(index - 20)){
                                priority4.push(index - 20)
                            }
                        }
                        if( index < 90){
                            if (!alredyEnemyHit.includes(index + 10)){
                                priority4.push(index + 10)
                            }
                        }
                    }
                }
                if(ship[3] == 'h'){
                    if(index > lastShot){
                        if ((index + 1) % 10 != 0){
                            if(!alredyEnemyHit.includes(index + 1)){
                                priority4.push(index + 1)
                            }
                        }
                        if ((index - 2) % 10 != 0){
                            if(!alredyEnemyHit.includes(index - 2)){
                                priority4.push(index - 2)
                            }
                        }
                    }
                    if(index < lastShot){
                        if ((index + 2) % 10 != 0){
                            if(!alredyEnemyHit.includes(index + 2)){
                                priority4.push(index + 2)
                            }
                        }
                        if ((index - 1) % 10 != 0){
                            if(!alredyEnemyHit.includes(index - 1)){
                                priority4.push(index - 1)
                            }
                        }
                    }
                }
            } else {
                if (ship[3] == 'h'){
                    if(index > lastShot){
                        if ((index + 1) % 10 != 0){
                            priority4.push(index + 1)
                        }
                    }
                    else{
                        if (index % 10 !=0){
                            priority4.push(index - 1)
                        }
                    }
                }else{
                    if (index > lastShot){
                        if (index < 90){
                            priority4.push(index + 10)
                            

                        }else{
                            if(index > 9){
                                priority4.push(index - 10)

                            }
                        }
                        
                        
                    }
                }
            }
        }
    }   
   let oftenCellsIndex = 0  
   for (let cell of oftenCells){
        if (alredyEnemyHit.includes(cell)){
            oftenCells.splice(oftenCellsIndex, 1)
        }    
        oftenCellsIndex += 1
    }   
    oftenCellsIndex = 0  
    for (let cell of oftenCells){
        if (cell == index){
            oftenCells.splice(oftenCellsIndex, 1)
        }    
        oftenCellsIndex += 1
    }     
    let priority3Index = 0  
    for (let cell of priority3){
        if (cell == index){
            priority3.splice(priority3Index, 1)
        }    
        priority3Index += 1
    }     
    let priority4Index = 0  
    for (let cell of priority4){
        if (cell == index){
            priority4.splice(priority4Index, 1)
        }    
        priority4Index += 1
    }     
}
if (!successShot){
    let missImage = document.createElement('img')
    missImage.className = 'gif'
    missImage.src ='images/miss.png'
    missImage.style.height = '25px'
    missImage.style.width = '25px'
    currentCell.appendChild(missImage)
}else{
    let hitImage = document.createElement('img')
    hitImage.className = 'gif'
    hitImage.src = 'images/hit_enemy.png'
    hitImage.style.height = '50px'
    hitImage.style.width = '50px'
    hitImage.style.zIndex = '1000000000'
    currentCell.appendChild(hitImage)
}
}
// enemyShot()