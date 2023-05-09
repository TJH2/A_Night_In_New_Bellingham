import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.control.Slider;
import javafx.scene.control.ScrollPane.ScrollBarPolicy;
import javafx.scene.control.ScrollPane;
import javafx.scene.control.TextField;
import javafx.geometry.Orientation;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.scene.layout.HBox;
import javafx.scene.text.Font;
import javafx.stage.Stage;
import javafx.scene.media.*;


import java.io.File;
import java.io.PrintStream;


import java.io.FileNotFoundException;

//IMPORTED GAME ELEMENTS

import elements.Adventure;
import elements.Bestiary;
import elements.Character;
import elements.Passcode;

public class Game extends Application {

    // GAME VARIABLES -----------------------------------------------------------------------------------------------------------------------------------------------------------

    // GAME ELEMENTS

    private Adventure adventure = new Adventure();
    private Passcode passcode = new Passcode();
    private Character character = new Character();
    private Bestiary bestiary = new Bestiary();
    private Bestiary.Enemy enemy;

    // VARIABLES FOR START MENU SCREEN

    VBox menuLayout = new VBox();
    VBox menuBox = new VBox();
    HBox musicBox = new HBox();
    private Label title;
    private Button newGame;
    private Button continueGame;

    // VARIABLES FOR GANE PLOT SCREEN

    VBox plotLayout = new VBox();
    private ScrollPane plotScroll = new ScrollPane();
    private Label plotText;
    private Button start;

    // VARIABLES FOR GAME SCREEN
    
    VBox gameLayout = new VBox();
    private ImageView imageView = new ImageView();
    private ScrollPane storyScroll = new ScrollPane();
    private HBox eventBox = new HBox();
    private HBox gameFooter = new HBox();
    private Label imageFrame;
    private Label storyText;
    private Label characterInfo;
    private Button answer;
    private Button attack;
    private Button juiceBox;
    private Button flee;
    private Button option1;
    private Button option2;
    private Button saveGame;
    private TextField input;
    private int combatRound = 0;
    private String logs;
    private String newLog;

    // VARIABLES FOR GAME OVER SCREEN

    VBox gameOverLayout;
    private ScrollPane gameOverScroll = new ScrollPane();
    private Label gameOverText;
    private Button reboot;

    // VARIABLES FOR BACKGROUND MUSIC

    private String currentSong = "YouShouldBeMyHero.mp3";
    private MediaPlayer audioPlayer;
    private Slider menuVolume;
    private Slider gameVolume;


    public static void main(String[] args) { launch(args); } // end of main


