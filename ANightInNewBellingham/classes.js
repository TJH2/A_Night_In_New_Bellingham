// GAME CLASSES -------------------------------------------------------------------------------------------------------------------------------

// EQUIPMNET CLASS
class Equipment {
    constructor(weapon, attack1, attack2, attack3, damage, tokens, JB, misc) {
       this.weapon = weapon;
       this.attack = new Array();
       this.attack[0] = attack1;
       this.attack[1] = attack2;
       this.attack[2] = attack3;
       this.damage = damage;
       this.tokens = tokens;
       this.JB = JB;
       this.misc = misc;
    }
    //Accessors
    getWeapon() {return this.weapon;}
    getAttack(i) {return this.attack[i];}
    getAttackLength() {return this.attack.length;}
    getDamage() { return this.damage;}
    getTokens() {return this.tokens;}
    getJB() {return this.JB;}
    getAttack1() {return this.attack[0];}
    getAttack2() {return this.attack[1];}
    getAttack3() {return this.attack[2];}

    //Mutators
    setWeapon(weapon) {this.weapon = weapon;}
    setAttacks(attack1, attack2, attack3) {
        this.attack[0] = attack1;
        this.attack[1] = attack2;
        this.attack[2] = attack3;
    }
    setDamage(damage) {this.damage = damage;}
    setTokens(tokens) {this.tokens = tokens;}
    setJB(JB) {this.JB = JB;}

    addTokens(tokens) {
        this.tokens += tokens;
    }

}

let equipment = new Equipment("Street Fighting", "Kick", "Punch", "Bite", 5, 100, 5, null); // equipment object


// CHARACTER CLASS
class Character {
    constructor() {
       this.maxHP = 10;
       this.currentHP = 10;
       this.muscle = 0;
       this.edge = 0;
       this.xp = 0; // character experience
       this.lvl = 1;
       this.equipment = equipment;
    } // end of constructor

  //CHARACTER ACCESSORS
    getMaxHP() {return this.maxHP;}
    getCurrentHP() {return this.currentHP;}
    getMuscle() {return this.muscle;}
    getEdge() {return this.edge;}
    getXP() {return this.xp;}
    getLevel() {return this.lvl;}

    getAttack() { 
        let number = Math.floor(Math.random() * this.equipment.getAttackLength());
        return this.equipment.getAttack(number);}
    

    dealDamage() {
    let number = Math.floor(Math.random() * this.equipment.getDamage()) + this.muscle + 1;
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
    setXP(xp) {this.xp = xp;}
    setLevel(lvl) {this.lvl = lvl;}

    addXP(XP) {
        this.xp += XP;
        if(this.xp >= 100) {
            this.xp = this.xp - 100;
            this.lvl++;
            let number = Math.floor(Math.random() * 2);
            let announcement = "You Have Leveled Up!\n"
            if(number == 0) {
                    this.muscle++;
                    this.maxHP++;
                    announcement += "Your Muscle And Health Have Increased By 1.";
            }
            else {
                    announcement += "Your Edge Has Increased By 1.";
                    this.edge++;
            }

            this.currentHP = this.maxHP;
            window.alert(announcement);
        }
    }

 // ---------------------------------------------------------------------------------------

    heal() {
    this.currentHP = this.maxHP;
    this.equipment.setJB(this.equipment.getJB() - 1);
 }

    restock() {
    this.currentHP = this.maxHP;
    this.equipment.setJB(5 + this.equipment.getJB());
 }
 
    takeDamage(damage) {
    this.currentHP = this.currentHP - damage;
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
    constructor(name, HP, damage, edge,  XP, weapon, a1, a2, a3, equipment) {
       this.name = name;
       this.HP = HP;
       this.damage = damage;
       this.edge = edge;
       this.XP = XP;
       this.weapon = weapon;
       this.attack = new Array();
       this.attack[0] = a1;
       this.attack[1] = a2;
       this.attack[2] = a3;
       this.equipment = equipment;
    }

    //ACCESSORS
    getName() { return this.name;}

    getHP() { return this.HP; }

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