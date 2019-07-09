// random number in the interval [min, max], inclusive
function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calculates the % of a in b
function percentage(a, b) {
    return (a / b) * 100;
}

const XP_BASE = 10;
const XP_FACTOR = 1.3;

function xpForNextLevel(level) {
    return Math.floor(XP_BASE * ((1 - Math.pow(XP_FACTOR, level)) / (1 - XP_FACTOR)));
}

// level unused for now
function baseAptitudeFromLevel(level) {
    if (level <= 0) {
        console.log("level is <= 0, this shouldn't happen, setting level to 1");
        level = 1;
    }
    let baseXp = Math.max(Math.floor((xpForNextLevel(level) - xpForNextLevel(level - 1)) / (10 * Math.sqrt(level + 1))), 5);
    let baseSkill = Math.floor(10 * Math.sqrt(level));
    return {
        strength: baseSkill,
        speed: baseSkill,
        hp: 10,
        defence: baseSkill,
        xp: baseXp,
    };
}

let fibArray = [0, 1];

function fib(n) {
    if (typeof fibArray[n] === 'undefined') {
        fibArray[n] = fib(n - 1) + fib(n - 2);
        return fibArray[n];
    } else {
        return fibArray[n];
    }
}

// pick a random element from an array
function randomChoice(array) {
    return array[rng(0, array.length - 1)];
}