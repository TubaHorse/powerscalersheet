/* Defines constant keys */
const [brawnKey, heartKey, knackKey, brainKey, powerKey, nameKey, codenameKey, rankKey, repKey, bodyKey, box1Key, box2Key, box3Key, box4Key, box5Key, box6Key, box7Key, box8Key, box9Key, box10Key, equipKey, powDescKey, kickerKey, bodyFeatKey] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

/* Old function from beginning of development */
function test() {
    var brawnNum = document.getElementById("brawnNum").value;
    var heartNum = document.getElementById("heartNum").value;
    var knackNum = document.getElementById("knackNum").value;
    var brainNum = document.getElementById("brainNum").value;
    var powerNum = document.getElementById("powerNum").value;
    
    console.log('Value check', brawnNum, heartNum, knackNum, brainNum, powerNum); /* logs strand values */
    console.log('Name check', document.getElementById("title").value); /* logs name value */
    console.log('Key check', brawnKey, heartKey, knackKey, brainKey, powerKey, nameKey); /* logs key values */
}

/* This saves all input information using localStorage */
function save() {
    var brawnNum = document.getElementById("brawnNum").value;
    var heartNum = document.getElementById("heartNum").value;
    var knackNum = document.getElementById("knackNum").value;
    var brainNum = document.getElementById("brainNum").value;
    var powerNum = document.getElementById("powerNum").value;
    var nameValue = document.getElementById("title").value;
    var codenameValue = document.getElementById("subtitle").value;
    var bodyValue = document.getElementById("bodyType").value;
    var rankValue = document.getElementById("rankNum").value;
    var repValue = document.getElementById("reputationNum").value;
    var equipValue = document.getElementById("equipmentBox").value;
    var powerValue = document.getElementById("powerBox").value;
    var kickerValue = document.getElementById("kickerBox").value;
    var bodyFeatValue = document.getElementById("bodyBox").value;

    var box1Value = document.getElementById('box1');
    var box2Value = document.getElementById('box2');
    var box3Value = document.getElementById('box3');
    var box4Value = document.getElementById('box4');
    var box5Value = document.getElementById('box5');
    var box6Value = document.getElementById('box6');
    var box7Value = document.getElementById('box7');
    var box8Value = document.getElementById('box8');
    var box9Value = document.getElementById('box9');
    var box10Value = document.getElementById('box10');

    window.localStorage.setItem(brawnKey, brawnNum); /* Stores input strand values */
    window.localStorage.setItem(heartKey, heartNum);
    window.localStorage.setItem(knackKey, knackNum);
    window.localStorage.setItem(brainKey, brainNum);
    window.localStorage.setItem(powerKey, powerNum);
    window.localStorage.setItem(nameKey, nameValue); /* Stores input name value */
    window.localStorage.setItem(codenameKey, codenameValue); /* Stores input codename value */
    window.localStorage.setItem(bodyKey, bodyValue); /* Stores body type value */
    window.localStorage.setItem(rankKey, rankValue); /* Stores rank value */
    window.localStorage.setItem(repKey, repValue); /* Stores reputation value */
    window.localStorage.setItem(equipKey, equipValue); /* Stores equipment value */
    window.localStorage.setItem(powDescKey, powerValue); /* Stores power description */
    window.localStorage.setItem(kickerKey, kickerValue); /* Stores kicker proficiencies */
    window.localStorage.setItem(bodyFeatKey, bodyFeatValue); /* Stores body feature */

    window.localStorage.setItem(box1Key, box1Value.checked); /* Stores hitbox values */
    window.localStorage.setItem(box2Key, box2Value.checked);
    window.localStorage.setItem(box3Key, box3Value.checked);
    window.localStorage.setItem(box4Key, box4Value.checked);
    window.localStorage.setItem(box5Key, box5Value.checked);
    window.localStorage.setItem(box6Key, box6Value.checked);
    window.localStorage.setItem(box7Key, box7Value.checked);
    window.localStorage.setItem(box8Key, box8Value.checked);
    window.localStorage.setItem(box9Key, box9Value.checked);
    window.localStorage.setItem(box10Key, box10Value.checked);
    console.log("Saving values");
}

