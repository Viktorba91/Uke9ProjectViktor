function setCharacter() {
    mainChar = './images/characters/wizardPurple.png';
}

class Sprite {
    constructor(config) {
        let mainChar = '';

        //Set up the image
        this.image = new Image();
        this.image.src = mainChar || config.src;
        this.image.onload = () => {
            this.isLoaded = () => {
                this.isLoaded = true;
            }
        }

        //Configuring Animation and Initial State
        this.animations = config.animations || {
            // X value first index, Y value second index
            "idle-down": [[0, 0],],
            "idle-right": [[0, 1],],
            "idle-up": [[0, 2],],
            "idle-left": [[0, 3],],
            "walk-down": [[1, 0], [0, 0], [3, 0], [0, 0]],
            "walk-right": [[1, 1], [0, 1], [3, 1], [0, 1]],
            "walk-up": [[1, 2], [0, 2], [3, 2], [0, 2]],
            "walk-left": [[1, 3], [0, 3], [3, 3], [0, 3]],
        }
        this.currentAnimation = "idle-down"; //config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        //Animation frame speed, increase to slow down
        this.animationFrameLimit = config.animationFrameLimit || 12;
        this.animationFrameProgress = this.animationFrameLimit;
        //Reference the game object
        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        //Downtick frame progress
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        //Reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;
        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }

    }

    draw(ctx, cameraPerson) {
        const x = this.gameObject.x - 5 + utils.widthGrid(10.5) - cameraPerson.x;
        const y = this.gameObject.y - 32 + utils.widthGrid(7) - cameraPerson.y;

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX * 32, frameY * 32,
            32, 32,
            x, y,
            32, 32
        )
        this.updateAnimationProgress();
    }


}