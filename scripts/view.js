//view

// Render and update view functions:
function render() {
    let html = '';
    html = `${model.view}`;
    document.getElementById('main').innerHTML = html;
}

updateView();
function updateView() {
    if (model.currentPage == 'classSelection') {
        model.bonusStatPoints = 5;
        classSelectionPage();
    }
    if (model.currentPage == 'mainMenu') mainMenuPage();
    if (model.currentPage == 'charCreation') createCharacterPage();
    if (model.currentPage == 'gameContainer') gameContainerPage();
    if (model.currentPage == 'battleScreen') battleScreenPage();
    render();
}



/* -------------------------------------
            Main Menu Page
 --------------------------------------- */

function mainMenuPage() {
    model.view = /*html*/ `
    <div id="mainMenu">
    <div id="topLineBreak"> </div>
    <hr>
    <div id="title">Forest of Adventure</div><hr>
        <div id="buttonGrid">
        <button class="mainButtons" onclick="changePage('classSelection')">Play Game</button>
        <button class="mainButtons" onclick="settingsPage()">Settings</button>

        </div>
    </div>
    `
}

/* -------------------------------------
            Class Selection Page
 --------------------------------------- */

function classSelectionPage() {
    model.view = /*html*/ `
    <div id="mainMenu">
    <div id="topLineBreak"> </div>
    <hr>
    <button class="goBack" onclick="changePage('mainMenu')">Back</button>
    <div id="title">Forest of Adventure</div><hr>
    <div id="pickClassTitle">Choose your class:</div>
    <div id="classTitles">
        <span id="warriorTitle">Warrior</span>
        <span id="wizardTitle">Wizard</span>
        <span id="thiefTitle">Thief</span>
    </div>
    <button class="playerClassButton" id="warriorImg" onclick="classSelected('Warrior'), changePage('charCreation'), rollStats(), setMainChar()"></button>
    <button class="playerClassButton" id="wizardImg" onclick="classSelected('Wizard'), changePage('charCreation'), rollStats()"></button>
    <button class="playerClassButton" id="thiefImg" onclick="classSelected('Thief'), changePage('charCreation'), rollStats()"></button>
     `;
    render();
}


/* -----------------------------------------
            Character Creation Page:
 ------------------------------------------ */

function createCharacterPage() {
    model.view = /*html*/ `
    <div id="mainMenu">
    <div id="topLineBreak"> </div>
    <hr>
    <button class="goBack" onclick="changePage('classSelection')">Back</button>
    <div id="title">Forest of Adventure</div><hr>
    <div id="characterSheet">
    <input id="classImg" type="image" src="${model.playerCharacter.classImage}"/>
        
        <div id="sheetText">
            <div id="classSheetTitle">${model.playerCharacter.playerClass}</div>
            <div id="classDescription">${model.classDescription}</div> <br/>
            <div id="bonusStats">Bonus points to add: ${model.bonusStatPoints}</div>
            <div id="sheetStats">
                <span>Vitality: ${model.playerCharacter.playerStats.vitality}</span>
                <button id="minusVitPoint" class="delStatPoints" ${model.characterStatButtons.minusVitBt.style} onclick="minusStatPoint('vitality')">-</button>
                <button class="addStatPoints" ${model.characterStatButtons.plusVitBt.style} onclick="plusStatPoint('vitality')">+</button><div class="statBreak"></div>

                <span>Strength: ${model.playerCharacter.playerStats.strength}</span>
                <button id="minusStrPoint" class="delStatPoints" ${model.characterStatButtons.minusStrBt.style} onclick="minusStatPoint('strength')">-</button>
                <button class="addStatPoints" ${model.characterStatButtons.plusStrBt.style} onclick="plusStatPoint('strength')">+</button><div class="statBreak"></div>

                <span>Intellect: ${model.playerCharacter.playerStats.intellect}</span>
                <button id="minusIntPoint" ${model.characterStatButtons.minusIntBt.style} class="delStatPoints" onclick="minusStatPoint('intellect')">-</button>
                <button class="addStatPoints" ${model.characterStatButtons.plusIntBt.style} onclick="plusStatPoint('intellect')">+</button><div class="statBreak"></div>

                <span>Dexterity: ${model.playerCharacter.playerStats.dexterity}</span>
                <button id="minusDexPoint" class="delStatPoints" ${model.characterStatButtons.minusDexBt.style} onclick="minusStatPoint('dexterity')">-</button>
                <button class="addStatPoints" ${model.characterStatButtons.plusDexBt.style} onclick="plusStatPoint('dexterity')">+</button><div class="statBreak"></div>

                <span>You rolled: ${model.rolledStats}</span>
                </div>
                <button id="diceRoll" onclick="rollStats()">Reroll stats</button>
                
                
        </div>
    </div>
<button id="playBt" onclick="changePage('gameContainer'), toggleTheme()">Play</button>
    `

    render();
}

// -------------------------------------------------------------------------------

function gameContainerPage() {
    model.view = /*html*/ `
    <div id="mainMenu">
    <div id="topLineBreak"> </div>
    <hr>
    <button class="goBack" onclick="changePage('classSelection')">Back</button>
    <div id="title">Forest of Adventure</div><hr>
    <div id="controlsText">${model.inputsDesc}</div>
    </div>
    <button id="battleBt" onclick="changePage('battleScreen')">Battle!</button>
    `
    render();
}


function battleScreenPage() {
    model.view = /*html*/ `
    <div id="mainMenu">
    <div id="topLineBreak"> </div>
    <hr>
    <button class="goBack" onclick="changePage('classSelection')">Back</button>
    <div id="title">Forest of Adventure</div><hr>
    <div id="battleMain">${model.battleText}</div>
    <button id="okBt" onclick="changePage('mainMenu')">Ok</button>
    `
    render();
}

render();