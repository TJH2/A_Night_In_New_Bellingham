// VARAIBLES/OBJECTS

let eventName = "start"; // name of current and event
let enemy; // enemy object
let character = new Character(); // character object
let finalMessage = "P.S. - Try giving the job a try, if you haven't yet!"; // final message of the game
let grunt = new Audio("audio/grunt.wav"); // grunt noise for combat

//WEAPON OBJECTS - Weapon Name, Damage, Attack1, Attack2, Attack 3
let metalArm = new Weapon("A Detached Mechanical Arm", 5, "Bash", "Crush", "Smack");
let rope = new Weapon("A Piece Of Rope", 1, "Slap", "Whip", "Swish");
//EQUIPMENT OBJECTS - Weapon Tokens, JB, Misc
let robotEQ = new Equipment(metalArm, 10, 1, null);
let bindle = new Equipment(rope, 25, 2, null);
//ENEMY OBJECTS - Name, Health, Damage, Edge, XP, Weapon, Attack1, Attack2, Attack3, Equipment
let robot = new Enemy("PN0K.IO", 10, 2, 2, 25, "Mechanical Arm", "Grab", "Punch", "Smash", robotEQ)
let longjack = new Enemy("The Long Jack", 10, 3, 3, 25, "Hands", "Crushes", "Strangles", "Shreds", bindle);

//HASHMAPS
// map for storing music. KVP - file name, presented name in media player
const music = new Map();

music.set("DrivingFastandUsingaCarPhonetoCallthePresentDay.mp3", "Driving Fast And Using A Car Phone To Call The Present Day - Hot Dad");
music.set("Elon_Musk_Hot_Dad.mp3", "Elon Musk - Hot Dad");
music.set("YouShouldBeMyHero.mp3", "You Should Be My Hero - Hot Dad");
music.set("TheThingsWeUsedtoBuy.mp3", "The Things We Used To Buy - Hot Dad");

const enemies = new Map(); // map For storing enemies. KVP - event name, enemy object

enemies.set("theLongJack", longjack);
enemies.set("robotBattle", robot);

const passcode = new Map(); // map for storing passcodes. KVP - event name, answer

passcode.set("garage", 4321);

