let player = "";
let monster = "";
let currentEvent = "";
let zone = "";
let npc = "";
const forestNPC = [{
    name: 'bee the fairy',
    greetings: ['hello traveler how are you doing on this fine day :D'],
    jokes: ['you sure looks rough don\'t you']
}];
const caveNPC = [{
    name: 'gemini the goblin',
    greetings:['Hey there big guy how yah doing on this fine day? how about resting your feet and drinking some soup!'],
    jokes: ["hey i see you look really messed up my boy try drinking some of my soup it will make you feel a lot better promised"]
}];
const dungeonNPC = [{
    name: 'Amy the medusa',
    greetings: ['OH MY GOSH ARE YOU A HUMAN ?? OH MY GOSH YOU NEED TO STAY HERE FOR THE NIGHT I HAVE SO MANY QUESTIONS'],
    jokes: ["i love love love humans, everyday i watch those old tapes i keep watching them over and over and over again"]
}];
const zonePossible = ['forest', 'cave', 'dungeon'];
const forestPool = {
    legendary: [{
        name:'Green dragon',
        type:'animal',
        jokes:['Hello i am the brother of the forest you must defeat me to gain the power']
    }],
    rare: [{
        name:'lazer emu',
        type:'small',
        jokes:['AY CUNT WTF YO LOOKIN AT ???',' "Fuck your Nukes! Burn in my lasers!"']
    },{
        name:'boxing kangaroo',
        type:'animal',
        jokes:['The dingoes didn\'t steal your baby, I stole your fucking baby!']
        }
    ],
    uncommon: {},
    common: [{
        name: 'slime',
        type: 'small',
        jokes:['']
    }, {
        name: 'goblin',
        type: 'normal',
        jokes:['']
    }, {
        name: 'wolves',
        type: 'animal',
        jokes:['']
    }, {
        name: 'bears',
        type: 'animal',
        jokes:['']
    }, {
        name: 'giant snakes',
        type: 'animal',
        jokes:['']
    }

    ]
};
const cavePool = {
    legendary: [{
        name:'Gold dragon',
        type:'animal',
        jokes:['Hello i am the brother of the cave you must defeat me to gain the power']
    }],
    rare: [{
        name: 'golem',
        type: 'big',
        jokes:['']
    }],
    uncommon: {},
    common: [{
        name: 'orc',
        type: 'big',
        jokes:['']
    }, {
        name: 'spider',
        type: 'bug',
        jokes:['']
    },{
        name:'ogres',
        type:'big',
        jokes:['']
    }]
};
const dungeonPool = {
    legendary: [{
        name:'Gold dragon',
        type:'animal',
        jokes:['Hello i am the brother of the dungeon you must defeat me to gain the power']
    }],
    rare: {},
    uncommon: [{
        name: 'gargoyle',
        type: 'normal',
        jokes:['']
    }],
    common: [{
        name: 'skeleton',
        type: 'normal',
        jokes:['']
    }]
};
const testPool = {
    legendary: [{
        name: 'slime',
        type: 'small',
        jokes:['i\'m going to beat the shit out of you nword']
    }],
    rare: [{
        name: 'slime',
        type: 'small',
        jokes:['i\'m going to beat the shit out of you nword']
    }],
    uncommon: [{
        name: 'slime',
        type: 'small',
        jokes:['i\'m going to beat the shit out of you nword']
    }],
    common: [{
        name: 'slime',
        type: 'small',
        jokes:['i\'m going to beat the shit out of you nword']
    }]
};
const weapons = [
    ['club', 10, 'blunt'],
    ['sword', 10, 'cut'],
    ['bow', 10, 'ranged']
];
