function generateMap(){
    let map = [];
    const zoneType = ['forest','dungeon','cave','town'];
    for (let i = 0;i<10;i++){
        map[i]= ["grass","grass","grass","grass","grass","grass","grass","grass","grass","grass"];
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
    for (let i = 0;i<5;i++){
        map[i]= ["grass","grass","grass","grass","grass"];
    }
    return map;
}
function dungeonZone(){
    let map = [];
    for (let i = 0;i<5;i++){
        map[i]= ["rockFloor","rockFloor","rockFloor","rockFloor","rockFloor"];
    }
    return map;
}
function caveZone(){
    let map = [];
    for (let i = 0;i<5;i++){
        map[i]= ["rockFloor","rockFloor","rockFloor","rockFloor","rockFloor"];
    }
    return map;
}
function townZone(){
    let map = [];
    for (let i = 0;i<5;i++){
        map[i]= ["road","road","road","road","road"];
    }
    return map;
}