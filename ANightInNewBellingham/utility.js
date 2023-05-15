// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//UTILITY FUNCTIONS 
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FOR CONTINUING GAME

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
character.setWits(Number(array[6].trim()));
character.setJB(Number(array[7].trim()));
character.setTokens(Number(array[8].trim()));
character.setWeapon(array[9].trim());
character.setAttack1(array[10].trim());
character.setAttack2(array[11].trim());
character.setAttack3(array[12].trim());

displayPage(eventName);
}
});

// FOR SAVING GAME

    let save = document.getElementById("save");
    save.addEventListener("click", () => {
    if(window.confirm("Are You Sure You Want To Save Your Game?")) {
        const content = "/* ORDER: Event Name, Max HP, Current HP, Muscle, Edge, Wits, JuiceBoxes, Tokens, Weapon, Attack1, Attack2, Attack3 */\n" +
        eventName + "\n" +
        character.getMaxHP() + "\n" +
        character.getCurrentHP() + "\n" +
        character.getMuscle() + "\n" +
        character.getEdge() + "\n" +
        character.getWits() + "\n" +
        character.getJB() + "\n" +
        character.getTokens() + "\n" +
        character.getWeapon() + "\n" +
        character.getAttack1() + "\n" +
        character.getAttack2() + "\n" +
        character.getAttack3();

        const link = document.createElement("a"); // creates a tag

        link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        link.download = window.prompt("What Would You Like To Name Your File?"); // name of the file
        link.click();
    }
});

// function for closing first game plot
function closeWindow(window) {
    document.getElementById(window).style.display = "none";
    }

function checkAnswer() {
    if(document.getElementById("answer").value == checkCode(eventName)) {
        window.alert("Your Answer Is Correct");
        displayPage(currentEvent.getLeft());
    }
    else {
        window.alert("Your Answer Is Incorrect");
    }
    document.getElementById("answer").value = "";
    return;
}

// function for rebooting after death
function reboot() {
    closeWindow("reboot");
    character.restock();
    displayPage("start");
}
//------------------------------------------------------------------------------------------------------------------------

//COMBAT METHODS

function battle() {
    document.getElementById("image").classList.toggle("animate");

    setTimeout(function(){ document.getElementById("image").classList.toggle("animate"); }, 500);
    let combatLog;
    let cAttack = characterAttack();

    if(enemy.getHP() <= 0) { // player kills enemy
        combatLog = cAttack + "<br><p>It Was A Tough Fight, But You Made It!</p>";
        normalView();
    }
    else {
        combatLog = cAttack + "<br>" + enemyAttack();
    }

    if(character.getCurrentHP() <= 0) { // if enemy kills player
        document.getElementById("reboot").style.display = "block";
        deadView();
    }

    document.getElementById("story").innerHTML = combatLog;

    stats();
    return;
}

function heal() {
    let combatLog;

    if(character.getCurrentHP() < character.getMaxHP() && character.getJB() != 0) { //if able to use cartridge
        character.heal();
        combatLog = "<p>You Expend One Of Your Cartridges And Heal</p>";
    }
    else {
        if(character.getCurrentHP() == character.getMaxHP()) { // if already at full health
            combatLog = "<p>You Are At Full Health.</p>";
        }
        else if(character.getJB() == 0) { // if out of cartridges
            combatLog = "<p>You Are Out Of Cartridges...</p>";
        }
    }

    document.getElementById("story").innerHTML = combatLog + "<br>" + enemyAttack();

    if(character.getCurrentHP() <= 0) { // if enemy kills player
        document.getElementById("reboot").style.display = "block";
        deadView();
    }

    stats();
    return;
}

function flee() {
    if(character.hitChance() - enemy.getEdge() <= 10) {

        document.getElementById("story").innerHTML = "</p>You Attempt To Flee Unsucessfully</p>" + "<br>" + enemyAttack();

        if(character.getCurrentHP() <= 0) { // if enemy kills player
            document.getElementById("reboot").style.display = "block";
            deadView();
        }
    }
    
    else {
            document.getElementById("story").innerHTML = "<p>You Flee Sucessfully</p>";
            normalView();
    }

    stats();
    return;
}


//character ATTACK METHOD
function characterAttack() {
    let combatLog;
    let damage = character.dealDamage();
    if(enemy.dodgeChance() < character.hitChance()) {
        enemy.takeDamage(damage);
        combatLog = "<p>You " + character.getAttack() + " " + enemy.getName() +  " With Your " + character.getWeapon() +  " For " + damage + " Damage</p>";
    }
    else {
        combatLog = "<p>You Attempt To " + character.getAttack() + " " + enemy.getName() +  " With Your " + character.getWeapon() +  " But Miss</p>";
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

    // ------------------------------------------------------------------------------------------------------------------------------------------------//
    // REFRESH METHODs
    // -----------------------------------------------------------------------------------------------------------------------------------------------//
    function stats() {
        document.getElementById("stats").innerHTML = "<p>HP: " + character.getCurrentHP() + " Wits: " + character.getWits() + " Edge: " + character.getEdge() + " Muscle: " + character.getMuscle() +" JuiceBoxes: " + character.getJB() + " Tokens: " + character.getTokens() + " XP: " + character.getXP() + " Level: " + character.getLevel() + "</p>";
    }

    function displayPage(event) {
        if(event != null ) {
        eventName = event;
        enemy = findEnemy(event);
        currentEvent = changeEvent(eventName);
        document.getElementById("image").src="images/" + currentEvent.getImage();
        stats();
        document.getElementById("option1").innerHTML = currentEvent.getOption1();
        document.getElementById("option2").innerHTML = currentEvent.getOption2();
        document.getElementById("story").innerHTML = currentEvent.getStory();
        document.getElementById("story").scrollTo(0,0);
        if(currentEvent.getSong() != null) {
            document.getElementById("song").src="audio/" + currentEvent.getSong();
            document.getElementById("audioName").innerHTML = songName(currentEvent.getSong());
        }
        specialEvent(currentEvent.getSpecial());
        }
        else { console.log("DEAD END"); }
    }

    // SWITCH CASE FOR SPECIAL EVENTS
    function specialEvent(specialEvent) {
        switch(specialEvent) {
            case "code":
            codeView();
            break;
            case "combat":
            combatView();
            break;
            case "dream":
            document.getElementById("dream").style.display = "block";
            normalView();
            break;
            default:
            normalView();
            break;
        }
    }

    // INPUT VIEWS
    function normalView() {
        document.getElementById("passcode").style.display = "none";
        document.getElementById("options").style.display = "block";
        document.getElementById("combat").style.display = "none";
    }

    function codeView() {
            document.getElementById("passcode").style.display = "inline-block";
            document.getElementById("options").style.display = "none";
            document.getElementById("combat").style.display = "none";
    }

    function combatView() {
        document.getElementById("passcode").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("combat").style.display = "inline-block";
    }

    function deadView() {
        document.getElementById("passcode").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("combat").style.display = "none";
    }
    

    // INITIAL CONSTRUCTIOR FOR NEW GAME
    displayPage(eventName);