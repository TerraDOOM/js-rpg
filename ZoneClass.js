class Zone {
    constructor() {
        this.zone = zonePossible[rng(0, zonePossible.length - 1)];
        this.maxLevel = 10;
        this.minLevel = 1;
        this.moveNumber = rng(5, 10);
        this.move = 0;
    }

    changeZone() {
        this.minLevel = this.maxLevel + 1;
        this.maxLevel = this.maxLevel + 10;
        this.moveNumber = rng(5, 10);
        this.move = 0;
        this.zone = zonePossible[rng(0, zonePossible.length - 1)];
    }

}

// placeholders wooo
const COMMON_MAX = 10;
const UNCOMMON_MAX = 20;
const RARE_MAX = 30;
const LEGENDARY_MAX = 40;

function generateMonster(pool, level) {
    let rarityRoll = rng(1, LEGENDARY_MAX);
    let monster;

    if (1 <= rarityRoll <= COMMON_MAX) {
        monster = randomChoice(pool.common);
    } else if (COMMON_MAX < rarityRoll <= UNCOMMON_MAX) {
        monster = randomChoice(pool.uncommon);
    } else if (UNCOMMON_MAX < rarityRoll <= RARE_MAX) {
        monster = randomChoice(pool.rare);
    } else if (RARE_MAX < rarityRoll) {
        monster = randomChoice(pool.legendary);
    } else {
        console.log("wtf lmao");
    }

    let baseMonster = baseAptitudeFromLevel(level);
    switch (monster.type){
        case 'small':
            let defMod = 1;
            let spdMod = 1;
            let strMod = 1;
            break;
        case 'normal':
            let defMod = 1;
            let spdMod = 1;
            let strMod = 1;
            break;
        case 'big':
            let defMod = 1;
            let spdMod = 1;
            let strMod = 1;
            break;
        case 'bug':
            let defMod = 1;
            let spdMod = 1;
            let strMod = 1;
            break;
        default:
            let defMod = 1;
            let spdMod = 1;
            let strMod = 1;
            break;
    }
    let name = monster.name;
    let type = monster.name;
    let hp = monster.stats.hpMod * baseMonster.hp;
    let maxHP = hp;
    let defence = defMod * baseMonster.defence;
    let speed = spdMod * baseMonster.speed;
    let strength = strMod * baseMonster.strength;
    let weaponn = weapons[rng(0, weapons.length - 1)];
    let attack = new weapon(weaponn[0], weaponn[1], weaponn[2]);
    let level = level;
    let exp = Math.floor(level * 1.40);
    let monster = new Monster(name, type, hp, defence, speed, strength, attack, exp, level);
    return monster;
}