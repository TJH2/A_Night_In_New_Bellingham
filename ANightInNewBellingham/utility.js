 // METHODS TO SEARCH MAPS
function changeEvent(event) {
    return events.get(event);
}

function songName(name) {
    return music.get(name);
}

function checkCode(code) {
    return passcode.get(code);
}

function findEnemy(enemy) {
    return enemies.get(enemy);
}

// METHOD FOR CONTINUING GAME
let upload = document.getElementById("upload");
upload.addEventListener('change', () => {
//initialize file reader
let reader = new FileReader();
reader.readAsText(upload.files[0]);
reader.onload = function() {

let information = reader.result.toString();
let array = information.toString().split("\n");
console.log(array);
eventName = array[1].trim(); // trims whitespace from the string value
character.setMaxHP(Number(array[2].trim()));
character.setCurrentHP(Number(array[3].trim()));
character.setMuscle(Number(array[4].trim()));
character.setEdge(Number(array[5].trim()));
character.setJB(Number(array[6].trim()));
character.setTokens(Number(array[7].trim()));
character.weapon.setWeapon(array[8].trim());
character.weapon.setAttacks(array[9].trim(), array[10].trim(), array[11].trim());

displayPage(eventName);
}
});

// METHOD FOR SAVING GAME
let save = document.getElementById("save");
save.addEventListener("click", () => {
    if(window.confirm("Are You Sure You Want To Save Your Game?")) {
        const content = "/* ORDER: Event Name, Max HP, Current HP, Muscle, Edge, JuiceBoxes, Tokens, Weapon, Attack1, Attack2, Attack3 */\n" +
        eventName + "\n" +
        character.getMaxHP() + "\n" +
        character.getCurrentHP() + "\n" +
        character.getMuscle() + "\n" +
        character.getEdge() + "\n" +
        character.getJB() + "\n" +
        character.getTokens() + "\n" +
        character.weapon.getWeapon() + "\n" +
        character.weapon.getAttack1() + "\n" +
        character.weapon.getAttack2() + "\n" +
        character.weapon.getAttack3();

        const link = document.createElement("a"); // creates a tag

        link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        link.download = window.prompt("What Would You Like To Name Your File?"); // name of the file
        link.click();
}
});

// METHOD FOR CLOSING DREAM WINDOW
function closeWindow(window) {
    document.getElementById(window).style.display = "none";
    document.getElementById("dreamText").innerText = "";
    document.getElementById("startDream").style.display = "none";
}

// METHOD FOR CHECKING PASSCODE ANSWER
function checkAnswer() {
    if(document.getElementById("answer").value == checkCode(eventName)) {
        window.alert(currentEvent.getSuccess());
        character.addXP(100);
        displayPage(currentEvent.getLeft());
    }
    else {
        window.alert(currentEvent.getFail());
    }
    document.getElementById("answer").value = "";
    return;
}

// FUNCTION FOR REBOOTING AFTER DEATH
function reboot() {
    closeWindow("reboot");
    character.restock();
    displayPage("start");
}

// COMBAT METHODS ---------------------------------------------------------------------------------------------------------||

//METHOD TO HANDLE ATTACKS IN COMBAT
function battle() {
    document.getElementById("image").classList.toggle("animate");

    setTimeout(function(){ document.getElementById("image").classList.toggle("animate"); }, 500);
    let combatLog;
    let cAttack = characterAttack();

    if(enemy.getHP() <= 0) { // player kills enemy
        enemy.heal(); // heals enemy back up to full health incase you fight them again in the same playthrough
        character.setTokens(enemy.equipment.getTokens() + character.getTokens());
        character.addXP(enemy.getXP());
        character.setJB(enemy.equipment.getJB() + character.getJB());
        combatLog = cAttack + "<br><p>" + currentEvent.getSuccess() + "</p>";
        upgrade();
        normalView();
    }
    
    else {
        combatLog = cAttack + "<br>" + enemyAttack();
    }


    document.getElementById("story").innerHTML = combatLog;

    checkLife(character.getCurrentHP());
    stats();
    return;
}

