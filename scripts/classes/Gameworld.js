class Gameworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    startGameLoop() {
        const step = () => {
            //Clear canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //Declaring the camera
            const cameraPerson = this.map.gameObject.playerchar;

            //Draw lower layer/image
            this.map.drawLowerImage(this.ctx, cameraPerson);

            //Draw Game Objects
            Object.values(this.map.gameObject).forEach(object => {
                // object.x += 0.3;
                object.update({
                    arrow: this.directionInput.direction
                })
                object.sprite.draw(this.ctx, cameraPerson);
            })

            //Draw upper layer/image
            // this.map.drawUpperImage(this.ctx, cameraPerson);

            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        this.map = new GameworldMap(window.GameworldMaps.ForestStart);

        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.directionInput.direction; // Return movement key down if valid
        this.startGameLoop();

    }
}