    @Override
    public void start(Stage stage) throws Exception {
        stage.setTitle("A Night In New Bellingham"); // program title

        adventure.changeEvent("start");  // FOR NEW GAME

        /*
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        STARTING BACKGROUND MUSIC
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        */

        backgroundMusic(currentSong);

        // VOLUME SLIDER FOR MAIN MENU

        menuVolume = new Slider(0,1,.5);
        menuVolume.setOrientation(Orientation.HORIZONTAL);
        menuVolume.setMaxWidth(100);
        audioPlayer.volumeProperty().bindBidirectional(menuVolume.valueProperty()); // sets volume of music to slider

        menuVolume.setStyle("-fx-color: green;-fx-opacity: 65%;");

        // VOLUME SLIDER FOR GAME

        gameVolume = new Slider(0,1,.5);
        gameVolume.setOrientation(Orientation.HORIZONTAL);
        gameVolume.setMaxWidth(100);

        gameVolume.setStyle("-fx-color: green;-fx-opacity: 65%;");

        /*
        -------------------------------------------------------------------------------------------------------------------------------------------------------------
         SCENE LAYOUTS AND STYLING 
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------
        */

        // MAIN MENU LAYOUT ---------------------------------------------------------------------------------------------------------------------------------------------

        title = new Label("A_NIGHT_IN_NEW_BELLINGHAM");
        title.setMaxWidth(400);
        title.setMinHeight(40);
        title.setAlignment(Pos.CENTER);
        newGame = new Button("New Game");
        continueGame = new Button("Continue Game");
        menuBox = new VBox(title, newGame, continueGame);
        menuBox.setAlignment(Pos.CENTER);
        menuBox.setPrefHeight(635);
        menuBox.setSpacing(15);
        musicBox = new HBox(menuVolume);
        musicBox.setAlignment(Pos.BOTTOM_RIGHT);
        menuLayout = new VBox();
        menuLayout.getChildren().addAll(menuBox, musicBox);

        // STYLING FOR MAIN MENU

        menuLayout.setAlignment(Pos.CENTER); // centers child elements
        menuLayout.setPadding(new Insets(5));
        title.setStyle("-fx-background-color: black;-fx-text-fill: green; fx-padding: 5;-fx-border-width: 2;-fx-border-style: solid;-fx-border-color: purple; -fx-opacity: .90;");
        menuLayout.setStyle("-fx-background-image: url(resources/images/bellingham.jpg); " +
        "-fx-background-position: center center; " +
        "-fx-background-repeat: stretch;");
        title.setFont(Font.font("Consolas"));

        // MAIN MENU SCENE

        Scene startGame = new Scene(menuLayout, 625, 675); // layout and size of main menu

        // GAME PLOT LAYOUT -----------------------------------------------------------------------------------------------------------------------------------------------------

        plotText = new Label("Welcome to New Bellingham, the last bastion of civilization in the Pacific Northwest. After the cataclysmic event that wiped out Seattle in 2032, this once-sleepy town became a refuge for tens of thousands of survivors, desperate for a new start. But the influx of people overwhelmed the city's resources, creating a stark divide between the haves and the have-nots.\n\n" +
        "On one side of the bay, you have Fairhaven, the gleaming micro-city where the elite enjoy the latest in technology and luxury. Here, you can find anything from cybernetic enhancements to virtual reality entertainment, as long as you have the Tokens to pay for it. Fairhaven is protected by a private security force, and its residents rarely venture outside their bubble.\n\n" +
        "On the other side, you have Old Town, formerly known as Downtown, the original heart of Bellingham that has been transformed into a gritty urban jungle. Here, you can find anything from drugs to weapons to information, as long as you have the skills to survive. The outskirts are ruled by gangs, hackers, and hustlers, but the center still holds some of the old downtown Bellingham charm (albeit with a little more neon).\n\n" +
        "You are an “Edger,” a street-wise resident of Old Town. You know how to navigate the neon-lit alleys and establishments of your home turf, and you have a knack for finding trouble and opportunity. Like all residents, you have your own personal Stitch that lets you access the Net, a digital realm where data and secrets are stored and traded. You also have a crew, a group of friends who share your passion for adventure and rebellion.\n\n" +
        "Your story begins on a typical night in Old Town. Your plan is the same as every night, nothing. You got a bunch of Tokens that you made from a previous gig and you're just looking for some fun, some trouble, some adventure. Maybe you'll hook up with some friends, maybe you'll piss off some enemies. Maybe you'll find fame, maybe you'll find death. Maybe you'll find something else entirely.\n\n" +
        "You don't know what awaits you in Old Town.\n\n" +
        "But you're ready to face it."
        );
        plotText.setMaxWidth(435);
        plotText.setAlignment(Pos.TOP_CENTER);
        plotText.setWrapText(true); // makes the story text wrap so that it doesnt bleed out of frame
        plotText.setStyle("-fx-padding: 10;-fx-background-color: black;-fx-text-fill: green;");
        plotScroll.setContent(plotText);
        plotScroll.setMaxWidth(450);
        plotScroll.setPrefHeight(450);
        plotScroll.setHbarPolicy(ScrollBarPolicy.NEVER);
        plotScroll.setVbarPolicy(ScrollBarPolicy.AS_NEEDED);
        plotScroll.setStyle("-fx-opacity: .90;");
        
        start = new Button("START GAME");
        plotLayout = new VBox();
        plotLayout.getChildren().addAll(plotScroll, start);

        // STYLING FOR PLOT

        plotLayout.setAlignment(Pos.CENTER); // centers child elements
        plotLayout.setPadding(new Insets(5));
        plotLayout.setSpacing(15); // spacing between elements
        plotLayout.setStyle("-fx-background-image: url(resources/images/bellingham.jpg); " +
        "-fx-background-position: center center; " +
        "-fx-background-repeat: stretch;");
        plotText.setFont(Font.font("Consolas"));

        // GAME PLOT SCENE

        Scene gamePlot = new Scene(plotLayout, 625, 675);
        
        // GAME LAYOUT ------------------------------------------------------------------------------------------------------------------------------------------------------------
       
        imageView.setImage(new Image("resources/images/" + adventure.getImage() + ".jpg"));
        //setting the fit height and width of the image view 
        imageView.setFitWidth(400);
        imageView.setFitHeight(400);  
        
        imageFrame = new Label("", imageView);

        storyText = new Label();
        storyText.setText(adventure.getStory());
        storyText.setWrapText(true); // makes the story text wrap so that it doesnt bleed out of frame
        storyText.setAlignment(Pos.TOP_CENTER);
        storyText.setPrefWidth(390);
        storyText.setMinHeight(150);
        storyScroll.setContent(storyText);
        storyScroll.setMaxWidth(405);
        storyScroll.setPrefHeight(100);
        storyScroll.setHbarPolicy(ScrollBarPolicy.NEVER);
        storyScroll.setVbarPolicy(ScrollBarPolicy.AS_NEEDED);
        characterInfo = new Label(stats());
        characterInfo.setAlignment(Pos.CENTER);
        characterInfo.setWrapText(true);
        characterInfo.setPrefWidth(405);
        characterInfo.setMinHeight(30);

        // SPECIAL EVENTS 
        
        // FOR PASSCODE EVENTS

        input = new TextField();
        input.setPrefWidth(250);
        answer = new Button("Enter");

        // FOR COMBAT EVENTS

        attack = new Button("Attack");
        
        juiceBox = new Button("Juice");

        flee = new Button("Try To Flee");

        option1 = new Button();

        eventBox.getChildren().addAll(input, answer, attack, juiceBox);
        eventBox.setAlignment(Pos.CENTER); // centers child elements
        eventBox.setSpacing(10); // spacing between elements

        option2 = new Button();

        saveGame = new Button("Save Game");

        gameFooter = new HBox(saveGame, gameVolume);
        gameFooter.setAlignment(Pos.BOTTOM_CENTER);
        gameFooter.setSpacing(435);

        gameLayout = new VBox();

        // STYLING FOR GAME SCREEN 

        gameLayout.getChildren().addAll(imageFrame, characterInfo, storyScroll, eventBox, flee, option1, option2, gameFooter);
        gameLayout.setAlignment(Pos.TOP_CENTER); // centers child elements
        gameLayout.setPadding(new Insets(5));
        gameLayout.setSpacing(10); // spacing between elements
        imageFrame.setStyle("-fx-border-width: 2;-fx-border-style: solid;-fx-border-color: purple;");
        characterInfo.setStyle("-fx-background-color:black;-fx-text-fill:purple;-fx-padding: 5;-fx-border-width: 2;-fx-border-style: solid;-fx-border-color: purple;-fx-opacity: .90;");
        storyText.setStyle("-fx-background-color:black;-fx-text-fill:green;-fx-padding: 5;");
        storyScroll.setStyle("-fx-opacity: .90;");
        input.setStyle("-fx-background-color:black;-fx-text-fill:green;-fx-padding: 5; -fx-border-width: 2;-fx-border-style: solid;-fx-border-color: purple;-fx-opacity: .90;");
        gameLayout.setStyle("-fx-background-image: url(resources/images/bellingham.jpg); " +
        "-fx-background-position: center center; " +
        "-fx-background-repeat: stretch;");
        storyText.setFont(Font.font("Consolas"));
        option1.setFont(Font.font("Consolas"));
        option2.setFont(Font.font("Consolas"));

        // GAME SCENE 

        Scene playGame = new Scene(gameLayout, 625, 675); // layout and size of game

        // GAME OVER LAYOUT -------------------------------------------------------------------------------------------------------------------------------------------
        
        gameOverText = new Label();
        gameOverText.setPrefWidth(450);
        gameOverText.setMinHeight(450);
        gameOverText.setAlignment(Pos.TOP_CENTER);
        gameOverText.setWrapText(true); // makes the story text wrap so that it doesnt bleed out of frame
        gameOverText.setStyle("-fx-padding: 10;-fx-background-color: black;-fx-text-fill: green;");
        gameOverScroll.setContent(gameOverText);
        gameOverScroll.setMaxWidth(450);
        gameOverScroll.setPrefHeight(450);
        gameOverScroll.setHbarPolicy(ScrollBarPolicy.NEVER);
        gameOverScroll.setVbarPolicy(ScrollBarPolicy.AS_NEEDED);
        gameOverScroll.setStyle("-fx-opacity: .90;");
        
        reboot = new Button("REBOOT");
        gameOverLayout = new VBox();
        gameOverLayout.getChildren().addAll(gameOverScroll, reboot);

        //STYLING FOR GAME OVER

        gameOverLayout.setAlignment(Pos.CENTER); // centers child elements
        gameOverLayout.setPadding(new Insets(5));
        gameOverLayout.setSpacing(15); // spacing between elements
        gameOverLayout.setStyle("-fx-background-color: black;");
        gameOverText.setFont(Font.font("Consolas"));
        Scene gameOver = new Scene(gameOverLayout, 625, 675);



        /*
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
         SET STAGE
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        */

        stage.setScene(startGame);
        stage.setResizable(false);
        stage.show();

        /*
        ------------------------------------------------------------------------------------------------------------------------------------------------
        BUTTON EFFECTS
        ------------------------------------------------------------------------------------------------------------------------------------------------
        */


        // MAIN MENU BUTTONS -----------------------------------------------------------------------------------------------------------------------------
        
        // NEW GAME

        newGame.setOnAction(e -> {
            stage.setScene(gamePlot); });

        // CONTINUE

        continueGame.setOnAction(e -> {
            try {
            adventure.loadFile();
            }
            catch(FileNotFoundException ex) { System.out.print("No File Found"); }
            gameVolume.setValue(menuVolume.getValue());
            stage.setScene(playGame);
            refresh();
        });

        // GAME START BUTTON -----------------------------------------------------------------------------------------------------------------------------------------------------
        
        start.setOnAction(e ->  {
            gameVolume.setValue(menuVolume.getValue());
            stage.setScene(playGame);
            refresh();
        });

        // GAME BUTTONS -----------------------------------------------------------------------------------------------------------------------------------------------------------
        
        // OPTION 1

        option1.setOnAction( e -> {
                if(adventure.getLeft() != null) {
                    adventure.changeEvent(adventure.getLeft());
                    refresh(); 
                }
                else {
                    System.out.println("DEAD END Left");
                }
            }  
        );
        
        
        // OPTION 2

        option2.setOnAction(e -> {
            if(adventure.getRight() != null) {
                adventure.changeEvent(adventure.getRight());
                refresh(); 
            }
            else { System.out.println("DEAD END Right"); }
    });

        // SAVE GAME

        saveGame.setOnAction(e -> {
            try { //overwrites current save file
                    PrintStream overwrite = new PrintStream(new File("src\\save.txt"));
                    overwrite.print(adventure.getCEN());
            }
            catch(FileNotFoundException ex) {}
            });

        // PASSCODE BUTTON -----------------------------------------------------------------------------------------------------------------------------------------------------
        
        answer.setOnAction(e -> {
            // takes the path event and cross-references it with riddler to compare response to the answer
            if(input.getText().equals(passcode.getAnswer(adventure.getCEN()))) {
                if(adventure.getLeft() != null) { adventure.changeEvent(adventure.getLeft());}
                refresh(); 
            }
            else { System.out.println("Wrong Answer"); }
        });

        // COMBAT BUTTONS -----------------------------------------------------------------------------------------------------------------------------------------------------
        
        // JUICE BOX
       
        juiceBox.setOnAction(e -> {
            if(character.getJB() == 0) {
                newLog = "You're Out Of Cartridges...\n";
                updateLogs(newLog);
                storyText.setText(readLogs());
                return;
            }
            else if(character.getMaxHP() == character.getCurrentHP()) {
                newLog = "You're Already At Full Health\n";
                updateLogs(newLog);
                storyText.setText(readLogs());
                return;
            }
            else {
                character.heal();
                enemyAttack();
                newLog = "You Inject Some SpazzRazz And Heal\n";
                updateLogs(newLog);
            }
                combatRound++;
                newLog = "Round " + combatRound + ":\n";
                updateLogs(newLog);
                storyText.setText(readLogs());
                characterInfo.setText(stats());
                storyScroll.setVvalue(0); // resets scroll bar position
        });

        // FLEE

        flee.setOnAction(e -> {
            flee();
            combatRound++;
            newLog = "Round " + combatRound + ":\n";
            updateLogs(newLog);
            storyText.setText(readLogs());
            characterInfo.setText(stats());
            storyScroll.setVvalue(0); // resets scroll bar position
            if(character.getCurrentHP() <= 0) {
                updateLogs(adventure.getFail() + "\n\n");
                gameOverText.setText("/**~~GAME OVER~~**/:\n\n" + readLogs());
                stage.setScene(gameOver);
            }
        });

        // ATTACK

        attack.setOnAction(e -> {
            enemyAttack();
            characterAttack();
            combatRound++;
            newLog = "Round " + combatRound + ":\n";
            updateLogs(newLog);
            storyText.setText(readLogs());
            characterInfo.setText(stats());
            storyScroll.setVvalue(0); // resets scroll bar position
            if(character.getCurrentHP() <= 0) {
                updateLogs(adventure.getFail() + "\n\n");
                gameOverText.setText("/**~~GAME OVER~~**/:\n\n" + readLogs());
                stage.setScene(gameOver);
            }
            else if(enemy.getHP() <= 0) {
                combatSuccess();
            }
        });

    // REBOOT BUTTON -----------------------------------------------------------------------------------------------
    
    reboot.setOnAction(e -> {
        this.adventure = new Adventure(); // restarts adventure
        character.restock(); // replenishes health and adds + 5 JB
        adventure.changeEvent("start"); // returns player to start of game
        refresh(); // refrshes screne
        stage.setScene(playGame);
    });
    
    } // END OF START
    