/*Updates all input fields with data held in localStorage */
function update() {
    var brawnRecord = window.localStorage.getItem(brawnKey);
    var heartRecord = window.localStorage.getItem(heartKey);
    var knackRecord = window.localStorage.getItem(knackKey);
    var brainRecord = window.localStorage.getItem(brainKey);
    var powerRecord = window.localStorage.getItem(powerKey);
    var nameRecord = window.localStorage.getItem(nameKey);
    var codenameRecord = window.localStorage.getItem(codenameKey);
    var bodyRecord = window.localStorage.getItem(bodyKey);
    var rankRecord = window.localStorage.getItem(rankKey);
    var repRecord = window.localStorage.getItem(repKey);
    var equipRecord = window.localStorage.getItem(equipKey);
    var powerBoxRecord = window.localStorage.getItem(powDescKey);
    var kickerRecord = window.localStorage.getItem(kickerKey);
    var bodyFeatRecord = window.localStorage.getItem(bodyFeatKey);

    var box1Record = JSON.parse(window.localStorage.getItem(box1Key));
    var box2Record = JSON.parse(window.localStorage.getItem(box2Key));
    var box3Record = JSON.parse(window.localStorage.getItem(box3Key));
    var box4Record = JSON.parse(window.localStorage.getItem(box4Key));
    var box5Record = JSON.parse(window.localStorage.getItem(box5Key));
    var box6Record = JSON.parse(window.localStorage.getItem(box6Key));
    var box7Record = JSON.parse(window.localStorage.getItem(box7Key));
    var box8Record = JSON.parse(window.localStorage.getItem(box8Key))
    var box9Record = JSON.parse(window.localStorage.getItem(box9Key));
    var box10Record = JSON.parse(window.localStorage.getItem(box10Key));

    document.getElementById('brawnNum').value = brawnRecord; /* Reloads input strand values */
    document.getElementById('heartNum').value = heartRecord;
    document.getElementById('knackNum').value = knackRecord;
    document.getElementById('brainNum').value = brainRecord;
    document.getElementById('powerNum').value = powerRecord;
    document.getElementById('title').innerHTML = nameRecord; /* Reloads name */
    document.getElementById('subtitle').innerHTML = codenameRecord; /* Reloads codename */
    document.getElementById('bodyType').innerHTML = bodyRecord; /* Reloads body type */
    document.getElementById('rankNum').value = rankRecord; /* Reloads rank */
    document.getElementById('reputationNum').value = repRecord; /* Reloads reputation */
    document.getElementById('equipmentBox').innerHTML = equipRecord; /* Reloads equipment */
    document.getElementById('powerBox').innerHTML = powerBoxRecord; /* Reloads power description */
    document.getElementById('kickerBox').innerHTML = kickerRecord; /* Reloads kicker proficiencies */
    document.getElementById('bodyBox').innerHTML = bodyFeatRecord; /* Reloads body feature */

    document.getElementById('box1').checked = box1Record; /* Reloads hitboxes */
    document.getElementById('box2').checked = box2Record;
    document.getElementById('box3').checked = box3Record;
    document.getElementById('box4').checked = box4Record;
    document.getElementById('box5').checked = box5Record;
    document.getElementById('box6').checked = box6Record;
    document.getElementById('box7').checked = box7Record;
    document.getElementById('box8').checked = box8Record;
    document.getElementById('box9').checked = box9Record;
    document.getElementById('box10').checked = box10Record;
    console.log("Updating");
}

function clear() {
    console.log("Clearing...")
    localStorage.clear();
}

function clearHitBox() {
    console.log("Healing");
    var box1Value = document.getElementById('box1').checked = false;
    window.localStorage.setItem(box1Key, box1Value);
    var box2Value = document.getElementById('box2').checked = false;
    window.localStorage.setItem(box2Key, box2Value);
    var box3Value = document.getElementById('box3').checked = false;
    window.localStorage.setItem(box3Key, box3Value);
    var box4Value = document.getElementById('box4').checked = false;
    window.localStorage.setItem(box4Key, box4Value);
    var box5Value = document.getElementById('box5').checked = false;
    window.localStorage.setItem(box5Key, box5Value);
    var box6Value = document.getElementById('box6').checked = false;
    window.localStorage.setItem(box6Key, box6Value);
    var box7Value = document.getElementById('box7').checked = false;
    window.localStorage.setItem(box7Key, box7Value);
    var box8Value = document.getElementById('box8').checked = false;
    window.localStorage.setItem(box8Key, box8Value);
    var box9Value = document.getElementById('box9').checked = false;
    window.localStorage.setItem(box9Key, box9Value);
    var box10Value = document.getElementById('box10').checked = false;
    window.localStorage.setItem(box10Key, box10Value);
}

window.onload =function(){
    console.log("Initializing...");
    update();
    document.getElementById("save").onclick = save;
    document.getElementById("healUp").onclick = clearHitBox;
}