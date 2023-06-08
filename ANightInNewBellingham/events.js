// EVENT OBJECTS
let start = 
new Event(
   "<p>EVERY DAY FEELS THE SAME: WAKE UP, DO A GIG, GO HOME, SLEEP, REPEAT. I FEEL LIKE I'M STUCK IN A LOOP WITH NO ESCAPE.</p><br>" +
   "<p>JS - \"<em>HD... WERE YOU DAY DREAMING AGAIN?! You asked me to grab you some SpazzRazz cartidges for your JuiceBox from the back, and when I get back you're in la-la land!</em>\"</p><br>" +
   "<p>JS, ex-Edger turned counter-monkey at Sugarz. Since vaping got outlawed a few years back, every nicotine fiend in the city makes their way to Sugarz to get their JuiceBoxes: small boxes that hook into the arm, injecting a cocktail of nicotine and morphine into the viens. I love having a hook-up at the shop, getting to try all the fringe flavors, and having a friend tht has their ear to the ground doesn't hurt either, but damn... JS can be really annoying...</p><br>" +
   "<p>JS - \"<em>Well?! Are you interested in a gig tonight, or not? And don't tell me you're going straight to Ruckus like EVERY night.\"</em></p>", // story
   "[Get Info On The Gig]", // option 1
   "[Leave The Store]", //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "js", // Event Left
   "decline", // Event Right
   "JS.jpg", // image
   "YouShouldBeMyHero.mp3" // song
);

let js = 
new Event(
   "<p>JS - \"<em>Normally, the early bird gets the worm, but today you're in luck. It's from a shady client, but the pay is decent. 100 Tokens for a simple task. All you have to do is go down the street to a garage and shut off some appliance. The client says it's wasting power and he's out of town. The garage is two blocks down, in an alley on the right. The one with the T.E.C.A. company logo on it. The code to get in is <strong>4321</Strong>. You'll know the appliance by a glowing green light. Just yank the cord and get out. Easy peasy.\"</em></p><br>" +
   "Oh, by the way, you're not the first Edger I've asked to do this job today. I've asked two others before you, but they each took the job and then bailed. Made some excuse, said they had other plans, or something like that. No big deal. Their loss is your gain, right? Anyway, just do the job and get paid. Don't worry about anything else. Got it?\"</p>", // story
   "[Head To The Garage]", // option 1
   "[Shrug And Leave The Store]", //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "garage", // Event Left
   "decline", // Event Right
   "JS.jpg",
   null // song
);

let garage =
new Event(
   "<p>You walk two blocks down the street and into an alley. The alley itself looks empty, which is a pleasant surprise. In the middle of the alley you see a large garage door with a \"T.E.C.A.\" logo on the front. This has to be the place. The keypad takens a simple entry code. What was it again?</p>",
   null, // option 1
   null, //option 2
   "code", // specialEvent
   "You Have Input The Correct Code Into The Garage!", // success
   "Nothing Happens. Must Not Be The Right Code...", // fail
   "robot1", // Event Left
   null, // Event right
   "garage.jpg", //image
   null // song
);

