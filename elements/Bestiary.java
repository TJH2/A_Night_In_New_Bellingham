package elements;
import java.util.HashMap;
import java.util.Random;

public class Bestiary {

    private HashMap<String, Enemy> bestiary;
    private Enemy longjack;
    private Random random = new Random();

    public Bestiary() {
    bestiary = new HashMap<String, Enemy>();
    longjack = new Enemy("Long Jack", 10, 3, 3, "Hands", 25, 25, "Crushes", "Strangles", "Shreds");
    bestiary.put("longjack", longjack);
    }

    public Enemy findEnemy(String event) {
        for(HashMap.Entry<String, Enemy> name : bestiary.entrySet()) {
            String key = name.getKey();
            Enemy value = name.getValue();
            if(key.equals(event)) {
                return value;
            }
    }
    return null;
 }

 public class Enemy {
    private String name;
    private int HP;
    private int damage;
    private int edge;
    private String weapon;
    private int tokens;
    private int XP;
    private String[] attack;

    public Enemy(String name, int HP, int damage, int edge, String weapon, int tokens, int XP, String a1, String a2, String a3) {
       this.name = name;
       this.HP = HP;
       this.damage = damage;
       this.edge = edge;
       this.weapon = weapon;
       this.tokens = tokens;
       this.XP = XP;
       this.attack = new String[3];
       this.attack[0] = a1;
       this.attack[1] = a2;
       this.attack[2] = a3;
    }
    //ACCESSORS
    public String getName() { return this.name;}

    public int getHP() { return this.HP; }

    public int getTokens() { return this.tokens; }

    public int getXP() { return this.XP; }

    public String getWeapon() { return this.weapon; }

    public int getEdge() { return this.edge; }

    public int dealDamage() { 
      int number = random.nextInt(this.damage) + 1;
      return number; }

      public int hitChance() {
        int number = random.nextInt(21) + this.edge;
        return number;
     }

     public int dodgeChance() {
        return 10 + this.edge;
     }

      public String getAttack() { 
        Random random = new Random();
        int number = random.nextInt(this.attack.length);
        return this.attack[number];}
    
        //MUTATORS
    public void takeDamage(int damage) {
        this.HP = this.HP - damage;
    }
 }
}
