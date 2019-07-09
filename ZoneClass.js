class Zone {
    constructor() {
        this.zone = zonePossible[rng(0, zonePossible.length - 1)];
        this.maxLevel = 10;
        this.minLevel = 1;
        this.moveNumber = rng(5, 10);
        this.move = 0;
        switch (this.zone) {
            case 'forest':
                this.npcPool = forestNPC;
                this.monsterPool = forestPool;
                break;
            case 'cave':
                this.npcPool = caveNPC;
                this.monsterPool = cavePool;
                break;
            case 'dungeon':
                this.npcPool = dungeonNPC;
                this.monsterPool = dungeonPool;
                break;
        }
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

function generateNPC() {

}

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
    let defMod = 0;
    let spdMod = 0;
    let strMod = 0;
    let hpMod = 0;
    let xpMod = 1.0;
    switch (monster.type) {
        case 'small':
            defMod = 1;
            spdMod = 1;
            strMod = 1;
            hpMod = 1;
            break;
        case 'normal':
            defMod = 1;
            spdMod = 1;
            strMod = 1;
            hpMod = 1;
            break;
        case 'big':
            defMod = 1;
            spdMod = 1;
            strMod = 1;
            hpMod = 1;
            break;
        case 'bug':
            defMod = 1;
            spdMod = 1;
            strMod = 1;
            hpMod = 1;
            break;
        case 'animal':
            defMod = 1;
            spdMod = 1;
            strMod = 1;
            hpMod = 1;
            break;
        default:
            defMod = 1;
            spdMod = 1;
            strMod = 1;
            hpMod = 1;
            break;
    }
    let name = monster.name;
    let type = monster.name;
    let hp = hpMod * baseMonster.hp;
    let maxHP = hp;
    let defence = defMod * baseMonster.defence;
    let speed = spdMod * baseMonster.speed;
    let strength = strMod * baseMonster.strength;
    let weaponn = weapons[rng(0, weapons.length - 1)];
    let attack = new weapon(weaponn[0], weaponn[1], weaponn[2]);
    let exp = xpMod * baseMonster.xp;
    monster = new Monster(name, type, hp, defence, speed, strength, attack, exp, level, monster.jokes);
    return monster;
}