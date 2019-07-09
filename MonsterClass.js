class Monster extends Man {
    constructor(name, type, hp, defence, speed, strength, attack, exp,level,jokes,helmet,pants,shirt) {
        super(name, type, hp, defence, speed, strength, attack, exp,helmet,pants,shirt);
        this.inv = [];
        this.level = level;
        this.arrayOfJokes = jokes;
    }
}