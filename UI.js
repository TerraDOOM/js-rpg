function setUpGame(){
    let body = document.getElementsByTagName('body');
    let UI = '            <audio loop autoplay volume="0.0">\n' +
        '                <source src="files/music/Pokemon-Dont Ever Forget.mp3">\n' +
        '            </audio>\n' +
        '<div id="mainWindow">\n' +
        '        <div id="bigWindow"></div>\n' +
        '        <div id="inventory">\n' +
        '            <div id="heathRed" style="background-color: #dc0700; width: 100%; height: 10%;">\n' +
        '                <div id="healthGreen" style="margin-top: 10px;background-color: #4CAF50; width: 100%; height: 100%;"></div>\n' +
        '            </div>\n' +
        '            <div id="stat">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div id="options"></div>\n' +
        '    </div>\n' +
        '    <div id="smallConsole"></div>';
    body[0].innerHTML = "";
    body[0].innerHTML = UI;
}
function setUpCreation(){
    let body = document.getElementsByTagName('body');
    let Ui = '<div id="createCharacter">\n' +
        '            <audio loop autoplay volume="0.0">\n' +
        '                <source src="files/music/Stellardrone-Eternity.mp3">\n' +
        '            </audio>\n' +
        '            <h1>Welcome to Infinity Dungeon</h1>\n' +
        '            <h2>Where the ride never ends!</h2>\n' +
        '            <h3 class="white">Create Your character!</h3>\n' +
        '            <table align="center">\n' +
        '                <tr>\n' +
        '                    <td>\n' +
        '                        <p>Name :</p>\n' +
        '                    <td><input type="text" id="name"></td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>\n' +
        '                        <p>Class</p>\n' +
        '                    </td>\n' +
        '                    <td><select id="class">\n' +
        '                            <option value="warrior">Warrior</option>\n' +
        '                            <option value="barbarian">Barbarian</option>\n' +
        '                            <option value="thief">Thief</option>\n' +
        '                            <option value="monk">Monk</option>\n' +
        '                        </select>\n' +
        '                </tr>\n' +
        '            </table>\n' +
        '            <button onclick="printClass()">make character</button>\n' +
        '            <p><a href="https://www.youtube.com/watch?v=m-0H4HOATOM">music source</a></p>\n' +
        '        </div>\n' +
        '\n';
    body[0].innerHTML = "";
    body[0].innerHTML = Ui;
}
// start this shit fam
function printClass() {
    let name = document.getElementById('name').value;
    let type = document.getElementById('class').value;
    //let type = 'warrior';
    //let name = "testBoy";
    let hp = 100;
    let defence = 0;
    let speed = 0;
    let strength = 0;
    let attack = { name: "", power: "" , type: ""};
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
            consoleGame(param=["Your class doesn't! exist naughty boy!"]);
            consoleGame(param=[player.attack]);
            return; //forced exit so the game doesn't try to construct a object with no data;
            break;
    }
    setUpGame();
    zone = new Zone();
    player = new Player(name, type, hp, defence, speed, strength, attack);
    displayStat();
    consoleGame(param=['you are in a ' + zone.zone +' and you are just walking around.']);
    walking();
}
//very hard. sorry about that. might change by making functions but lazy atm. ):
function startCombat() {
    clearUI();
    monster = generateMonster(testPool,1);
    currentEvent = "combat";
    consoleGame(param=['OH NO a ' + monster.name + ' spots you! it has a ' + monster.attack.name]);
    consoleGame(param=[monster.arrayOfJokes[0]]);
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
    let audio = document.getElementsByTagName("audio");
    audio.innerHTML = '<source src="files/music/Stellardrone-Eternity.mp3">';
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
//meet an npc
function startFriendly(){
    clearUI();
    npc = new NPC;
    currentEvent = "friendly";
    consoleGame(param=["you see "+npc.name,npc.greetings[rng(0, npc.greetings.length - 1)]]);
    //change the window layout
    let para = document.createElement("h1"); //create a new html element
    let node = document.createTextNode("NPC TIME"); //create a new string
    para.appendChild(node); //puts the string into the html element
    let element = document.getElementById("bigWindow"); //gets already existing html element
    element.appendChild(para); //put the new html element inside of the already existing html element
    let button1 = document.createElement("button");
    let textButton1 = document.createTextNode("talk");
    let button2 = document.createElement("button");
    let textButton2 = document.createTextNode("rest");
    button1.appendChild(textButton1);
    button2.appendChild(textButton2);
    button1.classList.add('block');
    button2.classList.add('block');
    button1.onclick = function () {
        doAction("talk")
    }; //connecting function to the combat
    button2.onclick = function () {
        doAction("npcRest")
    };

    element = document.getElementById("options"); //gets already existing html element
    element.appendChild(button1);
    element.appendChild(button2);
    soundTime("Stellardrone-Eternity.mp3");
}
//function to walk around desu
function walking(){
    let para = document.createElement("h1"); //create a new html element
    let node = document.createTextNode("Walking Time"); //create a new string
    para.appendChild(node); //puts the string into the html element
    let element = document.getElementById("bigWindow"); //gets already existing html element
    element.appendChild(para); //put the new html element inside of the already existing html element
    let button1 = document.createElement("button");
    let textButton1 = document.createTextNode("Move");
    let button2 = document.createElement("button");
    let textButton2 = document.createTextNode("Rest");
    button1.appendChild(textButton1);
    button2.appendChild(textButton2);
    button1.classList.add('block');
    button2.classList.add('block');
    button1.onclick = function () {
        doAction("Move")
    }; //connecting function to the combat
    button2.onclick = function () {
        doAction("Rest")
    };

    element = document.getElementById("options"); //gets already existing html element
    element.appendChild(button1);
    element.appendChild(button2);
    soundTime("Pokemon-Dont Ever Forget.mp3");
}
//removes every child nodes from both options AND main screen
function clearUI() {
    let myNode = document.getElementById("bigWindow");
    myNode.innerHTML = '';
    myNode = document.getElementById("options");
    myNode.innerHTML = '';
}
// do the event setup shit
function eventSetup(type) {
    switch (type) {
        case 'combat':
            startCombat();
            break;
        case 'friendly':
            startFriendly();
        default:
            break;
    }

}
//display shit in the console
function consoleGame(params){
    let element = document.getElementById("smallConsole"); //gets already existing html element
    for (i=0; i<params.length; i++) {
        let para = document.createElement("p");
        let node = document.createTextNode(params[i]);
        para.appendChild(node);
        element.appendChild(para);
    }
    let para = document.createElement("hr");
    element.appendChild(para);
}
function restartGame(){
    let element = document.getElementById("bigWindow"); //gets already existing html element
    let button1 = document.createElement("button");
    let textButton1 = document.createTextNode("Restart");
    button1.appendChild(textButton1);
    button1.classList.add('block');
    button1.onclick = function () {
        setUpCreation()
    }; //connecting function to the combat
    element.appendChild(button1);

}
//change the health bar
function healthBar(){
    document.getElementById('healthGreen').style.width = percentage(player.hp,player.maxHP);
}
function soundTime(music){
    let audio = document.getElementsByTagName("audio");
    audio[0].innerHTML = '<source src="files/music/'+music+'">';
}
function displayImage(imgSRC) {
}
function displayStat(){
    let statWindow =document.getElementById('stat');
    statWindow.innerHTML =
        '<p>strength: '+player.strength+'</p>' +
        '<p>speed: '+player.speed+'</p>' +
        '<p>defence: '+player.defence+'</p>' +
        '<p>weapon: '+player.attack.name+'</p>';
}