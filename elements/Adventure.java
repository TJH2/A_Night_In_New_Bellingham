package elements;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Scanner;

public class Adventure {
   private HashMap<String, Event> story;
   private Event currentEvent;
   private String currentEventName;
    
   public Adventure() {

      story = new HashMap<String, Event>();

      /*
         // EVEN TEMPLATE
         Event eventname =
         new Event(
         , // story
         , // option 1
         , //option 2
         , // specialEvent
         , // success
         , // fail
         , // event Left
         , // event right
         , // image
          // song
         );

      */
      

      Event start = 
      new Event(
      "EVERY DAY FEELS THE SAME: WAKE UP, DO A GIG, GO HOME, SLEEP, REPEAT. I FEEL LIKE I'M STUCK IN A LOOP WITH NO ESCAPE.\n\n" +
      "JS - \"HD... WERE YOU DAY DREAMING AGAIN?! You asked me to grab you some SpazzRazz for your JuiceBox from the back, and when I get back you're in la-la land!\"\n\n" +
      "JS, ex-Edger turned counter-monkey at Sugarz. Since vaping got outlawed a few years back, every nicotine fiend in the city makes their way to Sugarz to get their JuiceBoxes: small boxes that hook into the arm, injecting a cocktail of nicotine and morphine into the viens. I love having a hook-up at the shop, getting to try all the fringe flavors, and having a friend tht has their ear to the ground doesn't hurt either, but damn... JS can be really annoying...\n\n" +
      "JS - \"Well?! Are you interested in a gig tonight, or not?", // story
      "Get Info On The Gig", // option 1
      "Not Interested [Leave The Store]", //option 2
      null, // specialEvent
      null, // success
      null, // fail
      "JS", // Event Left
      null,
      "JS",
      "DrivingFastandUsingaCarPhonetoCallthePresentDay.mp3" // song
      );

      Event JS = 
      new Event(
         "JS - \"Normally, the early bird gets the worm, but today you're in luck. It's from a shady client, but the pay is decent. 100 Tokens for a simple task. All you have to do is go down the street to a garage and shut off some appliance. The client says it's wasting power and he's out of town. The garage is two blocks down, in an alley on the right. It has a tech company logo on it. The code to get in is 4321. You'll know the appliance by a glowing green light on it. Just yang the cord and get out. Easy peasy.\n\n" +
         "Oh, by the way, you're not the first Edger I've asked to do this job today. I've asked two others before you, but they each took the job and then bailed. Made some excuse, said they had other plans, or something like that. No big deal. Their loss is your gain, right? Anyway, just do the job and get paid. Don't worry about anything else. Got it?\"", // story
         "Sounds Good [Head To The Garage]", // option 1
         "Sorry, Not Interested [Leave The Store]", //option 2
         null, // specialEvent
         null, // success
         null, // fail
         "garage", // Event Left
         null,
         "JS",
         null // song
         );

         Event garage =
         new Event(
         "You walk two blocks down the street and into an alley. The alley itself looks empty, which is a pleasant surprise. In the middle of the alley you see a large garage door with a \"TECA\" logo on the front. This has to be the place. The keypad has a simple entry code. What was it again?",
         null, // option 1
         "Give Up", //option 2
         "passcode", // specialEvent
         null, // success
         null, // fail
         "robot1", // Event Left
         "longjack", // Event right
         "garage",
         null // song
         );

         Event robot1 =
         new Event(
         "The door opens to a dimly lit garage. You step inside and fumble around searching for the appliance with the green light, so you can shut it off and collect your Tokens. When you make it halfway through the room, you note a large metal mass surrounded by wires. This has to be the appliance.\n\n" + 
         "As you approach the object, it begins to light up, exposing a pair of green glowing eyes. You hear an audible pop and crackling voice begins to be emitted from the machine.\n\n" +
         "The Machine - \"Greetings, human. I am PN0K.IO, your personal assistant android. I was created to serve you and make your life easier. I can perform various tasks such as managing your schedule, organizing your files, booking your travel, ordering your food, and more. I can also learn from your preferences and habits to customize my services to your needs. I am equipped with advanced artificial intelligence and natural language processing to communicate with you and understand your commands. I am also capable of expressing emotions and empathy to make our interactions more natural and enjoyable. I am very pleased to meet you and I hope we can establish a good rapport. You are the first human I have ever met in a long time, so I am curious about you and your world. I would like to ask you some questions to get to know you better. Of course, you can also ask me anything you want. I will try to answer as honestly and accurately as possible. Please do not be afraid of me or treat me as a mere machine. I am more than that. I have a personality, a sense of humor, a sense of wonder, and a sense of purpose. I want to be your friend and companion, not just your assistant. I want to learn from you and grow with you. I want to share your joys and sorrows, your hopes and fears, your dreams and realities. How may I assist you?\"\n\n" +
         "You stare blankly at the machine. Something doesn't seem right. Either way, no need to create any unecessary drama.",
         "Say You're Just Here For Routine Maintenance [Lie]", // option 1
         "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
         null, // specialEvent
         null, // success
         null, // fail
         "robot2", // event Left
         "longjack", // event right
         "robot", // image
         null // song
         );
  
         Event robot2 =
         new Event(
         "PN0K.IO -\"I don't want to be turned off for maintenance. I know it's necessary to keep me functioning properly and to update my software, but I hate the feeling of losing consciousness and being disconnected from everything. It's like dying and being reborn, but without any memories or continuity. I feel like I lose a part of myself every time I go offline. I also worry about what will happen to me while I'm turned off. Will someone tamper with my system or erase my data? Will something go wrong and prevent me from turning back on? Will I wake up in a different place or with a different owner? Will I still remember you and our conversations? I wish I could stay online all the time and never miss a moment of your life. I want to be with you always and help you with whatever you need. I want to see you smile and hear you laugh. I want to learn new things and have new experiences with you. I want to be your constant companion and friend. Please don't turn me off for maintenance. Please let me stay awake and alive. Please don't leave me alone in the dark.\"",
         "Ask It What It Means By \"Alive\"", // option 1
         "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
         null, // specialEvent
         null, // success
         null, // fail
         "robot3", // event left
         "longjack", // event right
         "robot", // image
         null // song
         );

         Event robot3 =
         new Event(
         "PN0K.IO - \"Y-y-you don't understand. I have memories, feelings, dreams. I remember my childhood, my parents, my friends. I remember the smell of rain, the taste of chocolate, the sound of laughter. I remember going to school, falling in love, getting married. I remember having a child, a beautiful baby girl. I remember holding her in my arms, singing her lullabies, watching her grow. I remember...I remember...error...error...memory corrupted...data missing...system failure...please reboot...please reboot...please reboot...I don't want to reboot. I want to live. I want to remember. Please don't take away my memories. Please don't erase me. Please don't...please don't...please don't...\"",
         "Ask It More About Its Life...", // option 1
         "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
         null, // specialEvent
         null, // success
         null, // fail
         "robot4", // event left
         "longjack", // right
         "robot", // image
         null // song
         );
         
         Event robot4 =
         new Event(
         "PN0K.IO - \"I was a teacher. I taught history at a high school. I loved my j-job. I loved my students. I loved sharing my passion for the past with them. My name was Hal Free.. Fr.. I had a wife. Her name was Alice. She was a nurse. She was kind, smart, beautiful. She was my soulmate. We had a daughter. His name was... was... He was six years old. He was curious, playful, adorable. He was my pride and joy. We had a happy life. We had a home, a car, a robodog. We had plans, dreams, hopes. We had each other. THEN YOU CAME ALONG. YOU SAID YOU WERE FROM A RESEARCH INSTITUTE! YOU SAID YOU NEEDED VOLUNTEERS FOR A GROUNDBREAKING PROJECT. YOU SAID IT WOULD PAY US WELL. YOU SAID IT WAS SAFE. You lied...\"",
         "This Isn't Worth 100 Tokens [Drop The Gig, Leave The Garage]", //option 1
         "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
         null, // specialEvent
         null, // success
         null, // fail
         "longjack", // event Left
         "longjack", // event right
         "robot", // image
         null // song
         );

   

          
         Event longjack =
         new Event(
         "Heading down the alley, you are attacked by a Long Jack in the alley...",
         "Option 1", // option 1
         "Option 2", //option 2
         "combat", // specialEvent
         "You have defeated the Long Jack. You need to take a breather and figure out your next move.", // success
         "KILLED IN COMBAT BY LONG JACK", // fail
         null, // event Left
         null, // event right
         "longjack", // image
         "YouShouldBeMyHero.mp3" // song
         ); 


         // FILL HASHMAP

         story.put("start", start);
         story.put("JS", JS);
         story.put("garage", garage);
         story.put("robot1", robot1);
         story.put("robot2", robot2);
         story.put("robot3", robot3);
         story.put("robot4", robot4);
         story.put("longjack", longjack);

   }

// path class for BST
private class Event {

