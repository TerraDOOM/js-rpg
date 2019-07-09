class NPC extends Man {
    constructor(){
        let name =  zone.npcPool[0].name;
        let type = 'FRIENDLY';
        let hp = rng(50, 150);
        let maxHP = hp;
        let defence = rng(1, 20);
        let speed = rng(1, 20);
        let strength = rng(1, 20);
        let attack = new weapon("club", 5, 'blunt');
        let exp = Math.floor((defence * speed * strength) / 3);
        super(name, type, hp, defence, speed, strength, attack, exp,"","","");
        this.jokes =  zone.npcPool[0].jokes;
        this.greetings = zone.npcPool[0].greetings;
    }
}