    /*
    ----------------------------------------------------------------------------------------------------------------------------
    METHODS
    ----------------------------------------------------------------------------------------------------------------------------
    */

    //GAME LOGS
    
    public void updateLogs(String logs) {
        this.logs = logs + this.logs;
        return;
    }
  
    public void clearLogs() {
        this.logs = "";
        return;
    }
  
    public String readLogs() {
        return this.logs;
    }

    // COMBAT METHODS -----------------------------------------------------------------------------------------------------------------------------------------
    
    //CHARACTER ATTACK METHOD

    public void characterAttack(){
    if(enemy.dodgeChance() < character.hitChance()) {
    int damage = character.dealDamage();
    enemy.takeDamage(damage);
    newLog = "You " + character.getAttack() + " " + enemy.getName() +  " With Your " + character.getWeapon() +  " For " + damage + " Damage\n\n";
    updateLogs(newLog);
    }
    else {
        newLog = "You Attempt To " + character.getAttack() + " " + enemy.getName() +  " With Your " + character.getWeapon() +  " But Miss\n\n";
    updateLogs(newLog);
    }
    return;
    }

    //ENEMY ATTACK METHOD

    public void enemyAttack() {
        if(character.dodgeChance() < enemy.hitChance()) {
        int damage = enemy.dealDamage();
        character.takeDamage(damage);
        newLog = enemy.getName() + " " + enemy.getAttack() + " You With Its " + enemy.getWeapon() + " For " + damage  + " Damage\n\n";
        updateLogs(newLog);
        }
        else {
        newLog = enemy.getName() + " Attempts To " + enemy.getAttack() + " You With Its " + enemy.getWeapon() + " But Misses\n\n";
        updateLogs(newLog);
        }
        return;
    }

