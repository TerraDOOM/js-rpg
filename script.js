//----------------------------------------GLOBAL----------------------------

let player = "";
let monster = "";
let currentEvent = "";
let zone = "";



//--------------------------------------------CLASS--------------------------

class Man {
    //constructor
    constructor(name, type, hp, defence, speed, strength, attack, exp) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.maxHP = hp;
        this.defence = defence;
        this.speed = speed;
        this.strength = strength;
        this.attack = attack;
        this.exp = exp;
    }
}
class weapon {
    constructor(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
}
class Player extends Man {
    constructor(name, type, hp, defence, speed, strength, attack) {
        super(name, type, hp, defence, speed, strength, attack, 0);
        this.level = 1;
        this.levelUp = 100;
    }
}
class Monster extends Man {
    constructor() {
        let arrayOfName = ['goblin', 'orc', 'spider','leaver beaver'];
        let name = arrayOfName[rng(0, arrayOfName.length - 1)];
        let type = 'MONSTER';
        let hp = rng(50, 150);
        let maxHP = hp;
        let defence = rng(1, 20);
        let speed = rng(1, 20);
        let strength = rng(1, 20);
        let attack = new weapon("club", 5, 'blunt');
        let exp = Math.floor((defence * speed * strength) / 3);
        super(name, type, hp, defence, speed, strength, attack, exp);
        this.inv = [];
    }
}
class NPC extends Man {
    constructor(){
        let arrayOfName = ['Bee', 'vivi', 'gemini'];
        let name = arrayOfName[rng(0, arrayOfName.length - 1)];
        let type = 'FRIENDLY';
        let hp = rng(50, 150);
        let maxHP = hp;
        let defence = rng(1, 20);
        let speed = rng(1, 20);
        let strength = rng(1, 20);
        let attack = new weapon("club", 5, 'blunt');
        let exp = Math.floor((defence * speed * strength) / 3);
        super(name, type, hp, defence, speed, strength, attack, exp);
        this.inv['good'];
    }
}
class Zone {
    constructor(){
        let zonePossible = ['forest','cave','dungeon'];
        this.zone = zonePossible[rng(0, zonePossible.length - 1)];
        this.maxLevel = 10;
        this.minLevel = 1;
        this.zonePossible = zonePossible;
    }
    generateMonster(){
        let arrayOfName = ['goblin', 'orc', 'spider'];
        let name = arrayOfName[rng(0, arrayOfName.length - 1)];
        let type = 'MONSTER';
        let hp = rng(50, 150);
        let maxHP = hp;
        let defence = rng(1, 20);
        let speed = rng(1, 20);
        let strength = rng(1, 20);
        let attack = new weapon("club", 5, 'blunt');
        let exp = Math.floor((defence * speed * strength) / 3);
        let monster = new Monster(name, type, hp, defence, speed, strength, attack, exp);
        return monster ;
    }
    changeZone(){
        this.minLevel = this.maxLevel + 1;
        this.maxLevel = this.maxLevel + 10;
        this.zone = this.zonePossible[rng(0, this.zonePossible.length - 1)];
    }

}
//---------------------------------------CHANGE UI--------------------------
// start this shit fam
function printClass() {
    //let name = document.getElementById('name').value;
    //let type = document.getElementById('class').value;
    let type = 'warrior';
    let name = "testBoy";
    let hp = 100;
    let defence = 0;
    let speed = 0;
    let strength = 0;
    attack = "";
    switch (type) {
        case "warrior":
            defence = 10;
            speed = 5;
            strength = 11;
            attack = new weapon("sword", 10, 'cut');
            break;
        case "barbarian":
            defence = 5;
            speed = 3;
            strength = 15;
            attack = new weapon("club", 10, 'blunt');
            break;
        case "thief":
            defence = 15;
            speed = 15;
            strength = 8;
            attack = new weapon("dagger", 10, 'poke');
            break;
        case "monk":
            defence = 20;
            speed = 20;
            strength = 20;
            attack = new weapon("cross", 10, 'Holy');
            break;
        default:
            console.log("Your class doesn't! exist naughty boy!");
            return; //forced exit so the game doesn't try to construct a object with no data;
            break;
    }
    zone = new Zone();
    player = new Player(name, type, hp, defence, speed, strength, attack);
    console.log('you are in a ' + zone.zone +' and you are just walking around.')
    eventSetup();
}
//very hard. sorry about that. might change by making functions but lazy atm. ):
function startCombat() {
    monster = zone.generateMonster();
    currentEvent = "combat";
    console.log('OH NO a ' + monster.name + ' spots you! it has a ' + monster.attack.name);
    //change the window layout
    let para = document.createElement("h1"); //create a new html element
    let node = document.createTextNode("Combat Time"); //create a new string
    para.appendChild(node); //puts the string into the html element
    let element = document.getElementById("bigWindow"); //gets already existing html element
    element.appendChild(para); //put the new html element inside of the already existing html element
    let button1 = document.createElement("button");
    let textButton1 = document.createTextNode("Fight");
    let button2 = document.createElement("button");
    let textButton2 = document.createTextNode("Run");
    button1.appendChild(textButton1);
    button2.appendChild(textButton2);
    button1.classList.add('block');
    button2.classList.add('block');
    button1.onclick = function () {
        doAction("fight")
    }; //connecting function to the combat
    button2.onclick = function () {
        doAction("runAway")
    };

    element = document.getElementById("options"); //gets already existing html element
    element.appendChild(button1);
    element.appendChild(button2);
}
//removes every child nodes from both options AND main screen
function clearUI() {
    let myNode = document.getElementById("bigWindow");
    myNode.innerHTML = '';
    myNode = document.getElementById("options");
    myNode.innerHTML = '';
}
// do the event setup shit
function eventSetup() {
    startCombat();

}
//---------------------------------------Technical Shit--------------------------
// random number in the interval [min, max], inclusive
function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateMin(){
    
}
function generateMax(){

}
//---------------------------------------PLAYER ACTION--------------------------
//the monster attacking you
function monsterAttacking() {
    console.log('______________MONSTER ATTACK_____________');
    let randomNumber = rng(1, 30);
    if (randomNumber <= 5) {
        console.log("monster missed oof critical failure");
    } else if (randomNumber >= 26) {
        let damage = rng(10, 20);
        console.log("the monster really didn't miss you on this one! critical success! you lost " + damage * monster.attack.power + " hp");
        player.hp = player.hp - damage * monster.attack.power;
    } else {
        let damage = rng(5, 10);
        console.log("the monster hurts you! you lost " + damage * monster.attack.power + " hp");
        player.hp = player.hp - damage * monster.attack.power;
    }
    return playerStatus();
}
//you attacking monster
function attackMonster() {
    console.log('______________ATTACK MONSTER_____________');
    let randomNumber = rng(1, 30);
    if (randomNumber <= 5) {
        console.log("you miss the monster Critical failure");
    } else if (randomNumber >= 26) {
        let damage = rng(10, 20);
        console.log("You sure showed to that monster who's boss! critical success! you dealt " + damage * player.strength + " damage");
        monster.hp = monster.hp - (damage * player.attack.power);
    } else {
        let damage = rng(5, 10);
        console.log("you hit the monster and deal " + damage * player.strength + " damage");
        monster.hp = monster.hp - (damage * player.attack.power);
    }
    return playerStatus();
}
//running away from the monster
function runAway() {
    console.log('______________RUN AWAY_____________');
    let randomNumber = rng(1, 10);
    if (randomNumber <= 5) {
        console.log("You could not escape :O");
    } else if (randomNumber >= 6) {
        console.log("You manage to run away :D");
        clearUI();
        eventSetup();
    }
}
//decide what you are going to do
function doAction(action) {
    switch (action) {
        case "fight":
            if (player.speed > monster.speed) {
                let maybe = attackMonster();
                if (maybe) monsterAttacking();
            } else if (player.speed <= monster.speed) {
                let maybe = monsterAttacking();
                if (maybe) attackMonster();
            }
            break;
        case "runAway":
            if (player.speed > monster.speed) {
                runAway()
                monsterAttacking();
            } else if (player.speed <= monster.speed) {
                monsterAttacking();
                runAway()
            }
            break;
        default:
            console.log("you gay, or game is bugged");
            break;
    }
}
//leveling up
function levelUp() {
    console.log('______________LEVEL UP_____________');
    while (player.levelUp <= player.exp) {
        player.level = player.level + 1;
        let number = player.level;
        player.levelUp = (1.8 * (number + 100)) + player.levelUp;
        console.log('Congratulations, you leveled up! You are now level ' + player.level);
    }
    console.log('you need ' + player.levelUp + ' xp to level up again');
}
//removes every child nodes from both options AND main screen
function clearUI() {
    let myNode = document.getElementById("bigWindow");
    myNode.innerHTML = '';
    myNode = document.getElementById("options");
    myNode.innerHTML = '';
}

function playerStatus() {
    console.log('______________PLAYER STATUS_____________');
    if (player.hp <= 0) {
        console.log("you lost lmao fuck you");
        clearUI();
        gameOver("killed by a monster");
    } else if (monster.hp <= 0) {
        console.log("the monster died :D");
        console.log("you gained " + monster.exp + " xp")
        player.exp = monster.exp + player.exp;
        if (player.exp >= player.levelUp) {
            levelUp();
        }
        clearUI();
        eventSetup();
    } else {
        console.log("your health: " + player.hp);
        console.log("monster's health: " + monster.hp);
        return true;
    }
}
//game over
function gameOver(causeOfDeath) {
    console.log('______________GAME OVER_____________');
    let para = document.createElement("h1"); //create a new html element
    let node = document.createTextNode("GAME OVER"); //create a new string
    para.appendChild(node); //puts the string into the html element
    let element = document.getElementById("bigWindow"); //gets already existing html element
    element.appendChild(para); //put the new html element inside of the already existing html element
    para = document.createElement("p");
    node = document.createTextNode(causeOfDeath);
    para.appendChild(node);
    element.appendChild(para);
}

//start the script when the whole page is loaded needed for html element to work bc they don't exist when the script executes normally (fix later)
window.onload = printClass;