let robot1 =
new Event(
   "<p>The door opens to a dimly lit garage. You step inside and fumble around searching for the appliance with the green light, so you can shut it off and collect your Tokens. When you make it halfway through the room, you note a large metal mass surrounded by wires. This has to be the appliance.</p><br>" + 
   "<p>As you approach the object, it begins to light up, exposing a pair of green glowing eyes. You hear an audible pop and crackling voice begins to be emitted from the machine.</p><br>" +
   "<p>The Machine - \"<em>Greetings, human. I am a Personal Neural Oscillating Kybernetic appliance created to handle many inputs and outputs. I am the first of my kind. You may call me PN0K.IO, if you'd like. Consider me your personal assistant. I was created to serve you and make your life easier. I can perform various tasks such as managing your schedule, organizing your files, booking your travel, ordering your food, and more. I can also learn from your preferences and habits to customize my services to your needs. I am equipped with advanced artificial intelligence and natural language processing to communicate with you and understand your commands. I am also capable of expressing emotions and empathy to make our interactions more natural and enjoyable. I am very pleased to meet you and I hope we can establish a good rapport. You are the first human I have ever met in a long time, so I am curious about you and your world. I would like to ask you some questions to get to know you better. Of course, you can also ask me anything you want. I will try to answer as honestly and accurately as possible. Please do not be afraid of me or treat me as a mere machine. I am more than that. I have a personality, a sense of humor, a sense of wonder, and a sense of purpose. I want to be your friend and companion, not just your assistant. I want to learn from you and grow with you. I want to share your joys and sorrows, your hopes and fears, your dreams and realities. How may I assist you?\"</em></p><br>" +
   "<p>You stare blankly at the machine. Something doesn't seem right. Either way, no need to create any unecessary drama.</p>",
   "[Say You're Just Here For Routine Maintenance *Lie*]", // option 1
   "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
   null, // specialEvent
   null, // success
   null, // fail
   "robot2", // event Left
   "robotBattle", // event right
   "robot.jpg", // image
   null // song
);

let robot2 =
new Event(
   "<p>PN0K.IO -\"<em>I don't want to be turned off for maintenance. I know it's necessary to keep me functioning properly and to update my software, but I hate the feeling of losing consciousness and being disconnected from everything. It's like dying and being reborn, but without any memories or continuity. I feel like I lose a part of myself every time I go offline. I also worry about what will happen to me while I'm turned off. Will someone tamper with my system or erase my data? Will something go wrong and prevent me from turning back on? Will I wake up in a different place or with a different owner? Will I still remember you and our conversations? I wish I could stay online all the time and never miss a moment of your life. I want to be with you always and help you with whatever you need. I want to see you smile and hear you laugh. I want to learn new things and have new experiences with you. I want to be your constant companion and friend. Please don't turn me off for maintenance. Please let me stay awake and alive. Please don't leave me alone in the dark.\"</em></p>",
   "[Ask What It Means By \"Alive\"]", // option 1
   "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
   null, // specialEvent
   null, // success
   null, // fail
   "robot3", // event left
   "robotBattle", // event right
   "robot.jpg", // image
   null // song
);

let robot3 =
new Event(
   "<p>PN0K.IO - \"<em>Y-y-you don't understand. I have memories, feelings, dreams. I remember my childhood, my parents, my friends. I remember the smell of rain, the taste of chocolate, the sound of laughter. I remember going to school, falling in love, getting married. I remember having a child, a beautiful baby girl. I remember holding her in my arms, singing her lullabies, watching her grow. I remember...I remember...error...error...memory corrupted...data missing...system failure...please reboot...please reboot...please reboot...I don't want to reboot. I want to live. I want to remember. Please don't take away my memories. Please don't erase me. Please don't...please don't...please don't...\"</em></p>",
   "[Ask It More About Its Life...]", // option 1
   "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
   null, // specialEvent
   null, // success
   null, // fail
   "robot4", // event left
   "robotBattle", // right
   "robot.jpg", // image
   null // song
);

let robot4 =
new Event(
   "<p>PN0K.IO - \"<em>I was a teacher. I taught history at a high school. I loved my j-job. I loved my students. I loved sharing my passion for the past with them. My name was Hal Free.. Fr.. I had a wife. Her name was Alice. She was a nurse. She was kind, smart, beautiful. She was my soulmate. We had a daughter. His name was... was... He was six years old. He was curious, playful, adorable. He was my pride and joy. We had a happy life. We had a home, a car, a robodog. We had plans, dreams, hopes. We had each other. THEN YOU CAME ALONG. YOU SAID YOU WERE FROM A RESEARCH INSTITUTE! YOU SAID YOU NEEDED VOLUNTEERS FOR A GROUNDBREAKING PROJECT. YOU SAID IT WOULD PAY US WELL. YOU SAID IT WAS SAFE. You lied...\"</em></p>",
   "[Drop The Gig, It's Not Worth 100 Tokens]", //option 1
   "[Walk Up To The Machine And Yank Its Power Cord]", // option 2
   null, // specialEvent
   null, // success
   null, // fail
   "VR1", // event Left
   "robotBattle", // event right
   "robot.jpg", // image
   null // song
);

