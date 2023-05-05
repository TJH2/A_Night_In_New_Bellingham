package elements;
import java.util.HashMap;
public class Passcode {

    private HashMap<String, String> passcode;

    public Passcode() { // for storing passcodes for the game
      passcode = new HashMap<String, String>();
      passcode.put("garage", "4321");
    }

    public String getAnswer(String event) {
        for(HashMap.Entry<String, String> question : passcode.entrySet()) {
           String key = question.getKey();
           String value = question.getValue();
           if(key.equals(event)) {
              return value;
           }
        }
        return null;
     }
}
