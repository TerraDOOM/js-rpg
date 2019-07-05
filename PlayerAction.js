//the monster attacking you
function monsterAttacking() {
    consoleGame(param=['______________MONSTER ATTACK_____________']);
    let randomNumber = rng(1, 30);
    if (randomNumber <= 5) {
        consoleGame(param=["monster missed oof critical failure"]);
    } else if (randomNumber >= 26) {
        let damage = rng(10, 20);
        consoleGame(param=["the monster really didn't miss you on this one! critical success! you lost " + damage * monster.attack.power + " hp"]);
        player.hp = player.hp - damage * monster.attack.power;
    } else {
        let damage = rng(5, 10);
        consoleGame(param=["the monster hurts you! you lost " + damage * monster.attack.power + " hp"]);
        player.hp = player.hp - damage * monster.attack.power;
    }
    return playerStatus();
}
//you attacking monster
function attackMonster() {
    consoleGame(param=['______________ATTACK MONSTER_____________']);
    let randomNumber = rng(1, 30);
    if (randomNumber <= 5) {
        consoleGame(param=["you miss the monster Critical failure"]);
    } else if (randomNumber >= 26) {
        let damage = rng(10, 20);
        consoleGame(param=["You sure showed to that monster who's boss! critical success! you dealt " + damage * player.strength + " damage"]);
        monster.hp = monster.hp - (damage * player.attack.power);
    } else {
        let damage = rng(5, 10);
        consoleGame(param=["you hit the monster and deal " + damage * player.strength + " damage"]);
        monster.hp = monster.hp - (damage * player.attack.power);
    }
    return playerStatus();
}
//running away from the monster
function runAway() {
    consoleGame(param=['______________RUN AWAY_____________']);
    let randomNumber = rng(1, 10);
    if (randomNumber <= 5) {
        consoleGame(param=["You could not escape :O"]);
    } else if (randomNumber >= 6) {
        consoleGame(param=["You manage to run away :D"]);
        clearUI();
        walking();
        return false;
    }
}
//heal the character
function healCharacter(amount){
    player.hp = player.hp + amount;
    if(player.hp > player.maxHP){
        player.hp = player.maxHP;
    }
}
//move up a grid
function walkFront(){
    let possibility = rng(1,30);
    if (possibility <= 15){
        eventSetup('combat');
    }
    else {
        zone.move = zone.move + 1;
        consoleGame(param=['you move 1 frame desu']);
        let oldZone = zone.zone;
        if (zone.moveNumber === zone.move)
        {
            zone.changeZone()
            consoleGame(param=['you got out of the ' + oldZone + ' and now you are in a ' + zone.zone + ' and you are just walking around.']);
        }
    }
}
//rest to heal HP or fight monster
function rest(){
    consoleGame(param=['_______________REST____________']);
    let possibility = rng(1,30);
    if (possibility <= 10){
        consoleGame(param=['you are woken up at night by the sound of rustling']);
        eventSetup('combat');
    }
    else if (possibility >=25){
        consoleGame(param=['you are woken up at night by the sound of rustling']);
        let heal = rng(30,60);
        healCharacter(heal);
        healthBar();
        consoleGame(param=['You meet a lovely lady called gemini she heals you with her ASMR power you regain '+heal+'hp :D']);

    }
    else {
        let heal = rng(20,40);
        healCharacter(heal);
        healthBar();
        consoleGame(param=['you rest a little bit and you feel refreshed you regain '+heal+'hp :D']);

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
                let maybe = runAway();
                if (maybe) monsterAttacking();
            } else if (player.speed <= monster.speed) {
                let maybe = monsterAttacking();
                if (maybe) runAway();
            }
            break;
        case 'Move' :
            walkFront();
            break;
        case 'Rest':
            rest();
            break;
        default:
            console.log("you gay, or game is bugged");
            break;
    }
}
//leveling up
function levelUp() {
    consoleGame(param=['______________LEVEL UP_____________']);
    while (player.levelUp <= player.exp) {
        player.level = player.level + 1;
        let number = player.level;
        player.levelUp = (1.8 * (number + 100)) + player.levelUp;
        consoleGame(param=['Congratulations, you leveled up! You are now level ' + player.level]);
    }
    consoleGame(param=['you need ' + player.levelUp + ' xp to level up again']);
}
//gives the player's status
function playerStatus() {
    consoleGame(param=['______________PLAYER STATUS_____________']);
    if (player.hp <= 0) {
        consoleGame(param=["you lost lmao fuck you"]);
        healthBar();
        clearUI();
        gameOver("killed by a monster");
    } else if (monster.hp <= 0) {
        consoleGame(param=["the monster died :D"]);
        consoleGame(param=["you gained " + monster.exp + " xp"])
        player.exp = monster.exp + player.exp;
        if (player.exp >= player.levelUp) {
            levelUp();
        }
        healthBar();
        clearUI();
        walking();
    } else {
        consoleGame(param=["your health: " + player.hp]);
        consoleGame(param=["monster's health: " + monster.hp]);
        healthBar();
        return true;
    }
}
//game over
function gameOver(causeOfDeath) {
    consoleGame(param=['______________GAME OVER_____________']);
    let para = document.createElement("h1"); //create a new html element
    let node = document.createTextNode("GAME OVER"); //create a new string
    para.appendChild(node); //puts the string into the html element
    let element = document.getElementById("bigWindow"); //gets already existing html element
    element.appendChild(para); //put the new html element inside of the already existing html element
    para = document.createElement("p");
    node = document.createTextNode(causeOfDeath);
    para.appendChild(node);
    element.appendChild(para);
    restartGame();
}
//start the script when the whole page is loaded needed for html element to work bc they don't exist when the script executes normally (fix later)
//window.onload = printClass;