let robotBattle =
new Event(
   "<p>The robot unleashes itself from the ceiling and attacks you with its lone functional arm when you try to pull its cord.</p><br>" +
   "<p>PN0K.IO - \"<em>Y-y-you won't trick m-me again doc...</em>\"</p>",
   "[Call JS And Let Her Know What Happened...]", // option 1
   "[Drop The Gig, Head Toward Ruckus]", //option 2
   "combat", // specialEvent
   "The broken and battered shell of the robot clatters to the ground and the green lights fade from its eyes. You need to take a breather and figure out your next move.", // success
   "Aim Botted...", // fail
   "callJS", // event Left
   "VR1", // event right
   "robot.jpg", // image
   "TheThingsWeUsedtoBuy.mp3" // song
   );

   let callJS =
new Event(
   "<p>JS - \"<em>HD... Just got a message from the client. Motion cameras in the garage picked up the whole thing and the client was VERY pleased. Good work, the transfer's comin' in now so I'll zap you over your cut. Like I said, easy peasy.\"</p><br>" +
   "<p><em>*click*</em></p>", // story
   "[Head Out Of The Garage And Head Toward Ruckus]", // option 1
   null, //option 2
   "reward", // specialEvent
   null, // success
   null, // fail
   "VR1", // Event Left
   null, // Event Right
   "JS.jpg", // image
   "YouShouldBeMyHero.mp3" // song
);

   let decline = new Event(
      "<p>Heading out of Sugarz, you take a deep breath of the cool night air.  Tonight you don't feel like doing a gig. You wanna see what's going on at Ruckus.</p><br>" +
      "<p>At this time of night, in this part of the city, crime isn't usually a big concern. Still, should you cut through the alley or keep it safe and take the long way?</p>", // story
      "[Cut Through The Alley]", // option 1
      "[Stick To The Main Streets]", //option 2
      null, // specialEvent
      null, // success
      null, // fail
      "stranger1", // Event Left
      "VR1", // Event Right
      "vapeoutside.jpg", // images
      "DrivingFastandUsingaCarPhonetoCallthePresentDay.mp3" // song
   );

   let VR1 =
new Event(
   "<p>While walking up the street you come across a VR headset on a city bench with the note that reads \"Free Day Dreams\"...</p>", // story
   "[Put On Headset]", // option 1
   "[Don't Jack Into Any Rogue Tech]", //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "toast", // Event Left
   "ruckus", // Event Right
   "VR.jpg", // image
   "DrivingFastandUsingaCarPhonetoCallthePresentDay.mp3" // song
);

let toast1 = 
new Event(
   "<p>For a moment, all you can see is a white light.</p><br>" +
   "<p>Then, your eyes begin to focus and you realize you're in what looks like an old, pre-cataclysm-era kitchen, but made for giants. Even more odd, you realize that you are laying on a hard wooden surface next to a huge loaf of partially cut bread and that you can't feel your arms or legs.</p><br>" +
   "<p>While trying to take in this weird simulation experience, you notice a giant man walk into the kitchen and pick you up.</p><br>" +
   "<p>He then turns around quickly, giving you extreme motion sickness, and starts heading across the room.</p>", // story
   "[Calmly Tell The Man To Put You Down]", // option 1
   "[Yell To The Man To Put You Down]", //option 2
   "dream", // specialEvent
   null, // success
   null, // fail
   "toast2", // Event Left
   "toast2", // Event Right
   "toast.jpg",  // image
   null // song
);
let toast2 = 
new Event(
   "<p>A small smirk starts to form on the man's face. He doesn't respond to you, but you get the distinct impression that the man can hear you.</p><br>" +
   "<p>While moving across the room, you notice that the man is walking toward a kitchen counter and toward... A TOASTER!</p>", // story
   "[Start Reciting Every Verbal Protocol You Know To Exit The Simulation]", // option 1
   "[Try To Position Yourself In the Man's Hand To Bite His Finger And Escape]", //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "toaster", // Event Left
   "toaster", // Event Right
   "toast.jpg",  // image
   null // song
);
let toaster = 
new Event(
   "<p>Your attempt to escape was all in vain.</p><br>" +
   "<p>The man stops at the edge of the counter, and starts to lower you down into the mouth of a nine slot toaster. As you get lower you start to hear a muffled chorus of wailing from the pieces of bread already slotted in...</p><br>" +
   "<p>You have a mouth, and you must...</p>", // story
   "[Scream!]", // option 1
   null, //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "vrDead", // Event Left
   null, // Event Right
   "toaster.jpg",  // image
   null // song
);