// METHOD TO ALLOW PLAYERS TO HEAL
function heal() {
    let combatLog;

    if(character.getCurrentHP() < character.getMaxHP() && character.getJB() != 0) { //if able to use cartridge
        character.heal();
        combatLog = "<p>You Expend One Of Your JuiceBoxes And Heal</p>";
    }
    else {
        if(character.getCurrentHP() == character.getMaxHP()) { // if already at full health
            combatLog = "<p>You Are At Full Health.</p>";
        }
        else if(character.getJB() == 0) { // if out of cartridges
            combatLog = "<p>You Are Out Of JuiceBoxes...</p>";
        }
    }

    document.getElementById("story").innerHTML = combatLog + "<br>" + enemyAttack();

    checkLife(character.getCurrentHP()); //if enemy kills hero
    stats();
    return;
}

// METHOD TO ALLOW PLAYERS TO ATTEMPT TO FLEE
function flee() {
    if(character.hitChance() - enemy.getEdge() <= 10) {

        document.getElementById("story").innerHTML = "</p>You Attempt To Flee Unsucessfully</p>" + "<br>" + enemyAttack();
        checkLife(character.getCurrentHP()); //if enemy kills hero
    }
    
    else {
            document.getElementById("story").innerHTML = "<p>You Flee Sucessfully</p>";
            normalView();
    }

    stats();
    return;
}

//PLAYER ATTACK METHOD
function characterAttack() {
    let combatLog;
    let damage = character.dealDamage();
    if(enemy.dodgeChance() < character.hitChance()) {
        enemy.takeDamage(damage);
        combatLog = "<p>You " + character.getAttack() + " " + enemy.getName() +  " With " + character.weapon.getWeapon() +  " For " + damage + " Damage</p>";
    }
    else {
        combatLog = "<p>You Attempt To " + character.getAttack() + " " + enemy.getName() +  " With " + character.weapon.getWeapon() +  " But Miss</p>";
    }
    return combatLog;
}

//ENEMY ATTACK METHOD
function enemyAttack() {
    let combatLog;
    let damage = enemy.dealDamage();
    if(character.dodgeChance() < enemy.hitChance()) {
        character.takeDamage(damage);
        combatLog = enemy.getName() + " " + enemy.getAttack() + " You With Its " + enemy.getWeapon() + " For " + damage  + " Damage</p>";
    }
    else {
        combatLog = "<p>"+ enemy.getName() + " Attempts To " + enemy.getAttack() + " You With Its " + enemy.getWeapon() + " But Misses</p>";
    }

    return combatLog;
}

// METHOD FOR IF PLAYER WINS COMBAT
function win() {
    character.setTokens(enemy.getTokens() + character.getTokens());
    character.addXP(enemy.getXP());
}

function checkLife(health) {
    if(health <= 0) { // if enemy kills player
            document.getElementById("story").innerHTML = "<h2 class='gameOver' style='text-align: center;';>:/**~~GAME OVER~~**/:</h2><br><p class='gameOver' style='text-align: center;'>" + currentEvent.getFail() + "</p>";
            document.getElementById("reboot").style.display = "block";
            deadView();
    }
}

// FUNCTION TO GAIN XP/EQUIPMENT FROM ENEMIES AFTER VICTORY
function upgrade() {
    
    let victory = currentEvent.getSuccess() + "\n\nYour Reward:\n"+ enemy.getXP() + " XP\n" + enemy.equipment.getTokens() + " Tokens\n" + enemy.equipment.getJB() + " JuiceBoxes";
    if(enemy.equipment.weapon.getWeapon() != null && enemy.equipment.weapon.getWeapon() != character.weapon.getWeapon()) {
        victory += "\n\nWhile Pilfering The " + enemy.getName() +"'s Belongings You Find " + enemy.equipment.weapon.getWeapon() + 
        ". It Looks Interesting, But Is It Better Than " + character.weapon.getWeapon() + "?\n\n" +
        "*Replace Current Weapon?*";
        if(window.confirm(victory)) { // PROMPTS HERO TO REPLACE WEAPON
            character.weapon.setWeapon(enemy.equipment.weapon.getWeapon());
            character.weapon.setDamage(enemy.equipment.weapon.getDamage());
            character.weapon.setAttacks(enemy.equipment.weapon.getAttack1(), enemy.equipment.weapon.getAttack2(), enemy.equipment.weapon.getAttack3());
        }
    }

    else {
        window.alert(victory);
    }
        
}

