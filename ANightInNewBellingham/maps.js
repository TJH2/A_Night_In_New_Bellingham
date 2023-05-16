// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// VARAIBLES
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
let eventName = "start"; //name of current event
let enemy; // enemy object
let character = new Character(); // character object

//EQUIPMENT
let bindle = new Equipment("Lightsaber", "Slash", "Cut", "Chop", 10, 25, 2, null);

//HASHMAPS 
    const music = new Map(); //map for storing music
    const events = new Map(); // map for storing events
    const enemies = new Map(); // map For storing enemies
    const passcode = new Map(); // map for storing passcodes

    //MUSIC FILL
    music.set("DrivingFastandUsingaCarPhonetoCallthePresentDay.mp3", "Driving Fast And Using A Car Phone To Call The Present Day - Hot Dad");
    music.set("Elon_Musk_Hot_Dad.mp3", "Elon Musk - Hot Dad");
    music.set("YouShouldBeMyHero.mp3", "You Should Be My Hero - Hot Dad");
    //PASSCODE FILL
    passcode.set("garage", 4321);

    //ENEMIES
    let longjack = new Enemy("Long Jack", 10, 0, 3, "Hands", 25, "Crushes", "Strangles", "Shreds", bindle);

    //ENEMY FILL
    enemies.set("theLongJack", longjack);

    //TJ EVENTS ---------------------------------------------------------------------------------------------------------------------------------------------------------//
    let start = 
      new Event(
         "<p>EVERY DAY FEELS THE SAME: WAKE UP, DO A GIG, GO HOME, SLEEP, REPEAT. I FEEL LIKE I'M STUCK IN A LOOP WITH NO ESCAPE.</p><br>" +
         "<p>JS - \"<em>HD... WERE YOU DAY DREAMING AGAIN?! You asked me to grab you some SpazzRazz for your JuiceBox from the back, and when I get back you're in la-la land!</em>\"</p><br>" +
         "<p>JS, ex-Edger turned counter-monkey at Sugarz. Since vaping got outlawed a few years back, every nicotine fiend in the city makes their way to Sugarz to get their JuiceBoxes: small boxes that hook into the arm, injecting a cocktail of nicotine and morphine into the viens. I love having a hook-up at the shop, getting to try all the fringe flavors, and having a friend tht has their ear to the ground doesn't hurt either, but damn... JS can be really annoying...</p><br>" +
         "<p>JS - \"<em>Well?! Are you interested in a gig tonight, or not?\"</em></p>", // story
         "Get Info On The Gig", // option 1
         "Not Interested [Leave The Store]", //option 2
         null, // specialEvent
         null, // success
         null, // fail
         "JS", // Event Left
         "VR", // Event Right
         "JS.jpg", // image
         "DrivingFastandUsingaCarPhonetoCallthePresentDay.mp3" // song
      );

      let JS = 
      new Event(
         "<p>JS - \"<em>Normally, the early bird gets the worm, but today you're in luck. It's from a shady client, but the pay is decent. 100 Tokens for a simple task. All you have to do is go down the street to a garage and shut off some appliance. The client says it's wasting power and he's out of town. The garage is two blocks down, in an alley on the right. It has a tech company logo on it. The code to get in is <strong>4321</Strong>. You'll know the appliance by a glowing green light on it. Just yang the cord and get out. Easy peasy.\n\n" +
         "Oh, by the way, you're not the first Edger I've asked to do this job today. I've asked two others before you, but they each took the job and then bailed. Made some excuse, said they had other plans, or something like that. No big deal. Their loss is your gain, right? Anyway, just do the job and get paid. Don't worry about anything else. Got it?\"</p>", // story
         "Sounds Good [Head To The Garage]", // option 1
         "Sorry, Not Interested [Leave The Store]", //option 2
         null, // specialEvent
         null, // success
         null, // fail
         "garage", // Event Left
         null,
         "JS.jpg",
         null // song
      );

      let garage =
      new Event(
         "<p>You walk two blocks down the street and into an alley. The alley itself looks empty, which is a pleasant surprise. In the middle of the alley you see a large garage door with a \"TECA\" logo on the front. This has to be the place. The keypad has a simple entry code. What was it again?</p>",
         null, // option 1
         null, //option 2
         "code", // specialEvent
         "You Have Input The Correct Code Into The Garage!", // success
         "Nothing Happens. Must Not Be The Right Code...", // fail
         "robot1", // Event Left
         "theLongjack", // Event right
         "garage.jpg", //image
         null // song
      );

      let robot1 =
      new Event(
         "<p>The door opens to a dimly lit garage. You step inside and fumble around searching for the appliance with the green light, so you can shut it off and collect your Tokens. When you make it halfway through the room, you note a large metal mass surrounded by wires. This has to be the appliance.</p><br>" + 
         "<p>As you approach the object, it begins to light up, exposing a pair of green glowing eyes. You hear an audible pop and crackling voice begins to be emitted from the machine.</p><br>" +
         "<p>The Machine - \"<em>Greetings, human. I am PN0K.IO, your personal assistant android. I was created to serve you and make your life easier. I can perform various tasks such as managing your schedule, organizing your files, booking your travel, ordering your food, and more. I can also learn from your preferences and habits to customize my services to your needs. I am equipped with advanced artificial intelligence and natural language processing to communicate with you and understand your commands. I am also capable of expressing emotions and empathy to make our interactions more natural and enjoyable. I am very pleased to meet you and I hope we can establish a good rapport. You are the first human I have ever met in a long time, so I am curious about you and your world. I would like to ask you some questions to get to know you better. Of course, you can also ask me anything you want. I will try to answer as honestly and accurately as possible. Please do not be afraid of me or treat me as a mere machine. I am more than that. I have a personality, a sense of humor, a sense of wonder, and a sense of purpose. I want to be your friend and companion, not just your assistant. I want to learn from you and grow with you. I want to share your joys and sorrows, your hopes and fears, your dreams and realities. How may I assist you?\"</em></p><br>" +
         "<p>You stare blankly at the machine. Something doesn't seem right. Either way, no need to create any unecessary drama.</p>",
         "Say You're Just Here For Routine Maintenance [Lie]", // option 1
         "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
         null, // specialEvent
         null, // success
         null, // fail
         "robot2", // event Left
         "theLongJack", // event right
         "robot.jpg", // image
         null // song
      );

      let robot2 =
      new Event(
         "<p>PN0K.IO -\"<em>I don't want to be turned off for maintenance. I know it's necessary to keep me functioning properly and to update my software, but I hate the feeling of losing consciousness and being disconnected from everything. It's like dying and being reborn, but without any memories or continuity. I feel like I lose a part of myself every time I go offline. I also worry about what will happen to me while I'm turned off. Will someone tamper with my system or erase my data? Will something go wrong and prevent me from turning back on? Will I wake up in a different place or with a different owner? Will I still remember you and our conversations? I wish I could stay online all the time and never miss a moment of your life. I want to be with you always and help you with whatever you need. I want to see you smile and hear you laugh. I want to learn new things and have new experiences with you. I want to be your constant companion and friend. Please don't turn me off for maintenance. Please let me stay awake and alive. Please don't leave me alone in the dark.\"</em></p>",
         "Ask It What It Means By \"Alive\"", // option 1
         "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
         null, // specialEvent
         null, // success
         null, // fail
         "robot3", // event left
         "theLongJack", // event right
         "robot.jpg", // image
         null // song
      );

      let robot3 =
      new Event(
         "<p>PN0K.IO - \"<em>Y-y-you don't understand. I have memories, feelings, dreams. I remember my childhood, my parents, my friends. I remember the smell of rain, the taste of chocolate, the sound of laughter. I remember going to school, falling in love, getting married. I remember having a child, a beautiful baby girl. I remember holding her in my arms, singing her lullabies, watching her grow. I remember...I remember...error...error...memory corrupted...data missing...system failure...please reboot...please reboot...please reboot...I don't want to reboot. I want to live. I want to remember. Please don't take away my memories. Please don't erase me. Please don't...please don't...please don't...\"</em></p>",
         "Ask It More About Its Life...", // option 1
         "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
         null, // specialEvent
         null, // success
         null, // fail
         "robot4", // event left
         "theLongJack", // right
         "robot.jpg", // image
         null // song
      );

      let robot4 =
      new Event(
         "<p>PN0K.IO - \"<em>I was a teacher. I taught history at a high school. I loved my j-job. I loved my students. I loved sharing my passion for the past with them. My name was Hal Free.. Fr.. I had a wife. Her name was Alice. She was a nurse. She was kind, smart, beautiful. She was my soulmate. We had a daughter. His name was... was... He was six years old. He was curious, playful, adorable. He was my pride and joy. We had a happy life. We had a home, a car, a robodog. We had plans, dreams, hopes. We had each other. THEN YOU CAME ALONG. YOU SAID YOU WERE FROM A RESEARCH INSTITUTE! YOU SAID YOU NEEDED VOLUNTEERS FOR A GROUNDBREAKING PROJECT. YOU SAID IT WOULD PAY US WELL. YOU SAID IT WAS SAFE. You lied...\"</em></p>",
         "This Isn't Worth 100 Tokens [Drop The Gig, Leave The Garage]", //option 1
         "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
         null, // specialEvent
         null, // success
         null, // fail
         "theLongJack", // event Left
         "theLongJack", // event right
         "robot.jpg", // image
         null // song
      );

      let theLongJack =
      new Event(
         "<p>Heading down the alley, you are attacked by a Long Jack in the alley...</p>",
         "Option 1", // option 1
         "Option 2", //option 2
         "combat", // specialEvent
         "You have defeated the Long Jack. You need to take a breather and figure out your next move.", // success
         "KILLED IN COMBAT BY LONG JACK", // fail
         null, // event Left
         null, // event right
         "longjack.jpg", // image
         "YouShouldBeMyHero.mp3" // song
         );
    
        // TJ FILL
        events.set("start", start);
        events.set("JS", JS);
        events.set("garage", garage);
        events.set("robot1", robot1);
        events.set("robot2", robot2);
        events.set("robot3", robot3);
        events.set("robot4", robot4);
        events.set("theLongJack", theLongJack);

      // DAV EVENTS --------------------------------------------------------------------------------------------------------------------------------------------------------//

      // DAV FILL

      // JAZ EVENTS -------------------------------------------------------------------------------------------------------------------------------------------------------//
      
      let VR =
      new Event(
         "<p>You come across a VR headset on a city bench with the note that reads \"Free Day Dreams\"...</p>", // story
         "Sweet, A Free Day Dream [Put On Headset]", // option 1
         "I'm Not Jacking Into Any Rogue Tech [Walk Away]", //option 2
         null, // specialEvent
         null, // success
         null, // fail
         "dream", // Event Left
         null, // Event Right
         "VR.jpg", // image
         null // song
      );

      dream = 
      new Event(
         "<p>STORY TEXT GOES HERE</p>", // story
         "OPTION 1", // option 1
         "OPTION 2", //option 2
         "dream", // specialEvent
         null, // success
         null, // fail
         null, // Event Left
         null, // Event Right
         "cyberpig.jpg",
         null // song
      );

      // JAZ FILL

      events.set("VR", VR);
      events.set("dream", dream);
    
    //TRAVERSAL FUNCTIONS
    function songName(name) {
        return music.get(name);
    }

    function checkCode(code) {
        return passcode.get(code);
    }

    function findEnemy(enemy) {
        return enemies.get(enemy);
    }

    function changeEvent(event) {
        return events.get(event);
    }
