// GAME CLASSES -------------------------------------------------------------------------------------------------------------------------------

// CHARACTER CLASS
class Character {
    constructor() {
       this.maxHP = 10;
       this.currentHP = 10;
       this.weapon = "Navy Ninja Skills";
       this.attack = new Array();
       this.attack[0] = "Punch";
       this.attack[1] = "Crane Kick";
       this.attack[2] = "Bite";
       this.weaponDamage = 6;
       this.muscle = 0;
       this.edge = 0;
       this.wits = 0;
       this.xp = 0; // character experience
       this.lvl = 1;
       this.tokens = 100;
       this.JB = 5;
    } // end of constructor

  //CHARACTER ACCESSORS
    getMaxHP() {return this.maxHP;}
    getCurrentHP() {return this.currentHP;}
    getMuscle() {return this.muscle;}
    getEdge() {return this.edge;}
    getWits() {return this.wits;}
    getXP() {return this.xp;}
    getLevel() {return this.lvl;}
    getJB() {return this.JB;}
    getTokens() {return this.tokens;}
    getWeapon() {return this.weapon;}
    getAttack1() {return this.attack[0];}
    getAttack2() {return this.attack[1];}
    getAttack3() {return this.attack[2];}

    getAttack() { 
        let number = Math.floor(Math.random() * this.attack.length);
        return this.attack[number];}
    

    dealDamage() {
    let number = Math.floor(Math.random() * this.weaponDamage) + this.muscle + 1;
    return number;}

    hitChance() {
    let number = Math.floor(Math.random() * 21) + this.edge;
    return number;
 }

    dodgeChance() {
    return 10 + this.edge;
 }

 //CHARACTER MUTATORS

 // for loading character

    setMaxHP(maxHP) {this.maxHP = maxHP;}
    setCurrentHP(currentHP) {
                            if(currentHP < this.maxHP) {
                            this.currentHP = currentHP;
                            }
                            else {this.currentHP = this.maxHP; }
                        }
    setMuscle(muscle) {this.muscle = muscle;}
    setEdge(edge) {this.edge = edge;}
    setWits(wits) {this.wits = wits;}
    setXP(xp) {this.xp = xp;}
    setLevel(lvl) {this.lvl = lvl;}
    setJB(JB) {this.JB = JB;}
    setTokens(tokens) {this.tokens = tokens;}
    setWeapon(weapon) {this.weapon = weapon;}
    setAttack1(attack) {this.attack[0] = attack;}
    setAttack2(attack) {this.attack[1] = attack;}
    setAttack3(attack) {this.attack[2] = attack;}

 // ---------------------------------------------------------------------------------------

    heal() {
    this.currentHP = this.maxHP;
    this.JB--;
 }

    restock() {
    this.currentHP = this.maxHP;
    this.JB = this.JB + 5;
 }
 
    takeDamage(damage) {
    this.currentHP = this.currentHP - damage;
 }

    xpIncrease(XP) {
    this.xp = this.xp + XP;
 }

    tokensIncrease(tokens) {
    this.tokens = this.tokens + tokens;
 }
}

// EVENT CLASS
class Event {
    constructor(story, option1, option2, special, success, fail, left, right, image, song) {
       
       this.story = story;
       this.option1 = option1;
       this.option2 = option2;
       this.special = special;
       this.success = success;
       this.fail = fail;
       this.left = left;
       this.right = right;
       this.image = image;
       this.song = song;
    }
    //Accessors
    getStory() {
        return this.story;
    }

    getOption1() {
        return this.option1;
    }

    getOption2() {
        return this.option2;
    }

    getSpecial() {
        return this.special;
    }

    getSuccess() {
        return this.success;
    }
    
    getFail() {
        return this.fail;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }

    getImage() {
        return this.image;
    }

    getSong() {
        return this.song;
    }

 } // end node class path

// ENEMY CLASS
 class Enemy {
    constructor(name, HP, damage, edge, weapon, tokens, XP, a1, a2, a3) {
       this.name = name;
       this.HP = HP;
       this.damage = damage;
       this.edge = edge;
       this.weapon = weapon;
       this.tokens = tokens;
       this.XP = XP;
       this.attack = new Array();
       this.attack[0] = a1;
       this.attack[1] = a2;
       this.attack[2] = a3;
    }

    //ACCESSORS
    getName() { return this.name;}

    getHP() { return this.HP; }

    getTokens() { return this.tokens; }

    getXP() { return this.XP; }

    getWeapon() { return this.weapon; }

    getEdge() { return this.edge; }

    dealDamage() { 
        let number = Math.floor(Math.random() * this.damage) + 1;
      return number; }

      hitChance() {
        let number = Math.floor(Math.random() * 21) + this.edge;
        return number;
     }

     dodgeChance() {
        return 10 + this.edge;
     }

      getAttack() { 
        let number = Math.floor(Math.random() * this.attack.length);
        console.log(number);
        return this.attack[number];}
    
        //MUTATORS
    takeDamage(damage) {
        this.HP = this.HP - damage;
    }
 }