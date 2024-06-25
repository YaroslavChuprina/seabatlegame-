// Получение контейнеров для создания полей
let pole_div = document.querySelectorAll('.pole_div')

let shipPlace
// массив которий отвечает за хранения мест где поставлени корабли
let shipPositon = []
let startGameButton = document.querySelector('#startgame')
startGameButton.style.display = 'none'
let lastActive

let countShips = 0


// генерация поля для короблей
for(let pole of pole_div){
    let indexElement = 0
    for(let row = 1; row <= 10; row++){
        indexElement -= 1
        let rowElement = document.createElement("div")
        rowElement.classList.add("row")
        for (let cell = 1; cell <= 11; cell++){
            let cellElement = document.createElement("p")  
            if(cell == 1){
                cellElement.textContent = row
            } else{
        
                if (pole.classList.contains('my_pole')){
                    cellElement.classList.add('friendlyShip')
                    cellElement.id = indexElement
                } else{
                    cellElement.id = `enemy-${indexElement}`
                }
                cellElement.classList.add("shipPlace")
            }
            rowElement.appendChild(cellElement)   
            indexElement += 1
        }
        pole.appendChild(rowElement)
    }
    shipPlace = document.querySelectorAll('.shipPlace')
}      



let ships = document.querySelectorAll(".ship")