    // CHARACTER FLEE METHOD

    public void flee() {
        if(character.hitChance() - enemy.getEdge() <= 10) {
        enemyAttack();
        newLog = "You Attempt To Flee Unsucessfully\n\n";
        updateLogs(newLog);
        }
        else {
            newLog = "You Flee Sucessfully\n\n";
            updateLogs(newLog);
            normalView();
        }
        return;
    }

    // METHOD FOR COMBAT SUCCESS

    public void combatSuccess() {
        String reward = "\n\nYOUR REWARD:\n" +
        enemy.getTokens() + " Tokens\n" + enemy.getXP() + " XP\n";
        character.tokensIncrease(enemy.getTokens());
        character.xpIncrease(enemy.getXP());
        adventure.changeSpecialEvent(null);
        refresh();
        storyText.setText(adventure.getSuccess() + reward );
        return;
    }

    // GAME REFRESH METHODS ------------------------------------------------------------------------------------------------------------------------------------------------
    
    // METHOD FOR REFRESHING STAT BAR WITH INFO
    
    public String stats() {
        return "HP:" + character.getCurrentHP() +
        "] ~ [M:" + character.getMuscle() +
        "] ~ [E:" + character.getEdge() +
        "] ~ [W:" + character.getWits() +
        "] ~ [LVL:" + character.getLevel() +
        "] ~ [XP:" + character.getXP() + 
        "] ~ [JB:" + character.getJB() +
        "] ~ [Tokens:" + character.getTokens() + 
        "]";
    }
    
