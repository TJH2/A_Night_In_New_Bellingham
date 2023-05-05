package elements;
import java.util.Random;

public class Character {
      private int maxHP;
      private String weapon;
      private String[] attack;
      private int weaponDamage;

      // DISPLAY
      private int currentHP;
      private int muscle; // character strength
      private int edge; // character dex
      private int wits; // character intellegence
      private int xp; // character experience
      private int lvl;
      private int tokens;
      private int JB;

      private Random random = new Random();

      public Character() {
         this.maxHP = 10;
         this.currentHP = 10;
         this.weapon = "Navy Ninja Skills";
         this.attack = new String[3];
         this.attack[0] = "Punch";
         this.attack[1] = "Crane Kick";
         this.attack[2] = "Bite";
         this.weaponDamage = 6;
         this.muscle = 0;
         this.edge = 0;
         this.wits = 0;
         this.xp = 0; // character experience
         this.lvl = 0;
         this.tokens = 100;
         this.JB = 5;
      } // end of constructor

    //CHARACTER ACCESSORS
   public int getMaxHP() {return this.maxHP;}

   public int getCurrentHP() {return this.currentHP;}

   public int getMuscle() {return this.muscle;}

   public int getEdge() {return this.edge;}

   public int getWits() {return this.wits;}

   public int getXP() {return this.xp;}

   public int getLevel() {return this.lvl;}

   public int getJB() {return this.JB;}

   public int getTokens() {return this.tokens;}

   public String getWeapon() {return this.weapon;}

   public int dealDamage() {
      int number = random.nextInt(this.weaponDamage) + this.muscle + 1;
      return number;}

   public int hitChance() {
      int number = random.nextInt(21) + this.edge;
      return number;
   }

   public int dodgeChance() {
      return 10 + this.edge;
   }

   public String getAttack() { 
      int number = random.nextInt(this.attack.length);
      return this.attack[number];}
   
   //CHARACTER MUTATORS

   public void heal() {
      this.currentHP = this.maxHP;
      this.JB--;
   }

   public void restock() {
      this.currentHP = this.maxHP;
      this.JB = this.JB + 5;
   }
   
   public void takeDamage(int damage) {
      this.currentHP = this.currentHP - damage;
   }

   public void xpIncrease(int XP) {
      this.xp = this.xp + XP;
   }

   public void tokensIncrease(int tokens) {
      this.tokens = this.tokens + tokens;
   }
}
