const model = {
    currentPage: 'mainMenu',
    view: '',
    currentStylesheet: './styles/styleMainMenu.css',


    playerCharacter: {
        playerClass: '',
        playerSprite: '',
        classImage: '',
        playerStats: {
            vitality: 0,
            strength: 0,
            intellect: 0,
            dexterity: 0
        },
        playerInventory: {
            equippedGear: {
                helmet: {
                    name: '',
                    vitality: 0,
                    strength: 0,
                    intellect: 0,
                    dexterity: 0
                },
            },
            armor: [],
            weapon: [],
            other: [],

        }

    },

    //View Character Creation declarations:
    characterStatButtons: {
        minusVitBt: {
            style: 'style="visibility: hidden"',
            value: 0,
        },
        minusStrBt: {
            style: 'style="visibility: hidden"',
            value: 0,
        },
        minusIntBt: {
            style: 'style="visibility: hidden"',
            value: 0,
        },
        minusDexBt: {
            style: 'style="visibility: hidden"',
            value: 0,
        },
        plusVitBt: {
            style: 'style="visibility: visible"',
            value: 0,
        },
        plusStrBt: {
            style: 'style="visibility: visible"',
            value: 0,
        },
        plusIntBt: {
            style: 'style="visibility: visible"',
            value: 0,
        },
        plusDexBt: {
            style: 'style="visibility: visible"',
            value: 0,
        },
    },

    styleHidden: 'style="visibility: hidden"',
    styleVisible: 'style="visibility: visible"',

    //Character Creation:
    rolledStats: 0,
    bonusStatPoints: 5,
    classDescription: '',
    warriorDesc: 'The warrior benefits extra from strength, has higher starting vitality, favors heavy armor and swords, maces, axes and shields.',
    wizardDesc: 'The Wizard benefits extra from intellect, uses light armor and spellcasting to strike down foes.',
    thiefDesc: 'The Thief is an assassin that favors dexterity for damage output and critical strikes, uses medium armor and prefer dual wielding daggers.',
    inputsDesc: 'Use [W],[A],[S],[D] or Arrow Keys to move',
    battleText: 'Work in progress!',
}
