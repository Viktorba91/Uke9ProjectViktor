class GameworldMap {
    constructor(config) {
        this.gameObject = config.gameObjects;

        //Layers of maps/images of the world
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

    }
    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(this.lowerImage,
            utils.widthGrid(10.5) - cameraPerson.x,
            utils.widthGrid(7) - cameraPerson.y
        )
    }
    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(this.lowerImage,
            utils.widthGrid(10.5) - cameraPerson.x,
            utils.widthGrid(7) - cameraPerson.y
        )
    }
}

window.GameworldMaps = {
    ForestStart: {
        lowerSrc: "./images/maps/DemoLower.png",
        upperSrc: "./images/maps/DemoLower.png",
        gameObjects: {
            playerchar: new Person({
                isPlayerControlled: true,
                x: utils.widthGrid(5),
                y: utils.widthGrid(9),
            }),
            npc1: new Person({
                x: utils.widthGrid(7),
                y: utils.widthGrid(9),
                src: "./images/characters/wizardPurple.png"
            })
        }
    },
    ForestSecondStart: {
        lowerSrc: "/images/maps/KitchenLower.png",
        upperSrc: "/images/maps/KitchenUpper.png",
        gameObjects: {
            playerchar: new GameObject({
                x: 3,
                y: 5,
            }),
            npc1: new GameObject({
                x: 9,
                y: 6,
                src: "./images/characters/wizardPurple.png"
            }),
            npc2: new GameObject({
                x: 10,
                y: 8,
                src: "./images/characters/wizardPurple.png"
            })
        }
    },
    ForestLevel01: {

    },
    ForestLevel02: {

    }
}