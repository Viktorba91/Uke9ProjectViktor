//Menus:
function changePage(side) {
    model.currentPage = side;
    if (model.currentPage != 'gameContainer') toggleTheme();
    updateView();
}


/* --------------------------------------
                Dice Roll
---------------------------------------
*/
function rollStats() {
    // First reset bonus points:
    model.bonusStatPoints = 5;

    //Calculate dice rolls:
    model.playerCharacter.playerStats.vitality = Math.floor(Math.random() * 10) + 5;
    model.playerCharacter.playerStats.strength = Math.floor(Math.random() * 20);
    model.playerCharacter.playerStats.intellect = Math.floor(Math.random() * 20);
    model.playerCharacter.playerStats.dexterity = Math.floor(Math.random() * 20);
    model.rolledStats =
        model.playerCharacter.playerStats.vitality +
        model.playerCharacter.playerStats.strength +
        model.playerCharacter.playerStats.intellect +
        model.playerCharacter.playerStats.dexterity;

    // Reset all buttons visibility on reroll:
    model.characterStatButtons.minusVitBt.style = model.styleHidden;
    model.characterStatButtons.minusStrBt.style = model.styleHidden;
    model.characterStatButtons.minusIntBt.style = model.styleHidden;
    model.characterStatButtons.minusDexBt.style = model.styleHidden;
    model.characterStatButtons.plusVitBt.style = model.styleVisible;
    model.characterStatButtons.plusStrBt.style = model.styleVisible;
    model.characterStatButtons.plusIntBt.style = model.styleVisible;
    model.characterStatButtons.plusDexBt.style = model.styleVisible;
    updateView();
}
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------


/* ---------------------------------
Chosen class by onclick in classSelectionPage view: 
* Set current class image as player image
* Class Description / Info text
----------------------------------- */
function classSelected(playerClass) {
    model.playerCharacter.playerClass = playerClass;
    if (playerClass == 'Warrior') {
        model.playerCharacter.classImage = 'https://c4.wallpaperflare.com/wallpaper/317/750/554/drawing-concept-art-warrior-armor-fantasy-art-hd-wallpaper-preview.jpg';
        model.classDescription = model.warriorDesc;
        model.playerCharacter.playerSprite = './images/characters/wizardPurple.png';
    }
    else if (playerClass == 'Wizard') {
        model.playerCharacter.classImage = 'https://i1.sndcdn.com/artworks-2trXzA8Gc3N80FBW-PYEy8Q-t500x500.jpg';
        model.classDescription = model.wizardDesc;
        model.playerCharacter.playerSprite = './images/characters/wizardBlue.png';
    }
    else {
        model.playerCharacter.classImage = 'https://i.pinimg.com/originals/81/4c/f4/814cf4051ce5971dc753f9c5ffd60d7c.jpg';
        model.classDescription = model.thiefDesc;
    }

}



//Add bonus point if available to current stat & set subtract button visible:
function plusStatPoint(currentStat) {
    if (model.bonusStatPoints > 0) {
        switch (currentStat) {
            case 'vitality':
                model.playerCharacter.playerStats.vitality++;
                model.characterStatButtons.minusVitBt.value++;
                model.characterStatButtons.minusVitBt.style = model.styleVisible;
                model.bonusStatPoints--;
                break;
            case 'strength':
                model.playerCharacter.playerStats.strength++;
                model.characterStatButtons.minusStrBt.value++;
                model.characterStatButtons.minusStrBt.style = model.styleVisible;
                model.bonusStatPoints--;
                break;
            case 'intellect':
                model.playerCharacter.playerStats.intellect++;
                model.characterStatButtons.minusIntBt.value++;
                model.characterStatButtons.minusIntBt.style = model.styleVisible;
                model.bonusStatPoints--;
                break;
            case 'dexterity':
                model.playerCharacter.playerStats.dexterity++;
                model.characterStatButtons.minusDexBt.value++;
                model.characterStatButtons.minusDexBt.style = model.styleVisible;
                model.bonusStatPoints--;
                break;
        }
    }
    checkBonusPoints();
}

