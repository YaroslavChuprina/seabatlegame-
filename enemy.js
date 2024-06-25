let bannedCells = [];
let enemyShips = [];

while (true) {
  //
  let direction = Math.round(Math.random());
  if (direction == 0) {
    let randomNumber = Math.floor(Math.random() * 100);
    if ((randomNumber + 4) % 10 != 0) {
      if ((randomNumber + 3) % 10 != 0) {
        if ((randomNumber + 2) % 10 != 0) {
          if ((randomNumber + 1) % 10 != 0) {
            let enemyShip = [
              randomNumber,
              randomNumber + 1,
              randomNumber + 2,
              randomNumber + 3,
            ];
            enemyShips.push([enemyShip, [false,false,false,false]]);
            bannedCells.push(randomNumber);
            bannedCells.push(randomNumber + 1);
            bannedCells.push(randomNumber + 2);
            bannedCells.push(randomNumber + 3);
            if ((randomNumber + 4) % 10 != 0) {
              bannedCells.push(randomNumber + 4);
            }
            if (randomNumber % 10 != 0) {
              bannedCells.push(randomNumber - 1);
            }
            if (randomNumber < 90) {
              bannedCells.push(randomNumber + 10);
              bannedCells.push(randomNumber + 11);
              bannedCells.push(randomNumber + 12);
              bannedCells.push(randomNumber + 13);
              if ((randomNumber + 4) % 10 != 0) {
                bannedCells.push(randomNumber + 14);
              }
              if (randomNumber % 10 != 0) {
                bannedCells.push(randomNumber + 9);
              }
            }
            if (randomNumber > 9) {
              bannedCells.push(randomNumber - 10);
              bannedCells.push(randomNumber - 9);
              bannedCells.push(randomNumber - 8);
              bannedCells.push(randomNumber - 7);
              if ((randomNumber + 4) % 10 != 0) {
                bannedCells.push(randomNumber - 6);
              }
              if (randomNumber % 10 != 0) {
                bannedCells.push(randomNumber - 11);
              }
            }
            if (randomNumber > 9) {
              bannedCells.push(randomNumber - 10);
            }
            break;
          }
        }
      }
    }
  } else {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 70) {
      let enemyShip = [
        randomNumber,
        randomNumber + 10,
        randomNumber + 20,
        randomNumber + 30,
      ];
      enemyShips.push([enemyShip, [false,false,false,false]]);
      bannedCells.push(randomNumber);
      bannedCells.push(randomNumber + 10);
      bannedCells.push(randomNumber + 20);
      bannedCells.push(randomNumber + 30);
      if (randomNumber + 30 < 90) {
        bannedCells.push(randomNumber + 40);
      }
      if (randomNumber % 10 != 0) {
        bannedCells.push(randomNumber - 1);
        bannedCells.push(randomNumber + 9);
        bannedCells.push(randomNumber + 19);
        bannedCells.push(randomNumber + 29);
        if (randomNumber + 30 < 90) {
          bannedCells.push(randomNumber + 39);
        }
        if (randomNumber > 9) {
          bannedCells.push(randomNumber - 11);
        }
      }
      if ((randomNumber + 1) % 10 != 0) {
        bannedCells.push(randomNumber + 1);
        bannedCells.push(randomNumber + 11);
        bannedCells.push(randomNumber + 21);
        bannedCells.push(randomNumber + 31);
        if (randomNumber + 30 < 90) {
          bannedCells.push(randomNumber + 41);
        }
        if (randomNumber > 9) {
          bannedCells.push(randomNumber - 9);
        }
      }
      if (randomNumber > 9) {
        bannedCells.push(randomNumber - 10);
      }
      break;
    }
  }
}
for (let i = 0; i < 2; i++) {
  while (true) {
    //
    let direction = Math.round(Math.random());
    if (direction == 0) {
      let randomNumber = Math.floor(Math.random() * 100);
      if (
        !bannedCells.includes(randomNumber) &&
        !bannedCells.includes(randomNumber + 1) &&
        !bannedCells.includes(randomNumber + 2)
      ) {
        if ((randomNumber + 3) % 10 != 0) {
          if ((randomNumber + 2) % 10 != 0) {
            if ((randomNumber + 1) % 10 != 0) {
              let enemyShip = [
                randomNumber,
                randomNumber + 1,
                randomNumber + 2,
              ];
              enemyShips.push([enemyShip, [false,false,false]]);
              bannedCells.push(randomNumber);
              bannedCells.push(randomNumber + 1);
              bannedCells.push(randomNumber + 2);
              if ((randomNumber + 3) % 10 != 0) {
                bannedCells.push(randomNumber + 3);
              }
              if (randomNumber % 10 != 0) {
                bannedCells.push(randomNumber - 1);
              }
              if (randomNumber < 90) {
                bannedCells.push(randomNumber + 10);
                bannedCells.push(randomNumber + 11);
                bannedCells.push(randomNumber + 12);
                if ((randomNumber + 3) % 10 != 0) {
                  bannedCells.push(randomNumber + 13);
                }
                if (randomNumber % 10 != 0) {
                  bannedCells.push(randomNumber + 9);
                }
              }
              if (randomNumber > 9) {
                bannedCells.push(randomNumber - 10);
                bannedCells.push(randomNumber - 9);
                bannedCells.push(randomNumber - 8);
                if ((randomNumber + 3) % 10 != 0) {
                  bannedCells.push(randomNumber - 7);
                }
                if (randomNumber % 10 != 0) {
                  bannedCells.push(randomNumber - 11);
                }
              }
              if (randomNumber > 9) {
                bannedCells.push(randomNumber - 10);
              }
              break;
            }
          }
        }
      }
    } else {
      let randomNumber = Math.floor(Math.random() * 100);
      if (
        !bannedCells.includes(randomNumber) &&
        !bannedCells.includes(randomNumber + 10) &&
        !bannedCells.includes(randomNumber + 20)
      ) {
        if (randomNumber < 80) {
          let enemyShip = [randomNumber, randomNumber + 10, randomNumber + 20];
          enemyShips.push([enemyShip, [false,false,false]]);
          bannedCells.push(randomNumber);
          bannedCells.push(randomNumber + 10);
          bannedCells.push(randomNumber + 20);
          if (randomNumber + 20 < 90) {
            bannedCells.push(randomNumber + 30);
          }
          if (randomNumber % 10 != 0) {
            bannedCells.push(randomNumber - 1);
            bannedCells.push(randomNumber + 9);
            bannedCells.push(randomNumber + 19);
            if (randomNumber + 20 < 90) {
              bannedCells.push(randomNumber + 29);
            }
            if (randomNumber > 9) {
              bannedCells.push(randomNumber - 11);
            }
          }
          if ((randomNumber + 1) % 10 != 0) {
            bannedCells.push(randomNumber + 1);
            bannedCells.push(randomNumber + 11);
            bannedCells.push(randomNumber + 21);
            if (randomNumber + 20 < 90) {
              bannedCells.push(randomNumber + 31);
            }
            if (randomNumber > 9) {
              bannedCells.push(randomNumber - 9);
            }
          }
          if (randomNumber > 9) {
            bannedCells.push(randomNumber - 10);
          }
          break;
        }
      }
    }
  }
}

