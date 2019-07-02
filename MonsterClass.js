class Monster extends Man {
    constructor(name, type, hp, defence, speed, strength, attack, exp,level) {
        super(name, type, hp, defence, speed, strength, attack, exp);
        this.inv = [];
        this.level = level;
    }
}