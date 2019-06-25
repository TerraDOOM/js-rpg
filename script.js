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
            attack = "sword";
            break;
        case "barbarian":
            defence = 5;
            speed = 3;
            strength = 15;
            attack = "club";
            break;
        case "thief":
            defence = 15;
            speed = 15;
            strength = 8;
            attack = "dagger";
            break;
        case "monk":
            defence = 20;
            speed = 20;
            strength = 20;
            attack = "cross"
            break;
        default:
            console.log("Your class doesn't! exist naughty boy!");
            return; //forced exit so the game doesn't try to construct a object with no data;
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
        let damage = rng(10, 20);
        player.hp = player.hp - rng(10, 20);
    }
    else {
        console.log("the monster hurts you!");
        let damage = rng(5, 10);
        player.hp = player.hp - damage;
    }
    playerStatus();
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
        monster.hp = monster.hp - (rng(5, 10) * player.strength);
    }
    playerStatus();
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
    startCombat();

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
//very hard sorry about that might change by making functions but lazy atm
function startCombat(){
    monster = new Monster();
    currentEvent = "combat";
    //change the window layout
    let para = document.createElement("h1");//create a new html element
    let node = document.createTextNode("Combat Time");//create a new string
    para.appendChild(node);//puts the string into the html element
    let element = document.getElementById("bigWindow");//gets already existing html element
    element.appendChild(para);//put the new html element inside of the already existing html element
    button1 = document.createElement("button");
    textButton1 = document.createTextNode("Fight");
    button2 = document.createElement("button");
    textButton2 = document.createTextNode("Run");
    button1.appendChild(textButton1);
    button2.appendChild(textButton2);
    button1.classList.add('block');
    button2.classList.add('block');
    button1.onclick = attackMonster;//connecting function to the combat
    button2.onclick = runAway;

    element = document.getElementById("options");//gets already existing html element
    element.appendChild(button1);
    element.appendChild(button2);
}

function playerStatus() {
    if (player.hp <= 0) {
        console.log("you lost lmao fuck you");
    }
    else if (monster.hp <= 0){
        console.log("the monster died :D");
    }
    else{
        console.log("your health"+player.hp);
        console.log("monster's health"+ monster.hp);
    }
}
//start the script when the whole page is loaded needed for html element to work bc they don't exist when the script executes normally (fix later)
window.onload =printClass;