for (let i = 0; i < 3; i++) {
    while (true) {
      //
      let direction = Math.round(Math.random());
      if (direction == 0) {
        let randomNumber = Math.floor(Math.random() * 100);
        if (
          !bannedCells.includes(randomNumber) &&
          !bannedCells.includes(randomNumber + 1) 
        ) {
            if ((randomNumber + 2) % 10 != 0) {
              if ((randomNumber + 1) % 10 != 0) {
                let enemyShip = [
                  randomNumber,
                  randomNumber + 1,
                ];
                enemyShips.push([enemyShip, [false,false]]);
                bannedCells.push(randomNumber);
                bannedCells.push(randomNumber + 1);
                if ((randomNumber + 2) % 10 != 0) {
                  bannedCells.push(randomNumber + 2);
                }
                if (randomNumber % 10 != 0) {
                  bannedCells.push(randomNumber - 1);
                }
                if (randomNumber < 90) {
                  bannedCells.push(randomNumber + 10);
                  bannedCells.push(randomNumber + 11);
                  if ((randomNumber + 2) % 10 != 0) {
                    bannedCells.push(randomNumber + 12);
                  }
                  if (randomNumber % 10 != 0) {
                    bannedCells.push(randomNumber + 9);
                  }
                }
                if (randomNumber > 9) {
                  bannedCells.push(randomNumber - 10);
                  bannedCells.push(randomNumber - 9);
                  if ((randomNumber + 2) % 10 != 0) {
                    bannedCells.push(randomNumber - 8);
                  }
                  if (randomNumber % 10 != 0) {
                    bannedCells.push(randomNumber - 11);
                  }
                }
                if (randomNumber > 9) {
                  bannedCells.push(randomNumber - 10);
                }
                break;
              }
            }
        }
      } else {
        let randomNumber = Math.floor(Math.random() * 100);
        if (
          !bannedCells.includes(randomNumber) &&
          !bannedCells.includes(randomNumber + 10)
        ) {
          if (randomNumber < 90) {
            let enemyShip = [randomNumber, randomNumber + 10];
            enemyShips.push([enemyShip, [false,false]]);
            bannedCells.push(randomNumber);
            bannedCells.push(randomNumber + 10);
            if (randomNumber + 10 < 90) {
              bannedCells.push(randomNumber + 20);
            }
            if (randomNumber % 10 != 0) {
              bannedCells.push(randomNumber - 1);
              bannedCells.push(randomNumber + 9);
              if (randomNumber + 10 < 90) {
                bannedCells.push(randomNumber + 19);
              }
              if (randomNumber > 9) {
                bannedCells.push(randomNumber - 11);
              }
            }
            if ((randomNumber + 1) % 10 != 0) {
              bannedCells.push(randomNumber + 1);
              bannedCells.push(randomNumber + 11);
              if (randomNumber + 10 < 90) {
                bannedCells.push(randomNumber + 21);
              }
              if (randomNumber > 9) {
                bannedCells.push(randomNumber - 9);
              }
            }
            if (randomNumber > 9) {
              bannedCells.push(randomNumber - 10);
            }
            break;
          }
        }
      }
    }
  }



  for (let i = 0; i < 4; i++) {
    while (true) {
      //
      let direction = Math.round(Math.random());
      if (direction == 0) {
        let randomNumber = Math.floor(Math.random() * 100);
        if (
          !bannedCells.includes(randomNumber) 
        ) {
              if ((randomNumber + 1) % 10 != 0) {
                let enemyShip = [
                  randomNumber,
                ];
                enemyShips.push([enemyShip, [false]]);
                bannedCells.push(randomNumber);
                if ((randomNumber + 1) % 10 != 0) {
                  bannedCells.push(randomNumber + 1);
                }
                if (randomNumber % 10 != 0) {
                  bannedCells.push(randomNumber - 1);
                }
                if (randomNumber < 90) {
                  bannedCells.push(randomNumber + 10);
                  if ((randomNumber + 1) % 10 != 0) {
                    bannedCells.push(randomNumber + 11);
                  }
                  if (randomNumber % 10 != 0) {
                    bannedCells.push(randomNumber + 9);
                  }
                }
                if (randomNumber > 9) {
                  bannedCells.push(randomNumber - 10);
                  if ((randomNumber + 1) % 10 != 0) {
                    bannedCells.push(randomNumber - 9);
                  }
                  if (randomNumber % 10 != 0) {
                    bannedCells.push(randomNumber - 11);
                  }
                }
                if (randomNumber > 9) {
                  bannedCells.push(randomNumber - 10);
                }
                break;
              }
            
        }
      } else {
        let randomNumber = Math.floor(Math.random() * 100);
        if (
          !bannedCells.includes(randomNumber)
        ) {
          if (randomNumber < 100) {
            let enemyShip = [randomNumber];
            enemyShips.push([enemyShip, [false]]);
            bannedCells.push(randomNumber);
            if (randomNumber < 90) {
              bannedCells.push(randomNumber + 10);
            }
            if (randomNumber % 10 != 0) {
              bannedCells.push(randomNumber - 1);
              if (randomNumber < 90) {
                bannedCells.push(randomNumber + 9);
              }
              if (randomNumber > 9) {
                bannedCells.push(randomNumber - 11);
              }
            }
            if ((randomNumber + 1) % 10 != 0) {
              bannedCells.push(randomNumber + 1);
              if (randomNumber < 90) {
                bannedCells.push(randomNumber + 11);
              }
              if (randomNumber > 9) {
                bannedCells.push(randomNumber - 9);
              }
            }
            if (randomNumber > 9) {
              bannedCells.push(randomNumber - 10);
            }
            break;
          }
        }
      }
    }
  }

// for (let i of bannedCells) {
//   document.querySelector(`#enemy-${i}`).style.background = "red";
// }
// for (let ship of enemyShips) {
//   for (let i of ship) {
//     document.querySelector(`#enemy-${i}`).style.background = "yellow";
//   }
// }
