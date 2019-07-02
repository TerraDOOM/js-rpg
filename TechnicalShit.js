// random number in the interval [min, max], inclusive
function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calculates the % of a in b
function percentage(a,b){
    return (a/b)*100;
}

function xpForNextLevel(level){
    return Math.floor(10 * ((1 - Math.pow(1.3, level)) / (1 - 1.3)));
}
function baseAptitudeFromLevel(level) {
    return { attack: 10, defense: 10, speed: 10 };
}