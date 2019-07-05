class Monster extends Man {
    constructor(name, type, hp, defence, speed, strength, attack, exp,level,jokes) {
        super(name, type, hp, defence, speed, strength, attack, exp);
        this.inv = [];
        this.level = level;
        this.arrayOfJokes = jokes;
    }
}