//функция для перетаскивания кораблей
function moveShip(event){
    if (!gameRun ){
    // получения масива клеток в которие можна поставить корабель
    let cells = document.querySelectorAll('.friendlyShip')
    lastActive = document.querySelectorAll('.active')
    for (let cell of cells){
        cell.classList.remove("active")
    }
    // получение корабля который перетаскиваем
    let curentShip = event.target
    // проверка что корабль стоит на поле
    if(curentShip.classList.contains('shipstay')){
        countShips -= 1
        startGameButton.style.display = 'none'
        curentShip.classList.remove('shipstay')
        for(let pos of shipPositon){
            if(pos[3] == curentShip.id){
                pos[3] = -1000000
                for(let i = 0; i < pos[0]; i++){
                    let cellid
                    
                    if(curentShip.classList.contains('horizontalShip')){
                        cellid = Number(pos[1]) + i
                    } else{
                        cellid = Number(pos[1]) + i * 10
                    }
                    if(cells[cellid].classList.contains('countshipsconnect1')){
                        cells[cellid].classList.remove('shipplacebaned')
                        cells[cellid].classList.remove('countshipsconnect1')
                    } else if(cells[cellid].classList.contains('countshipsconnect2')){
                        cells[cellid].classList.remove('countshipsconnect2')
                        cells[cellid].classList.add('countshipsconnect1')
                    } else if(cells[cellid].classList.contains('countshipsconnect3')){
                        cells[cellid].classList.remove('countshipsconnect3')
                        cells[cellid].classList.add('countshipsconnect2')
                    } else if(cells[cellid].classList.contains('countshipsconnect4')){
                        cells[cellid].classList.remove('countshipsconnect4')
                        cells[cellid].classList.add('countshipsconnect3')
                    }
                    else{
                        cells[cellid].classList.remove('shipplacebaned') 
                    }
                    
                    if((cellid + 1) % 10 != 0){
                        if(cells[cellid+1].classList.contains('countshipsconnect1')){
                            cells[cellid + 1].classList.remove('shipplacebaned')
                            cells[cellid].classList.remove('countshipsconnect1')
                        } else if(cells[cellid + 1].classList.contains('countshipsconnect2')){
                            cells[cellid + 1].classList.remove('countshipsconnect2')
                            cells[cellid + 1].classList.add('countshipsconnect1')
                        } else if(cells[cellid + 1].classList.contains('countshipsconnect3')){
                            cells[cellid + 1].classList.remove('countshipsconnect3')
                            cells[cellid + 1].classList.add('countshipsconnect2')
                        } else if(cells[cellid + 1].classList.contains('countshipsconnect4')){
                            cells[cellid + 1].classList.remove('countshipsconnect4')
                            cells[cellid + 1].classList.add('countshipsconnect3')
                        }
                        else{
                            cells[cellid + 1].classList.remove('shipplacebaned') 
                        }
                        
                    }
                    if(cellid % 10 != 0){
                        if(cells[cellid - 1].classList.contains('countshipsconnect1')){
                            cells[cellid - 1].classList.remove('shipplacebaned')
                            cells[cellid].classList.remove('countshipsconnect1')
                        } else if(cells[cellid - 1].classList.contains('countshipsconnect2')){
                            cells[cellid - 1].classList.remove('countshipsconnect2')
                            cells[cellid - 1].classList.add('countshipsconnect1')
                        } else if(cells[cellid - 1].classList.contains('countshipsconnect3')){
                            cells[cellid - 1].classList.remove('countshipsconnect3')
                            cells[cellid - 1].classList.add('countshipsconnect2')
                        } else if(cells[cellid - 1].classList.contains('countshipsconnect4')){
                            cells[cellid - 1].classList.remove('countshipsconnect4')
                            cells[cellid - 1].classList.add('countshipsconnect3')
                        }
                        else{
                            cells[cellid - 1].classList.remove('shipplacebaned') 
                        }
                        
                    }
        
                    if(cellid < 90){
                        if(cells[cellid+10].classList.contains('countshipsconnect1')){
                            cells[cellid + 10].classList.remove('shipplacebaned')
                            cells[cellid].classList.remove('countshipsconnect1')
                        } else if(cells[cellid + 10].classList.contains('countshipsconnect2')){
                            cells[cellid + 10].classList.remove('countshipsconnect2')
                            cells[cellid + 10].classList.add('countshipsconnect1')
                        } else if(cells[cellid + 10].classList.contains('countshipsconnect3')){
                            cells[cellid + 10].classList.remove('countshipsconnect3')
                            cells[cellid + 10].classList.add('countshipsconnect2')
                        } else if(cells[cellid + 10].classList.contains('countshipsconnect4')){
                            cells[cellid + 10].classList.remove('countshipsconnect4')
                            cells[cellid + 10].classList.add('countshipsconnect3')
                        }
                        else{
                            cells[cellid + 10].classList.remove('shipplacebaned') 
                        }
                        
                        if(cellid % 10 != 0){
                            if(cells[cellid+9].classList.contains('countshipsconnect1')){
                                cells[cellid + 9].classList.remove('shipplacebaned')
                                cells[cellid].classList.remove('countshipsconnect1')
                            } else if(cells[cellid + 9].classList.contains('countshipsconnect2')){
                                cells[cellid + 9].classList.remove('countshipsconnect2')
                                cells[cellid + 1].classList.add('countshipsconnect1')
                            } else if(cells[cellid + 9].classList.contains('countshipsconnect3')){
                                cells[cellid + 9].classList.remove('countshipsconnect3')
                                cells[cellid + 9].classList.add('countshipsconnect2')
                            } else if(cells[cellid + 9].classList.contains('countshipsconnect4')){
                                cells[cellid + 9].classList.remove('countshipsconnect4')
                                cells[cellid + 9].classList.add('countshipsconnect3')
                            }
                            else{
                                cells[cellid + 9].classList.remove('shipplacebaned') 
                            }
                            
                        }
                        if((cellid + 1) % 10 != 0){
                            if(cells[cellid + 11].classList.contains('countshipsconnect1')){
                                cells[cellid].classList.remove('countshipsconnect1')
                                cells[cellid + 11].classList.remove('shipplacebaned')
                            } else if(cells[cellid + 11].classList.contains('countshipsconnect2')){
                                
                                cells[cellid + 11].classList.remove('countshipsconnect2')
                                cells[cellid + 11].classList.add('countshipsconnect1')
                            } else if(cells[cellid + 11].classList.contains('countshipsconnect3')){
                                cells[cellid + 11].classList.remove('countshipsconnect3')
                                cells[cellid + 11].classList.add('countshipsconnect2')
                            } else if(cells[cellid + 11].classList.contains('countshipsconnect4')){
                                cells[cellid + 11].classList.remove('countshipsconnect4')
                                cells[cellid + 11].classList.add('countshipsconnect3')
                            }
                            else{
                                cells[cellid + 11].classList.remove('shipplacebaned') 
                            }
                            
                        }
                    }
        
                    if(cellid > 9){
                        if(cells[cellid - 10].classList.contains('countshipsconnect1')){
                            cells[cellid].classList.remove('countshipsconnect1')
                            cells[cellid - 10].classList.remove('shipplacebaned')
                        } else if(cells[cellid - 10].classList.contains('countshipsconnect2')){
                            cells[cellid - 10].classList.remove('countshipsconnect2')
                            cells[cellid - 10].classList.add('countshipsconnect1')
                        } else if(cells[cellid - 10].classList.contains('countshipsconnect3')){
                            cells[cellid - 10].classList.remove('countshipsconnect3')
                            cells[cellid - 10].classList.add('countshipsconnect2')
                        } else if(cells[cellid - 10].classList.contains('countshipsconnect4')){
                            cells[cellid - 10].classList.remove('countshipsconnect4')
                            cells[cellid - 10].classList.add('countshipsconnect3')
                        }
                        else{
                            cells[cellid - 10].classList.remove('shipplacebaned') 
                        }
                        
                        if((cellid + 1) % 10 != 0){
                            if(cells[cellid - 9].classList.contains('countshipsconnect1')){
                                cells[cellid - 9].classList.remove('shipplacebaned')
                                cells[cellid].classList.remove('countshipsconnect1')
                            } else if(cells[cellid - 9].classList.contains('countshipsconnect2')){
                                cells[cellid - 9].classList.remove('countshipsconnect2')
                                cells[cellid - 9].classList.add('countshipsconnect1')
                            } else if(cells[cellid - 9].classList.contains('countshipsconnect3')){
                                cells[cellid - 9].classList.remove('countshipsconnect3')
                                cells[cellid - 9].classList.add('countshipsconnect2')
                            } else if(cells[cellid - 9].classList.contains('countshipsconnect4')){
                                cells[cellid - 9].classList.remove('countshipsconnect4')
                                cells[cellid - 9].classList.add('countshipsconnect3')
                            }
                            else{
                                cells[cellid - 9].classList.remove('shipplacebaned') 
                            }
                            
                        }
                        if(cellid % 10 != 0){
                            if(cells[cellid - 11].classList.contains('countshipsconnect1')){
                                cells[cellid - 11].classList.remove('shipplacebaned')
                                cells[cellid].classList.remove('countshipsconnect1')
                            } else if(cells[cellid - 11].classList.contains('countshipsconnect2')){
                                cells[cellid - 11].classList.remove('countshipsconnect2')
                                cells[cellid - 11].classList.add('countshipsconnect1')
                            } else if(cells[cellid - 11].classList.contains('countshipsconnect3')){
                                cells[cellid - 11].classList.remove('countshipsconnect3')
                                cells[cellid - 11].classList.add('countshipsconnect2')
                            } else if(cells[cellid - 11].classList.contains('countshipsconnect4')){
                                cells[cellid - 11].classList.remove('countshipsconnect4')
                                cells[cellid - 11].classList.add('countshipsconnect3')
                            }
                            else{
                                cells[cellid - 11].classList.remove('shipplacebaned') 
                            }
                            
                        }
                    }
                    
                
                }
                
               
            }
        }
    }
    // добавляем клас "hidden"
    curentShip.classList.add('hidden')
    // console.log(event.x, event.y)
    curentShip.style.left = event.x 
    curentShip.style.top = event.y
    // let test = document.querySelector('.test')
    // test.style.left = curentShip.getBoundingClientRect()['x'] + 'px'
    // test.style.top = curentShip.getBoundingClientRect()['y'] + 'px'
    // пролверяем что корабль однополубный
    let posIndex = 0
    for(let pos of shipPositon){
        
        if(pos[3] == -1000000){
            shipPositon.splice(posIndex, 1)
        }
        posIndex += 1
    }

    if(curentShip.classList.contains("ship1")){
        index = 0

    
        for(let cell of cells){
            // Получаем координаты клетки
            let x = cell.getBoundingClientRect()['x']
            let y = cell.getBoundingClientRect()['y']
            // Получаем координаты корабля
            let shipX = curentShip.getBoundingClientRect()['x'] + 25
            let shipY = curentShip.getBoundingClientRect()['y'] + 25
            // Проверяем что корабль находится в клетке
            if (shipX > x){
               
                if (shipX < x + 50){
                    
                    if (shipY > y){
                        
                        if (shipY < y + 50){
                            if (!cell.classList.contains('shipplacebaned')){
                                // Подсвечиваем клетку зеленой
                                cell.classList.add('active')
                                
                            }
                        } 
                    } 
                } 
            }
            
        }
      
    }
    if(curentShip.classList.contains("ship2")){
        let cells = document.querySelectorAll('.friendlyShip')
        // Проверяем что корабль стоит горизонтально
        if(curentShip.classList.contains("horizontalShip")){
           let index = 0
           for(let cell of cells){
            let x = cell.getBoundingClientRect()["x"]
            let y = cell.getBoundingClientRect()["y"]
            let shipY = curentShip.getBoundingClientRect()["y"]
            let shipXLeft = curentShip.getBoundingClientRect()["x"]  + 25
            let shipXRight = curentShip.getBoundingClientRect()["x"] + 75
            let indexCellRight = index + 1
            let rightX = x + 50
            if (shipXLeft > x){
                   
                if (shipXLeft < x + 50){
                    
                    if (shipY > y){
                        
                        if (shipY < y + 50){
                            // console.log( cells[indexCellBottom])
                            if (y < shipY){
                                if (rightX + 50 > shipXRight){
                                    if((index + 1) % 10 != 0){
                                        if (!cell.classList.contains('shipplacebaned')){
                                            if (!cells[indexCellRight].classList.contains('shipplacebaned')){
                                                cell.classList.add('active')
                                                cells[indexCellRight].classList.add('active')
                                        }}
                                        break
                                    }
                                }
                                
                            } 
                                
                        } 
                    } 
                } 
            } 
            // console.log(shipY,shipX)
            index += 1
           }
        }
        else{
            let index = 0
            for(let cell of cells){
                let x = cell.getBoundingClientRect()['x']
                let y = cell.getBoundingClientRect()['y']
                let indexCellBottom = index + 10
                let yBottom = y + 50
                let shipX = curentShip.getBoundingClientRect()['x'] + 25
                let shipYTop = curentShip.getBoundingClientRect()['y'] + 25
                let shipYBottom = curentShip.getBoundingClientRect()['y'] + 75
                if (shipX > x){
                   
                    if (shipX < x + 50){
                        
                        if (shipYTop > y){
                            
                            if (shipYTop < y + 50){
                                if (yBottom < shipYBottom){
                                    if (yBottom + 50 > shipYBottom){
                                        if (index < 90) {
                                            if (!cell.classList.contains('shipplacebaned')){
                                                if (!cells[indexCellBottom].classList.contains('shipplacebaned')){
                                                    cell.classList.add('active')
                                                    
                                                    cells[indexCellBottom].classList.add('active')
                                                }
                                            }
                                            break
                                        }
                                    }
                                } 
                            } 
                        } 
                    } 
                } 
                index += 1
            }
        }
    }
 if(curentShip.classList.contains('ship3')){
    let xship = curentShip.getBoundingClientRect()['x']
    let yship = curentShip.getBoundingClientRect()['y']
    let cells = document.querySelectorAll('.friendlyShip')
    let index = 0
    if(curentShip.classList.contains('horizontalShip')){
        for (let cell of cells){
            let cellx1 = cell.getBoundingClientRect()['x']
            let celly = cell.getBoundingClientRect()['y']
            let cellx3 = cellx1 + 150
            let xrightShip = xship + 150
            if(yship > celly - 10){
                
                if(yship + 50 < celly + 60){
                    
                    if(xship > cellx1 - 10){
                        
                        if(xrightShip < cellx3 + 10){
                            if((index + 1) % 10 != 0){
                                if((index + 2) % 10 != 0){
                                    if (!cell.classList.contains('shipplacebaned')){
                                         if (!cells[index + 1].classList.contains('shipplacebaned')){
                                            if (!cells[index + 2].classList.contains('shipplacebaned')){
                                                    cell.classList.add('active')
                                                    cells[index + 1].classList.add('active')
                                                    cells[index + 2].classList.add('active')
                                            }
                                         }
                                        }
                                    
                                }
                            }
                        }
                    }
                }
            }
            index += 1
        }
    }else{
        
        for(let cell of cells){
            let cellx = cell.getBoundingClientRect()['x']
            let celly1 = cell.getBoundingClientRect()['y']
            let celly3 = celly1 + 150
            if(cellx < xship + 60){
                
                if(xship < cellx + 60){
                    
                    if(yship > celly1 - 10){
                        
                        if(yship + 140 <= celly3 + 10){
                            console.log(1)
                            if(index < 80){
                                if (!cell.classList.contains('shipplacebaned')){
                                    if (!cells[index + 10].classList.contains('shipplacebaned')){
                                        if (!cells[index + 20].classList.contains('shipplacebaned')){
                                            cell.classList.add('active')
                                            cells[index + 10].classList.add('active')
                                            cells[index + 20].classList.add('active')
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
        }
        index += 1
    }
}   
}
if(curentShip.classList.contains('ship4')){
    let xship = curentShip.getBoundingClientRect()['x']
    let yship = curentShip.getBoundingClientRect()['y']
    let cells = document.querySelectorAll('.friendlyShip')
    let index = 0
    if(curentShip.classList.contains('horizontalShip')){
        for (let cell of cells){
            let cellx1 = cell.getBoundingClientRect()['x']
            let celly = cell.getBoundingClientRect()['y']
            let cellx3 = cellx1 + 200
            let xrightShip = xship + 200
            if(yship > celly - 10){
                
                if(yship + 50 < celly + 60){
                    
                    if(xship > cellx1 - 10){
                        
                        if(xrightShip < cellx3 + 10){
                            if((index + 1) % 10 != 0){
                                if((index + 2) % 10 != 0){
                                    if((index + 3) % 10 != 0){
                                        console.log(3)
                                        if (!cell.classList.contains('shipplacebaned')){
                                            if (!cells[index + 1].classList.contains('shipplacebaned')){
                                                if (!cells[index + 2].classList.contains('shipplacebaned')){
                                                    if (!cells[index + 3].classList.contains('shipplacebaned')){
                                                        cell.classList.add('active')
                                                        cells[index + 1].classList.add('active')
                                                        cells[index + 2].classList.add('active')
                                                        cells[index + 3].classList.add('active')
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            index += 1
        }
    }else{
        
        for(let cell of cells){
            let cellx = cell.getBoundingClientRect()['x']
            let celly1 = cell.getBoundingClientRect()['y']
            let celly3 = celly1 + 150
            if(cellx < xship + 60){
                
                if(xship < cellx + 60){
                    
                    if(yship > celly1 - 10){
                        
                        if(yship + 190 <= celly3 + 60){
                            if(index < 70){
                                if (!cell.classList.contains('shipplacebaned')){
                                    if (!cells[index + 10].classList.contains('shipplacebaned')){
                                        if (!cells[index + 20].classList.contains('shipplacebaned')){
                                            if (!cells[index + 30].classList.contains('shipplacebaned')){
                                                cell.classList.add('active')
                                                cells[index + 10].classList.add('active')
                                                cells[index + 20].classList.add('active')
                                                cells[index + 30].classList.add('active')
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            
                        }
                    }
                }
        }
        index += 1
    }
}   
}
    }
}
// функция оставляет корабль на поле
function dropShip(event){
    if (!gameRun ){
    // console.log(lastActive)
   let curentShip = event.target
//    console.log(curentShip)
    
    if(lastActive.length > 0){
        let cellx =lastActive[0].getBoundingClientRect()['x']
        let celly =lastActive[0].getBoundingClientRect()['y']
        let cellArray = document.querySelectorAll('.friendlyShip')
        curentShip.classList.add('shipstay')
        if(curentShip.classList.contains('ship1')){
            shipPositon.push([1, lastActive[0].id, 'h', curentShip.id])
            countShips += 1
        }
        if(curentShip.classList.contains('ship2')){
            if(curentShip.classList.contains('horizontalShip')){
                shipPositon.push([2, lastActive[0].id, 'h', curentShip.id])
                countShips += 1
            } else{
                shipPositon.push([2, lastActive[0].id, 'v', curentShip.id])
                countShips += 1
            }
        }
        if(curentShip.classList.contains('ship3')){
            if(curentShip.classList.contains('horizontalShip')){
                shipPositon.push([3, lastActive[0].id, 'h', curentShip.id])
                countShips += 1
            } else{
                shipPositon.push([3, lastActive[0].id, 'v', curentShip.id])
                countShips += 1
            }
        }
        if(curentShip.classList.contains('ship4')){
            if(curentShip.classList.contains('horizontalShip')){
                shipPositon.push([4, lastActive[0].id, 'h', curentShip.id])
                countShips += 1
            } else{
                shipPositon.push([4, lastActive[0].id, 'v', curentShip.id])
                countShips += 1
            }
        }
        if(countShips == 10){
            startGameButton.style.display = 'block';
        }
        
        // console.log(shipPositon)
        for(cell of lastActive){
            // клас делает так что бы нельзя было ставить корабль на определеные места
            if (cell.classList.contains('shipplacebaned')){
                if (cell.classList.contains('countshipsconnect1')){
                    cell.classList.remove('countshipsconnect1')
                    cell.classList.add('countshipsconnect2')
                } else if (cell.classList.contains('countshipsconnect2')){
                    cell.classList.remove('countshipsconnect2')
                    cell.classList.add('countshipsconnect3')
                }else if (cell.classList.contains('countshipsconnect3')){
                    cell.classList.remove('countshipsconnect3')
                    cell.classList.add('countshipsconnect4')
                }
            }
            else{
                cell.classList.add('shipplacebaned')
                cell.classList.add('countshipsconnect1')
            }
            let index = Number(cell.id)
            if((index + 1) % 10 != 0){
                if (cellArray[index + 1].classList.contains('shipplacebaned')){
                    if (cellArray[index + 1].classList.contains('countshipsconnect1')){
                        cellArray[index + 1].classList.remove('countshipsconnect1')
                        cellArray[index + 1].classList.add('countshipsconnect2')
                    } else if (cellArray[index + 1].classList.contains('countshipsconnect2')){
                        cellArray[index + 1].classList.remove('countshipsconnect2')
                        cellArray[index + 1].classList.add('countshipsconnect3')
                    }else if (cellArray[index + 1].classList.contains('countshipsconnect3')){
                        cellArray[index + 1].classList.remove('countshipsconnect3')
                        cellArray[index + 1].classList.add('countshipsconnect4')
                    }
                }
                else{
                    cellArray[index + 1].classList.add('shipplacebaned')
                    cellArray[index + 1].classList.add('countshipsconnect1')
                }
            }
            if(index % 10 != 0){
                if (cellArray[index - 1].classList.contains('shipplacebaned')){
                    if (cellArray[index - 1].classList.contains('countshipsconnect1')){
                        cellArray[index - 1].classList.remove('countshipsconnect1')
                        cellArray[index - 1].classList.add('countshipsconnect2')
                    } else if (cellArray[index - 1].classList.contains('countshipsconnect2')){
                        cellArray[index - 1].classList.remove('countshipsconnect2')
                        cellArray[index - 1].classList.add('countshipsconnect3')
                    }else if (cellArray[index - 1].classList.contains('countshipsconnect3')){
                        cellArray[index - 1].classList.remove('countshipsconnect3')
                        cellArray[index - 1].classList.add('countshipsconnect4')
                    }
                }
                else{
                    cellArray[index - 1].classList.add('shipplacebaned')
                    cellArray[index - 1].classList.add('countshipsconnect1')
                }
            }

            if(index < 90){
                if (cellArray[index + 10].classList.contains('shipplacebaned')){
                    if (cellArray[index + 10].classList.contains('countshipsconnect1')){
                        cellArray[index + 10].classList.remove('countshipsconnect1')
                        cellArray[index + 10].classList.add('countshipsconnect2')
                    } else if (cellArray[index + 10].classList.contains('countshipsconnect2')){
                        cellArray[index + 10].classList.remove('countshipsconnect2')
                        cellArray[index + 10].classList.add('countshipsconnect3')
                    }else if (cellArray[index + 10].classList.contains('countshipsconnect3')){
                        cellArray[index + 10].classList.remove('countshipsconnect3')
                        cellArray[index + 10].classList.add('countshipsconnect4')
                    }
                }
                else{
                    cellArray[index + 10].classList.add('shipplacebaned')
                    cellArray[index + 10].classList.add('countshipsconnect1')
                }
                if(index % 10 != 0){
                    if (cellArray[index + 9].classList.contains('shipplacebaned')){
                        if (cellArray[index + 9].classList.contains('countshipsconnect1')){
                            cellArray[index + 9].classList.remove('countshipsconnect1')
                            cellArray[index + 9].classList.add('countshipsconnect2')
                        } else if (cellArray[index + 9].classList.contains('countshipsconnect2')){
                            cellArray[index + 9].classList.remove('countshipsconnect2')
                            cellArray[index + 9].classList.add('countshipsconnect3')
                        }else if (cellArray[index + 9].classList.contains('countshipsconnect3')){
                            cellArray[index + 9].classList.remove('countshipsconnect3')
                            cellArray[index + 9].classList.add('countshipsconnect4')
                        }
                    }
                    else{
                        cellArray[index + 9].classList.add('shipplacebaned')
                        cellArray[index + 9].classList.add('countshipsconnect1')
                    }
                }
                if((index + 1) % 10 != 0){
                    if (cellArray[index + 11].classList.contains('shipplacebaned')){
                        if (cellArray[index + 11].classList.contains('countshipsconnect1')){
                            cellArray[index + 11].classList.remove('countshipsconnect1')
                            cellArray[index + 11].classList.add('countshipsconnect2')
                        } else if (cellArray[index + 11].classList.contains('countshipsconnect2')){
                            cellArray[index + 11].classList.remove('countshipsconnect2')
                            cellArray[index + 11].classList.add('countshipsconnect3')
                        }else if (cellArray[index + 11].classList.contains('countshipsconnect3')){
                            cellArray[index + 11].classList.remove('countshipsconnect3')
                            cellArray[index + 11].classList.add('countshipsconnect4')
                        }
                    }
                    else{
                        cellArray[index + 11].classList.add('shipplacebaned')
                        cellArray[index + 11].classList.add('countshipsconnect1')
                    }
                }
            }

            if(index > 9){
                if (cellArray[index - 10].classList.contains('shipplacebaned')){
                    if (cellArray[index - 10].classList.contains('countshipsconnect1')){
                        cellArray[index - 10].classList.remove('countshipsconnect1')
                        cellArray[index - 10].classList.add('countshipsconnect2')
                    } else if (cellArray[index - 10].classList.contains('countshipsconnect2')){
                        cellArray[index - 10].classList.remove('countshipsconnect2')
                        cellArray[index - 10].classList.add('countshipsconnect3')
                    }else if (cellArray[index - 10].classList.contains('countshipsconnect3')){
                        cellArray[index - 10].classList.remove('countshipsconnect3')
                        cellArray[index - 10].classList.add('countshipsconnect4')
                    }
                }
                else{
                    cellArray[index - 10].classList.add('shipplacebaned')
                    cellArray[index - 10].classList.add('countshipsconnect1')
                }
                if((index + 1) % 10 != 0){
                    if (cellArray[index - 9].classList.contains('shipplacebaned')){
                        if (cellArray[index - 9].classList.contains('countshipsconnect1')){
                            cellArray[index - 9].classList.remove('countshipsconnect1')
                            cellArray[index - 9].classList.add('countshipsconnect2')
                        } else if (cellArray[index - 9].classList.contains('countshipsconnect2')){
                            cellArray[index - 9].classList.remove('countshipsconnect2')
                            cellArray[index - 9].classList.add('countshipsconnect3')
                        }else if (cellArray[index - 9].classList.contains('countshipsconnect3')){
                            cellArray[index - 9].classList.remove('countshipsconnect3')
                            cellArray[index - 9].classList.add('countshipsconnect4')
                        }
                    }
                    else{
                        cellArray[index - 9].classList.add('shipplacebaned')
                        cellArray[index - 9].classList.add('countshipsconnect1')
                    }
                }
                if(index % 10 != 0){
                    if (cellArray[index - 11].classList.contains('shipplacebaned')){
                        if (cellArray[index - 11].classList.contains('countshipsconnect1')){
                            cellArray[index - 11].classList.remove('countshipsconnect1')
                            cellArray[index - 11].classList.add('countshipsconnect2')
                        } else if (cellArray[index - 11].classList.contains('countshipsconnect2')){
                            cellArray[index - 11].classList.remove('countshipsconnect2')
                            cellArray[index - 11].classList.add('countshipsconnect3')
                        }else if (cellArray[index - 11].classList.contains('countshipsconnect3')){
                            cellArray[index - 11].classList.remove('countshipsconnect3')
                            cellArray[index - 11].classList.add('countshipsconnect4')
                        }
                    }
                    else{
                        cellArray[index - 11].classList.add('shipplacebaned')
                        cellArray[index - 11].classList.add('countshipsconnect1')
                    }
                }
            }
        }
        curentShip.style.left = cellx + "px"
        curentShip.style.top = celly + "px"
    } else{
        curentShip.classList.remove('hidden')
        curentShip.classList.remove('shipstay')
    }
}
}

// Поварачивает корабль при нажатии два раза
function rotateShip(event){
    let ship = event.target
    if(!ship.classList.contains('shipstay')){
    if(ship.classList.contains("ship1")){
        if(ship.classList.contains("horizontalShip")){
            ship.classList.add("shipRotateLeft")
            setTimeout(() => {
                ship.src = "images/ship1.png"
                ship.classList.remove("horizontalShip")
                ship.classList.remove("shipRotateLeft")
            }, 400);
            
        } else{
            ship.classList.add("shipRotateRight")
            setTimeout(() => {
                ship.src = "images/h_ship1.png"
                ship.classList.add("horizontalShip")
                ship.classList.remove("shipRotateRight")
            }, 400);
     
        }
    }
    if(ship.classList.contains("ship2")){
        if(ship.classList.contains("horizontalShip")){
            ship.classList.add("shipRotateLeft")
            setTimeout(() => {
                ship.src = "images/ship2.png"
                ship.classList.remove("horizontalShip")
                ship.classList.remove("shipRotateLeft")
            }, 400);
        }else{
            ship.classList.add("shipRotateRight")
            setTimeout(() => {
                ship.src = "images/h_ship2.png"
                ship.classList.add("horizontalShip")
                ship.classList.remove("shipRotateRight")
            }, 400);
        }
    }
    if(ship.classList.contains('ship3')){
        if(ship.classList.contains('horizontalShip')){
            setTimeout(() => {
                ship.src = "images/ship3.png"
                ship.classList.remove("horizontalShip")
                ship.classList.remove("shipRotateLeft")
            }, 400);
        } else{
            ship.classList.add("shipRotateRight")
            setTimeout(() => {
                ship.src = "images/h_ship3.png"
                ship.classList.add("horizontalShip")
                ship.classList.remove("shipRotateRight")
            }, 400);
        }
    }
    if(ship.classList.contains("ship4")){
        if(ship.classList.contains("horizontalShip")){
            setTimeout(() => {
                ship.src = "images/ship4.png"
                ship.classList.remove("horizontalShip")
                ship.classList.remove("shipRotateLeft")
            }, 400);
        }else{
            ship.classList.add("shipRotateRight")
            setTimeout(() => {
                ship.src = "images/h_ship4.png"
                ship.classList.add("horizontalShip")
                ship.classList.remove("shipRotateRight")
            }, 400);
        }
    }
}

    
}

for(let ship of ships){
    ship.addEventListener("drag", moveShip)
    ship.addEventListener("dragend", dropShip)
    ship.addEventListener("dblclick", rotateShip)
}
