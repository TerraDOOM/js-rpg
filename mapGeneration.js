function generateMap(){
    const map = array();
    const zoneType = ['forest','dungeon','cave','town'];
    for (let i = 0;i<10;i++){
        map[i]= ["grass","grass","grass","grass","grass","grass","grass","grass","grass","grass"];
    }
    for(let i=0;i<5;i++){
        map[rng(0,10)][rng(0,10)] = new specialGridClass(randomChoice(zoneType));
    }
    return map;
}
function forestZone(){
    const map = array();
    for (let i = 0;i<5;i++){
        map[i]= ["grass","grass","grass","grass","grass"];
    }
    return map;
}
function dungeonZone(){
    const map = array();
    for (let i = 0;i<5;i++){
        map[i]= ["rockFloor","rockFloor","rockFloor","rockFloor","rockFloor"];
    }
    return map;
}
function caveZone(){
    const map = array();
    for (let i = 0;i<5;i++){
        map[i]= ["rockFloor","rockFloor","rockFloor","rockFloor","rockFloor"];
    }
    return map;
}
function townZone(){
    const map = array();
    for (let i = 0;i<5;i++){
        map[i]= ["road","road","road","road","road"];
    }
    return map;
}