// Subtract bonus point from current stat:
function minusStatPoint(currentStat) {
    if (model.bonusStatPoints < 5) {
        switch (currentStat) {
            case 'vitality':
                if (model.characterStatButtons.minusVitBt.value > 0) {
                    model.playerCharacter.playerStats.vitality--;
                    model.characterStatButtons.minusVitBt.value--;
                    model.bonusStatPoints++;
                }
                break;
            case 'strength':
                if (model.characterStatButtons.minusStrBt.value > 0) {
                    model.playerCharacter.playerStats.strength--;
                    model.characterStatButtons.minusStrBt.value--;
                    model.bonusStatPoints++;
                }
                break;
            case 'intellect':
                if (model.characterStatButtons.minusIntBt.value > 0) {
                    model.playerCharacter.playerStats.intellect--;
                    model.characterStatButtons.minusIntBt.value--;
                    model.bonusStatPoints++;
                }
                break;
            case 'dexterity':
                if (model.characterStatButtons.minusDexBt.value > 0) {
                    model.playerCharacter.playerStats.dexterity--;
                    model.characterStatButtons.minusDexBt.value--;
                    model.bonusStatPoints++;
                }
                break;
        }
    }

    // checkPlusMinusButtons();
    checkBonusPoints();
}

function checkBonusPoints() {
    if (model.bonusStatPoints === 0) {
        model.characterStatButtons.plusVitBt.style = model.styleHidden;
        model.characterStatButtons.plusStrBt.style = model.styleHidden;
        model.characterStatButtons.plusIntBt.style = model.styleHidden;
        model.characterStatButtons.plusDexBt.style = model.styleHidden;
    }
    // else if (model.bonusStatPoints > 0) {
    else {
        model.characterStatButtons.plusVitBt.style = model.styleVisible;
        model.characterStatButtons.plusStrBt.style = model.styleVisible;
        model.characterStatButtons.plusIntBt.style = model.styleVisible;
        model.characterStatButtons.plusDexBt.style = model.styleVisible;
    }
    checkMinusValues();
}

//Check for button visability:
function checkMinusValues() {
    if (model.bonusStatPoints === 5) {
        model.characterStatButtons.minusVitBt.value = 0;
        model.characterStatButtons.minusStrBt.value = 0;
        model.characterStatButtons.minusIntBt.value = 0;
        model.characterStatButtons.minusDexBt.value = 0;
    }
    if (model.characterStatButtons.minusVitBt.value == 0) {
        model.characterStatButtons.minusVitBt.style = model.styleHidden;
    }
    if (model.characterStatButtons.minusStrBt.value == 0) {
        model.characterStatButtons.minusStrBt.style = model.styleHidden;
    }
    if (model.characterStatButtons.minusIntBt.value == 0) {
        model.characterStatButtons.minusIntBt.style = model.styleHidden;
    }
    if (model.characterStatButtons.minusDexBt.value == 0) {
        model.characterStatButtons.minusDexBt.style = model.styleHidden;
    }

    updateView();
}


//Change active stylesheet:
function toggleTheme() {

    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    let theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (model.currentPage != 'gameContainer') {
        theme.setAttribute('href', './styles/styleMainMenu.css');
        targList = document.getElementsByClassName("game-container");
        document.getElementsByClassName("game-container")
        if (targList) {
            for (var x = 0; x < targList.length; x++) {
                targList[x].style.visibility = "hidden";
            }
        }
        targList = document.getElementsByClassName("game-canvas");
        document.getElementsByClassName("game-canvas")
        if (targList) {
            for (var x = 0; x < targList.length; x++) {
                targList[x].style.visibility = "hidden";
            }
        }
    }
    else if (model.currentPage == 'gameContainer') {
        theme.setAttribute('href', './styles/styleGameContainer.css');
        targList = document.getElementsByClassName("game-container");
        document.getElementsByClassName("game-container")
        if (targList) {
            for (var x = 0; x < targList.length; x++) {
                targList[x].style.visibility = "visible";
            }
        }
        targList = document.getElementsByClassName("game-canvas");
        document.getElementsByClassName("game-canvas")
        if (targList) {
            for (var x = 0; x < targList.length; x++) {
                targList[x].style.visibility = "visible";
            }
        }
    }
    //   else {  theme.setAttribute('href', './styles/styleGameContainer.css');
    // }

    render();
}


// function test() {
//     // document.getElementsByClassName('game-container').style.visibility = "visible";
//     // document.getElementsByClassName("game-canvas").style.visibility = "visible";
//     // document.getElementById("mySidenav").style.width = "250px";
//     targList = document.getElementsByClassName("game-container");
//     document.getElementsByClassName("game-container")
//     if (targList) {
//         for (var x = 0; x < targList.length; x++) {
//             targList[x].style.visibility = "visible";
//         }
//     }
//     targList = document.getElementsByClassName("game-canvas");
//     document.getElementsByClassName("game-canvas")
//     if (targList) {
//         for (var x = 0; x < targList.length; x++) {
//             targList[x].style.visibility = "visible";
//         }
//     }
//     // document.getElementById("game-container").style.visibility = "visible";
// }
