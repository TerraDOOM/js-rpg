class Player extends Man {
    constructor(name, type, hp, defence, speed, strength, attack) {
        super(name, type, hp, defence, speed, strength, attack, 0,"","","");
        this.level = 1;
        this.levelUp = 100;
    }
}