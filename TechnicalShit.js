// random number in the interval [min, max], inclusive
function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calculates the % of a in b
function percentage(a, b) {
    return (a / b) * 100;
}

function xpForNextLevel(level) {
    return Math.floor(10 * ((1 - Math.pow(1.3, level)) / (1 - 1.3)));
}

// level unused for now
function baseAptitudeFromLevel(level) {
    if (level <= 0) {
        console.log("level is <= 0, this shouldn't happen, setting level to 1");
        level = 1;
    }
    let baseXp = Math.floor((xpForNextLevel(10) - xpForNextLevel(9)) / (10 * Math.log(11)));
    console.log(baseXp);
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