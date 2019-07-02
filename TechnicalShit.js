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
function baseAptitudeFromLevel(_level) {
    console.log("baseAptitudeFromLevel is still not fully implemented");
    return {
        strength: 10,
        speed: 10,
        hp: 10,
        defence: 10,
        xp: 10 // shrug
    };
}

// pick a random element from an array
function randomChoice(array) {
    return array[rng(0, array.length - 1)];
}