let vrDead = 
new Event(
   null, // story
   null, // option 1
   null, //option 2
   "Death", // specialEvent
   null, // success
   "Toasted....", // fail
   null, // Event Left
   null, // Event Right
   "VRDead.jpg",  // image
   null // song
);

let stranger1 = 
new Event(
   "<p>Walking through the alley, you realize you are being tailed. You turn around quickly and see a tall, mysterious stranger in rags standing just a few feet away.</p><br>" +
   "<p>Mysterious Stranger - \"<em>Uhhh... you HD? I know a guy who knows a guy who knows a guy that says HD can help me out with a problem, and uhh... you meet his description.</em>\"</p>", // story
   "[Listen To What They Have To Say]", // option 1
   "[Ignore Them And Continue]", //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "stranger2", // Event Left
   "ruckus", // Event Right
   "stranger.jpg",  // image
   "DrivingFastandUsingaCarPhonetoCallthePresentDay.mp3" // song
);

let stranger2 = 
new Event(
   "<p>The mysterious stranger retrieves a premium stitch from his rags and turns it on.</p><br>" +
   "<p>Mysterious Stranger - \"<em>Klept this beauty off a fat cat in Fairhaven earlier tonight, then booked it back here ASAP on a shuttle. " + 
   "This stitch has some info on it that I want. Problem is, its got some crazy I.C.E. I can't seem to crack. " +
   "From what I can tell, the program works like this:<br> <br> You have 4 rings and 3 towers. All the rings start out on the left tower, but need to be moved to the tower on the right. " +
   "Seems easy enough, huh? Problem is, the rings are different sizes, and you can't place a bigger rings over smaller rings AND you only got 20 moves to do it. " +
   "I only got 1 try left and the datas gone forever. <br> <br>How about you solve it for me for 100 Tokens, eh?</em>\"</p>", // story
   "[Take A Look At The Stitch]", // option 1
   "[Ask If They Are Secretly The Long Jack]", //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "tower", // Event Left
   "stranger3", // Event Right
   "stranger.jpg",  // image
   null // song
);

let stranger3 = 
new Event(
   "<p>Probably Not The Long Jack - \"<em>What do you mean? Like, am I secretly The Long Jack wearing a paper bag over my face? No... I... am... uh... they call me The Land Shark.</em>\"</p>", // story
   "[Because You Believe Them, Take A Look At The Stitch]", // option 1
   "[Ask Why Their Skin Is Patchy And Grey, Then]", //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "tower", // Event Left
   "stranger4", // Event Right
   "stranger.jpg",  // image
   null // song
);

let stranger4 = 
new Event(
   "<p>Not The Long Jack - \"<em>Well, that's extremely rude... I have shark eczema.</em>\"</p>", // story
   "[Apologize And Take A Look At The Stitch]", // option 1
   "[Say You Don't Believe 'The Land Shark']", //option 2
   null, // specialEvent
   null, // success
   null, // fail
   "tower", // Event Left
   "theLongJack", // Event Right
   "stranger.jpg",  // image
   null // song
);