    // METHOD FOR REFRESHING PAGE WITH NEW INFO
    
    public void refresh() {
        imageView.setImage(new Image("resources/images/" + adventure.getImage() + ".jpg"));
        storyText.setText(adventure.getStory());
        option1.setText(adventure.getOption1());
        option2.setText(adventure.getOption2());
        storyScroll.setVvalue(0); // resets scroll bar position
        characterInfo.setText(stats());  

        if(adventure.getSpecialEvent() == null) {
            normalView();
        }
        else if(adventure.getSpecialEvent().equals("passcode")) {
            passcodeView();
            }
        else if(adventure.getSpecialEvent().equals("combat")) {
            combatView();
        }
        if(adventure.getSong() != null) {
        if(!adventure.getSong().equals(currentSong)) {
        audioPlayer.stop();
        backgroundMusic(adventure.getSong());
        currentSong = adventure.getSong();
        }
        }
        audioPlayer.volumeProperty().bindBidirectional(gameVolume.valueProperty()); // sets volume of music to slider
        return;
        
    } // END OF REFRESH

    // GAME SCREEN VIEW REFRESHES 
    
    public void normalView() {
        option1.setVisible(true);
        option1.setManaged(true);
        option2.setVisible(true);
        option2.setManaged(true); 
        input.setVisible(false);
        input.setManaged(false);
        answer.setVisible(false);
        answer.setManaged(false);
        attack.setVisible(false);
        attack.setManaged(false);
        juiceBox.setVisible(false);
        juiceBox.setManaged(false);
        flee.setVisible(false);
        flee.setManaged(false);
        return;
    }