// REFRESH METHODs ---------------------------------------------------------------------------------------------||

// FUNCTION TO REFRESH STAT DISPLAY
function stats() {
    document.getElementById("stats").innerHTML = "<p> | HP: " + character.getCurrentHP() + " | Edge: " + character.getEdge() + " | Muscle: " + character.getMuscle() +" | JuiceBoxes: " + character.getJB() + " | Tokens: " + character.getTokens() + " | XP: " + character.getXP() + " | Level: " + character.getLevel() + " |</p>";
}

// FUNCTION TO REFRESH PAGE DISPLAY DURING EVENT TRANSITION
function displayPage(event) {
    if(event != null ) {
        eventName = event;

        currentEvent = changeEvent(eventName);
        document.getElementById("image").src="images/" + currentEvent.getImage();
        stats();
        document.getElementById("option1").innerText = currentEvent.getOption1();
        document.getElementById("option2").innerText = currentEvent.getOption2();
        document.getElementById("story").innerHTML = currentEvent.getStory();
        document.getElementById("story").scrollTo(0,0);
        if(currentEvent.getSong() != null && document.getElementById("audioName").innerHTML != songName(currentEvent.getSong())) {
            document.getElementById("song").src="audio/" + currentEvent.getSong();
            document.getElementById("audioName").innerHTML = songName(currentEvent.getSong());
        }
        specialEvent(currentEvent.getSpecial());
    }
    else { console.log("DEAD END"); } // IF NO NEW EVENT JUST SAY DEAD END
}

    // SWITCH CASE FOR HANDLING SPECIAL EVENTS
function specialEvent(specialEvent) {
    switch(specialEvent) {
        case "code":
         codeView();
        break;

        case "combat":
         enemy = findEnemy(eventName);
         combatView();
        break;

        case "dream":
            document.getElementById("dream").style.display = "block";
            let i = 0;
                
            let percent = setInterval(function() {
                document.getElementById("complete").innerText = i + "%";
                i++;
                if(i == 101) { 
                    document.getElementById("complete").innerText = "COMPLETE";
                    document.getElementById("dreamText").innerText = eventName;
                    document.getElementById("startDream").style.display = "inline-block";
                    clearInterval(percent); 
                }
                }, 75)
            normalView();
        break;

        case "tower":
            document.getElementById("story").innerHTML = towerDisplay(tower1, tower2, tower3);
            towerView();
        break;

        case "reward":
            character.setTokens(character.getTokens() + 100);
            normalView();
        break;

        case "Death":
            checkLife(-1); // sets like to -1 and ensures player is dead lol
        break;

        case "end":
            document.getElementById("reboot").style.display = "block";
            deadView();
        break;

        default:
            normalView();
        break;
    }
}

// FUNCTIONS FOR DETERMINING LAYOUT OF GAME SCREEN BASED ON EVENTS
// NORMAL EVENTS
function normalView() {
    document.getElementById("passcode").style.display = "none";
    document.getElementById("options").style.display = "block";
    document.getElementById("combat").style.display = "none";
    document.getElementById("towers").style.display = "none";
    if(currentEvent.getOption2() == null) {
        document.getElementById("option2").style.display = "none";
    }
    else { document.getElementById("option2").style.display = "block"; }
}

// PASSCODE EVENTS
function codeView() {
        document.getElementById("passcode").style.display = "inline-block";
        document.getElementById("options").style.display = "none";
        document.getElementById("combat").style.display = "none";
        document.getElementById("towers").style.display = "none";
}

// COMBAT EVENTS
function combatView() {
    document.getElementById("passcode").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("combat").style.display = "inline-block";
    document.getElementById("towers").style.display = "none";
}

// WHEN PLAYER DIES
function deadView() {
    document.getElementById("passcode").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("combat").style.display = "none";
    document.getElementById("towers").style.display = "none";
}

// TOWER EVENT
function towerView() {
    document.getElementById("passcode").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("combat").style.display = "none";
    document.getElementById("towers").style.display = "block";
}
    

// INITIAL CONSTRUCTIOR FOR NEW GAME
displayPage(eventName);