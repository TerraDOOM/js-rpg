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
    greetings:[
        'Hey there big guy how yah doing on this fine day? how about resting your feet and drinking some soup!',
        'Well I\'ll be darned, fancy seeing a traveler in this neck of the woods! How\'s about I whip you up some of my original recipe soup and you can tell me about your adventure!',
        'Howdy there stranger! Can I interest you in some fine soup? Family original recipe, passed down through generations! Come get it while it\'s hot!'
    ],
    jokes: ["hey i see you look really messed up my boy try drinking some of my soup it will make you feel a lot better promised",
        "Well shoot, you're looking thinner than ma during the dry season! How's about some fine soup to put some meat on those bones!"]


}];
const dungeonNPC = [{
    name: 'Amy the medusa',
    greetings: ['OH MY GOSH ARE YOU A HUMAN ?? OH MY GOSH YOU NEED TO STAY HERE FOR THE NIGHT I HAVE SO MANY QUESTIONS',
    "Oh my gosh, this can't be happening! A real life human! I'm so exited! Come, come you absolutely have to tell me everything about you and your kind",
    ""],
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
const materiel = ["iron","leather","gold"];
const typeArmor = ["pants","helmet","shirt"];