// Defines constant keys
const statKeys = document.getElementsByClassName(stats)
const descKeys = document.getElementsByClassName(description)
const HPKeys = document.getElementsByClassName(Health)
// This saves all input information using localStorage
function save() {
    for (i=0; i<statKeys.length; i++) {
        window.localStorage.setItem(statKeys[i].id, statKeys[i].value)
    }

    for (i=0; i<descKeys.length; i++) {
        window.localStorage.setItem(descKeys[i].id, descKeys[i].value)
    }

    for (i=0; i<HPKeys.length; i++) {
        window.localStorage.setItem(HPKeys[i].id, HPKeys[i].checked)
    }
    console.log("Saving values");6
}

// Updates all input fields with data held in localStorage
function update() {

    for (i=0; i<statKeys.length; i++) { // Update Stat Keys
        statKeys[i].value = window.localStorage.getItem(statKeys[i].id)
    }

    for (i=0; i<descKeys.length; i++) { // Update Descirption Keys
       descKeys[i].innerHTML = window.localStorage.getItem(descKeys[i].id)
    }

    for (i=0; i<HPKeys.length; i++) { // Update HP Keys
       HPKeys[i].checked = JSON.parse(window.localStorage.getItem(HPKeys[i].id))
    }

    console.log("Updating");
}

// Clears localStorage values, removing any saved intormation
function clear() {
    console.log("Clearing...")
    localStorage.clear();
}

// Clears hitbox selections
function clearHitBox() {
    console.log("Healing");

    for (i=0; i<HPKeys.length; i++) {
        window.localStorage.setItem(HPKeys[i].id, HPKeys[i].checked = false)
    }
}

// Dice roller formula
function getRandomInt(max) {
    return Math.floor(((Math.random() * max)+1)+((Math.random() * max)+1));
}

// Rolls brawn stat
function rollBrawn() {
    if (document.getElementById("useKicker").checked == true) {
        kickerBonus = 1;
        star = ' ★';
    } else {
        kickerBonus = 0;
        star = '';
    }
    var statRoll = window.localStorage.getItem(statKeys.find(i => i.id === "brawnNum"));
    console.log(`Rolling brawn`);
    new Audio('guts/dice.wav').play();
    var result = getRandomInt(8)+Number(statRoll)+kickerBonus;
    document.getElementById("useKicker").checked = false;
    addRoll("Brawn: ",result,star);
    console.log(result, star);
}

// Rolls heart stat 
function rollHeart() {
    if (document.getElementById("useKicker").checked == true) {
        kickerBonus = 1;
        star = ' ★';
    } else {
        kickerBonus = 0;
        star = '';
    }
    var statRoll = window.localStorage.getItem(statKeys.find(i => i.id === "heartNum"));
    console.log(`Rolling heart`);
    new Audio('guts/dice.wav').play();
    var result = getRandomInt(8)+Number(statRoll)+kickerBonus;
    document.getElementById("useKicker").checked = false;
    addRoll("Heart: ",result,star);
    console.log(result, star);
}

// Rolls knack stat
function rollKnack() {
    if (document.getElementById("useKicker").checked == true) {
        kickerBonus = 1;
        star = ' ★';
    } else {
        kickerBonus = 0;
        star = '';
    }
    var statRoll = window.localStorage.getItem(statKeys.find(i => i.id === "knackNum"));
    console.log(`Rolling knack`);
    new Audio('guts/dice.wav').play();
    var result = getRandomInt(8)+Number(statRoll)+kickerBonus;
    document.getElementById("useKicker").checked = false;
    addRoll("Knack: ",result,star);
    console.log(result, star);
}

// Rolls mind stat
function rollBrain() {
    if (document.getElementById("useKicker").checked == true) {
        kickerBonus = 1;
        star = ' ★';
    } else {
        kickerBonus = 0;
        star = '';
    }
    var statRoll = window.localStorage.getItem(statKeys.find(i => i.id === "brainNum"));
    console.log(`Rolling brain`);
    new Audio('guts/dice.wav').play();
    var result = getRandomInt(8)+Number(statRoll)+kickerBonus;
    document.getElementById("useKicker").checked = false;
    addRoll("Brain: ",result,star);
    console.log(result, star);
}

// Rolls power stat
function rollPower() {
    if (document.getElementById("useKicker").checked == true) {
        kickerBonus = 1;
        star = ' ★';
    } else {
        kickerBonus = 0;
        star = '';
    }
    var statRoll = window.localStorage.getItem(statKeys.find(i => i.id === "powerNum"));
    console.log(`Rolling power`);
    new Audio('guts/dice.wav').play();
    var result = getRandomInt(8)+Number(statRoll)+kickerBonus;
    document.getElementById("useKicker").checked = false;
    addRoll("Power: ",result,star);
    console.log(result, star);
}

// Removes logged rolls to prevent overflow
function clearRolls() {
    var lis = document.querySelectorAll('#rollOutputColumn li');
    for(var i=0; li=lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

// Adds rolls to ul with id rollOutputColumn
function addRoll(name, result, star) {
    var ul = document.getElementById("rollOutputColumn");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(name + result + star));
    ul.appendChild(li);
}

// Ensures all elements are loaded
window.onload =function(){
    console.log("Initializing...");
    update();
    document.getElementById("save").onclick = save;
    document.getElementById("healUp").onclick = clearHitBox;
    document.getElementById("brawn").onclick = rollBrawn;
    document.getElementById("heart").onclick = rollHeart;
    document.getElementById("knack").onclick = rollKnack;
    document.getElementById("brain").onclick = rollBrain;
    document.getElementById("power").onclick = rollPower;
    document.getElementById("power").onclick = rollPower;
    document.getElementById("clearRoll").onclick = clearRolls;
}