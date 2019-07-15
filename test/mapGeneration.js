class tileSet{
    constructor(name,color,move){
        this.name = name;
        this.color = color;
        this.move = move;
    }
}
function generateMap(){
    let map = [];
    const zoneType = ['forest','dungeon','cave','town'];
    let basicTyle = new tileSet("grass","green",true);
    for (let i = 0;i<10;i++){
        map[i]= [basicTyle,basicTyle,basicTyle,basicTyle,basicTyle,basicTyle,basicTyle,basicTyle,basicTyle,basicTyle,];
    }
    for(let i=0;i<5;i++){
        let first = rng(0,9);
        let second = rng(0,9);
        map[first][second] = new specialGridClass(randomChoice(zoneType));
        console.log(map[first][second].getMap());
    }
    console.log(map);
    return map;
}
function forestZone(){
    let map = [];
    let basicTyle = new tileSet("grass","green",true);
    let exitTyle = new tileSet("exit","grey",true);
    for (let i = 0;i<5;i++){
        map[i]= [exitTyle,basicTyle,basicTyle,basicTyle,basicTyle];
    }
    return map;
}
function dungeonZone(){
    let map = [];
    let basicTyle = new tileSet("rockFloor","brown",true);
    let exitTyle = new tileSet("exit","grey",true);
    for (let i = 0;i<5;i++){
        map[i]= [exitTyle,basicTyle,basicTyle,basicTyle,basicTyle];
    }
    return map;
}
function caveZone(){
    let map = [];
    let basicTyle = new tileSet("rockFloor","brown",true);
    let exitTyle = new tileSet("exit","grey",true);
    for (let i = 0;i<5;i++){
        map[i]= [exitTyle,basicTyle,basicTyle,basicTyle,basicTyle];
    }
    return map;
}
function townZone(){
    let map = [];
    let basicTyle = new tileSet("road","brown",true);
    let exitTyle = new tileSet("exit","grey",true);
    for (let i = 0;i<5;i++){
        map[i]= [exitTyle,basicTyle,basicTyle,basicTyle,basicTyle];
    }
    return map;
}