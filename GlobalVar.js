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
        type: 'small'
    }, {
        name: 'goblin',
        type: 'normal'
    }]
};
const cavePool = {
    legendary: {},
    rare: {},
    uncommon: {},
    common: [{
        name: 'orc',
        type: 'big'
    }, {
        name: 'spider',
        type: 'bug'
    }]
};
const dungeonPool = {
    legendary: {},
    rare: {},
    uncommon: {},
    common: [{
        name: 'skeleton',
        type: 'normal'
    }]
};
const weapons = [
    ['club', 10, 'blunt'],
    ['sword', 10, 'cut'],
    ['bow', 10, 'ranged']
];