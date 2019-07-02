class  Zone {
    constructor(){
        this.zone = zonePossible[rng(0, zonePossible.length - 1)];
        this.maxLevel = 10;
        this.minLevel = 1;
        this.moveNumber = rng(5,10);
        this.move = 0;
    }
    generateMonster(){
        let arrayOfName = '';
        switch (this.zone) {
            case 'forest':
                arrayOfName = monsterForest;
                break;
            case 'cave':
                arrayOfName = monsterCave;
                break;
            case 'dungeon':
                arrayOfName = monsterDungeon;
                break;
            default:
                arrayOfName = monsterForest;
                break;
        }
        let name = arrayOfName[rng(0, arrayOfName.length - 1)];
        let type = 'MONSTER';
        let hp = rng(50, 150);
        let maxHP = hp;
        let defence = rng(1, 20);
        let speed = rng(1, 20);
        let strength = rng(1, 20);
        let weaponn = weapons[rng(0, weapons.length - 1)];
        let attack = new weapon(weaponn[0],weaponn[1], weaponn[2]);
        let level = rng(this.minLevel,this.maxLevel);
        let exp = Math.floor(level*1.40);
        let monster = new Monster(name, type, hp, defence, speed, strength, attack, exp,level);
        return monster ;
    }
    changeZone(){
        this.minLevel = this.maxLevel + 1;
        this.maxLevel = this.maxLevel + 10;
        this.moveNumber = rng(5,10);
        this.move = 0;
        this.zone = zonePossible[rng(0, zonePossible.length - 1)];
    }

}