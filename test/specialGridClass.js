class specialGridClass{
    constructor(type){
        this.type = type;
        this.map = [];
    }

    getMap(){
        if (this.map.length == 0){
            switch (this.type){
                case 'forest':
                    this.map = forestZone();
                    break;
                case 'dungeon':
                    this.map = dungeonZone();
                    break;
                case 'cave':
                    this.map = caveZone();
                    break;
                case 'town':
                    this.map = townZone();
                    break;
            }
        }
        return this.map;
    }

}