    public void combatView() {
        enemy = bestiary.findEnemy(adventure.getCEN()); // resets value of beast
        input.setVisible(false);
        input.setManaged(false);
        answer.setVisible(false);
        answer.setManaged(false);
        attack.setVisible(true);
        attack.setManaged(true);
        juiceBox.setVisible(true);
        juiceBox.setManaged(true);
        flee.setVisible(true);
        flee.setManaged(true);
        option1.setVisible(false);
        option1.setManaged(false);
        option2.setVisible(false);
        option2.setManaged(false);
        return;
    }

    public void passcodeView() {
        input.setVisible(true);
        input.setManaged(true);
        answer.setVisible(true);
        answer.setManaged(true);
        attack.setVisible(false);
        attack.setManaged(false);
        juiceBox.setVisible(false);
        juiceBox.setManaged(false);
        flee.setVisible(false);
        flee.setManaged(false);
        option1.setVisible(false);
        option1.setManaged(false);
        option2.setVisible(true);
        option2.setManaged(true);
        return;
    }

    //METHOD FOR CONTROLLING BACKGROUND MUSIC --------------------------------------------------------------------------------------------------------------------------------------
    
    public void backgroundMusic(String song) {
        File audioFile = new File("src\\resources\\audio\\" + song);
        if(audioFile.exists()) {
        Media audio = new Media(audioFile.toURI().toString());
        audioPlayer = new MediaPlayer(audio);
        this.audioPlayer.setCycleCount(MediaPlayer.INDEFINITE);
        this.audioPlayer.setAutoPlay(true);
        currentSong = song;
        }
        return;
        }
    

} // END OF CLASS
