let player = "";
let monster = "";
let currentEvent = "";
let zone = "";
const zonePossible = ['forest', 'cave', 'dungeon'];
const forestPool = {
    legendary: {},
    rare: {},
    uncommon: {},
    common: [{
        name: 'slime',
        stats: {
            hpMod: 1,
            defMod: 1,
            strMod: 1,
            spdMod: 1
        }
    }, {
        name: 'goblin',
        stats: {
            hpMod: 1,
            defMod: 1,
            strMod: 1,
            spdMod: 1
        }
    }]
};
const cavePool = {
    legendary: {},
    rare: {},
    uncommon: {},
    common: [{
        name: 'orc',
        stats: {
            hpMod: 1,
            defMod: 1,
            strMod: 1,
            spdMod: 1
        }
    }, {
        name: 'spider',
        stats: {
            hpMod: 1,
            defMod: 1,
            strMod: 1,
            spdMod: 1
        }
    }]
};
const dungeonPool = {
    legendary: {},
    rare: {},
    uncommon: {},
    common: [{
        name: 'skeleton',
        stats: {
            hpMod: 1,
            defMod: 1,
            strMod: 1,
            spdMod: 1
        }
    }]
};
const weapons = [
    ['club', 10, 'blunt'],
    ['sword', 10, 'cut'],
    ['bow', 10, 'ranged']
];