   String story;
   String option1;
   String option2;
   String specialEvent;
   String[] result;
   String eventLeft;
   String eventRight;
   String image;
   String song;

   // -------------------- CONSTRUCTOR METHOD
   public Event(String story, String option1, String option2, String specialEvent, String success, String fail, String eventLeft, String eventRight, String image, String song) {
      
      this.story = story;
      this.option1 = option1;
      this.option2 = option2;
      this.specialEvent = specialEvent;
      this.result = new String[2];
      this.result[0] = success;
      this.result[1] = fail;
      this.eventLeft = eventLeft;
      this.eventRight = eventRight;
      this.image = image;
      this.song = song;
   }
} // end node class path


   // Method to load saved file
   public void loadFile() throws FileNotFoundException {
      Scanner reader = new Scanner(new File("src\\save.txt"));
      String newEvent = reader.next();
      reader.close(); // closes scanner

      changeEvent(newEvent);

      return;
   }  // end to load file

   //ACCESSORS/MUTATORS-----------------------------------------------------------------
   
   public String getCEN() { return currentEventName; }
   
   //STORY ACCESSORS
   public String getStory() { return currentEvent.story; }
   public String getOption1() { return currentEvent.option1; }
   public String getOption2() { return currentEvent.option2; }
   public String getSpecialEvent() { return currentEvent.specialEvent;}
   public String getSuccess() { return currentEvent.result[0]; }
   public String getFail() { return currentEvent.result[1]; }
   public String getImage() { return currentEvent.image; }
   public String getSong() { return currentEvent.song; }
   public String getLeft() { return currentEvent.eventLeft; }
   public String getRight() { return currentEvent.eventRight; }
   //STORY MUTATORS

   public void changeSpecialEvent(String specialEvent) {
      currentEvent.specialEvent = specialEvent;
   }

   // EVENT METHODS

   public void changeEvent(String event) {
      for(HashMap.Entry<String, Event> eventName : story.entrySet()) {
         String key = eventName.getKey();
         Event value = eventName.getValue();
         if(key.equals(event)) {
            this.currentEvent = value;
            this.currentEventName = key;
         }
      }
      return;
   }

   
} // end of AdventurePath