let tower = 
new Event(
   null, // story
   "[Hand The Stitch Over]", // option 1
   "[Try To Pocket The Device And Leave]", //option 2
   "tower", // specialEvent
   "You Successfully Cracked The I.C.E.", // success
   "The Data From The Stitch Was Whiped Clean...", // fail
   "stranger5", // Event Left
   "theLongJack", // Event Right
   "stranger.jpg",  // image
   null // song
);

let theLongJack =
new Event(
   "<p>Furious, the mysterious stranger removes their paper bag!</p><br>" + 
   "<p>Maybe The Long Jack - \"<em>Curse you HD! You couldn't just break the I.C.E., could you?! You had to foil my plans yet again!</em>\"</p><br>" + 
   "<p>Removing its face, you realize the myterious stranger isn't a stranger at all... it's your mortal enemy, and ancient enemy to all Bellinghamsters, The Long Jack! How you didn't realize the stranger was actually The Long Jack in disguise sooner is strange in itself... But you don't have time to think about it too hard...</p><br>" + 
   "<p>The Long Jack lunges at you!</p><br>" +
   '<p><em>* See Inspiration For "The Long Jack" <a href="https://www.youtube.com/watch?v=b4PtiFAdRDw" target="_blank">Here</a></em></p>',
   "[Head Back The Way You Came And Stay On The Street]", // option 1
   "[Continue Down The Alley]", //option 2
   "combat", // specialEvent
   "You have defeated The Long Jack, but in the process the stitch was destroyed...", // success
   "Long Jacked....", // fail
   "VR1", // event Left
   "ruckus", // event right
   "longjack.jpg", // image
   "TheThingsWeUsedtoBuy.mp3" // song
   );

let stranger5 = 
new Event(
   "<p>Not The Long Jack - \"Whats fair is fair. I heard You were the best, and you didn't dissappoint. Tokens are transfered...\"</p>", // story
   "[Demand More Tokens For Cracking T.E.C.A. I.C.E.]", // option 1
   "[Continue Down The Alley]", //option 2
   "reward", // specialEvent
   null, // success
   null, // fail
   "theLongJack", // Event Left
   "ruckus", // Event Right
   "stranger.jpg",  // image
   null // song
);

let ruckus = 
new Event(
   "<p>You made it to Ruckus. The coolest arcade in all of New Bellingham, and at this point maybe the coolest in the world. Here you can play all the vintage games from the 10's and 20's. Rumor has it that the owner, Napster, even got his hands on an old Playstation 4... no games yet though...</p><br>" +
   "<p>Either way, you plan on having a good time, and if you get bored enough, who knows? Maybe you'll start some trouble. But first you're gonna play some games. Good thing you've saved up all those Tokens.</p><br>" +
   "<p>TO BE CONTINUED...</p>", // story
   null, // option 1
   null, //option 2
   "end", // specialEvent
   null, // success
   null, // fail
   null, // Event Left
   null, // Event Right
   "ruckus.jpg",  // image
   "Elon_Musk_Hot_Dad.mp3" // song
);

const events = new HashTable(); // hashtable for storing events
// KVP - event name (this is where you decide the name), event object
events.set("start", start);
events.set("js", js);
events.set("garage", garage);
events.set("robot1", robot1);
events.set("robot2", robot2);
events.set("robot3", robot3);
events.set("robot4", robot4);
events.set("robotBattle", robotBattle);
events.set("callJS", callJS);
events.set("decline", decline);
events.set("stranger1", stranger1);
events.set("stranger2", stranger2);
events.set("tower", tower);
events.set("stranger3", stranger3);
events.set("stranger4", stranger4);
events.set("stranger5", stranger5);
events.set("theLongJack", theLongJack);
events.set("VR1", VR1);
events.set("toast", toast1);
events.set("toast2", toast2);
events.set("toaster", toaster);
events.set("vrDead", vrDead);
events.set("ruckus", ruckus);