let player = "";
let monster = "";
let currentEvent = "";
//this is the big git test haha i'm so fucking funny i hate my life 
// but it worked out uwu
//here is the funny test haha
class Man {
    //constructor
    constructor(name, type, hp, defence, speed, strength, attack) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.maxHP = hp;
        this.defence = defence;
        this.speed = speed;
        this.strength = strength;
        this.attack = attack;

    }
}
class Player extends Man{
    constructor(name, type, hp, defence, speed, strength, attack){
        super(name, type, hp, defence, speed, strength, attack);
        this.level = 1;
    }
}
class Monster extends Man{
    constructor(){
        let arrayOfName = ['goblin','orc','spider'];
        let name = arrayOfName[rng(0,arrayOfName.length)];
        let type = arrayOfName[rng(0,arrayOfName.length)];
        let hp = rng(50,150);
        let maxHP = hp;
        let defence = rng(1,20);
        let speed = rng(1,20);
        let strength = rng(1,20);
        let attack = "club";
        super(name, type, hp, defence, speed, strength, attack);
    }


}
// start this shit fam
function printClass() {
    let name = document.getElementById('name').value;
    let type = document.getElementById('class').value;
    let hp = 100;
    let defence = 0;
    let speed = 0;
    let strength = 0;
    this.attack = "";
    switch (type) {
        case "warrior":
            let defence = 10;
            let speed = 5;
            let strength = 11;
            this.attack = "sword";
            break;
        case "barbarian":
            let defence = 5;
            let speed = 3;
            let strength = 15;
            this.attack = "club";
            break;
        case "thief":
            let defence = 15;
            let speed = 15;
            let strength = 8;
            this.attack = "dagger";
            break;
        case "monk":
            let defence = 20;
            let speed = 20;
            let strength = 20;
            this.attack = "cross"
            break;
        default:
            console.log("it broke :(((");
            break;
    }
    
    player = new Player(name, type, hp, defence, speed, strength, attack);
    eventSetup();
    console.log(player.attack);//first test
}

// random number in the interval [min, max], inclusive
function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function monsterAttacking() {
    let randomNumber = rng(1, 30);
    if (randomNumber <= 5) {
        console.log("monster missed oof critical failure");
    } else if (randomNumber >= 26) {
        console.log("the monster really didn't miss you on this one critical success");
        player.hp = player.hp - rng(10, 20);
    }
    else {
        console.log("the monster hurts you!");
        player.hp = player.hp - rng(5, 10);
    }
}

function attackMonster() {
    let randomNumber = rng(1, 30);
    if (randomNumber <= 5) {
        console.log("you miss the monster Critical failure");
    } else if (randomNumber >= 26) {
        console.log("You sure showed to that monster who's boss! critical success");
        monster.hp = monster.hp - (rng(10, 20) * player.strength);
    }
    else {
        console.log("you hit the monster");
        player.hp = player.hp - (rng(5, 10) * player.strength);
    }
}

function doAction(action) {
    switch (action) {
        case "fight":
            // do stuff
            break;
        case "runAway":
            runAway()
            break;
        default:
            console.log("you gay, or game is bugged");
            break;
    }
}

// do the event setup shit
function eventSetup() {
    generateMonster();
    // TODO: change to event layout...
}

function runAway() {
    let randomNumber = rng(1, 10);
    if (randomNumber <= 5) {
        console.log("You could not escape :O");
    } else if (randomNumber >= 6) {
        console.log("You manage to run away :D");
        generateEvent();
    }
}
function generateMonster(){
    monster = new Monster();
    currentEvent = "combat";
}
function playerStatus() {
    if (player.hp <= 0) {
        console.log("you lost lmao fuck you");
    }
}