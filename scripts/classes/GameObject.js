let mainChar = "./images/characters/wizardBlue.png";
function setMainChar() {
    mainChar = "./images/characters/wizardPurple.png";
}
class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";

        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "./images/characters/wizardBlue.png",
        });
    }


    update() {

    }
}