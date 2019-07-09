class Zone {
    constructor() {
        this.zone = zonePossible[rng(0, zonePossible.length - 1)];
        this.maxLevel = 10;
        this.minLevel = 1;
        this.moveNumber = rng(5, 10);
        this.move = 0;
        switch (this.zone){
            case 'forest':
                this.npcPool = forestNPC;
                this.monsterPool = forestPool;
                break;
            case 'cave':
                this.npcPool = caveNPC;
                this.monsterPool = cavePool;
                break;
            case 'dungeon':
                this.npcPool = dungeonNPC;
                this.monsterPool = dungeonPool;
                break;
        }
    }

    changeZone() {
        this.minLevel = this.maxLevel + 1;
        this.maxLevel = this.maxLevel + 10;
        this.moveNumber = rng(5, 10);
        this.move = 0;
        this.zone = zonePossible[rng(0, zonePossible.length - 1)];
    }

}

