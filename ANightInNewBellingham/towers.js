// moves
let moves = 20;

// rings
const ring1 = 1;
const ring2 = 2;
const ring3 = 3;
const ring4 = 4;

// towers
let tower1 = [];
let tower2 = [];
let tower3 = [];

tower1.push(ring4);
tower1.push(ring3);
tower1.push(ring2);
tower1.push(ring1);


function displayRing(tower, index) {
    if(tower[index] == null) {
        return "||";
    }

    switch(tower[index]) {
        case 1:
            return "<span style='color: orange;'>==</span>";
            break;
        case 2:
            return "<span style='color: blue;'>===</span>";
            break;
        case 3:
          return  "<span style='color: red;'>====</span>";
          break;
        case 4:
          return  "<span style='color: white;'>=====</span>";
          break;
        default:
        return "||";
        break;
    }
}

// Method to display rings
function towerDisplay() {
    return "<p>~TECA ENTERPRISES CORPORATION (A)INDUSTRIES~ - " + moves +"</p>" +
           "<div class = 'tower'>" + // tower 1
           "<p>Tower 1</p><br>" +
           "<p>||</p>" +
           "<p>" + displayRing(tower1, 3) + "</p>" +
           "<p>" + displayRing(tower1, 2) + "</p>" +
           "<p>" + displayRing(tower1, 1) + "</p>" +
           "<p>" + displayRing(tower1, 0) + "</p>" + 
           "<p>===</p></div>" +
           "<div class = 'tower'>" + // tower 2
           "<p>Tower 2</p><br>" +
           "<p>||</p>" +
           "<p>" + displayRing(tower2, 3) + "</p>" +
           "<p>" + displayRing(tower2, 2) + "</p>" +
           "<p>" + displayRing(tower2, 1) + "</p>" +
           "<p>" + displayRing(tower2, 0) + "</p>" + 
           "<p>===</p></div>" +
           "<div class = 'tower'>" + // tower 3
           "<p>Tower 3</p><br>" +
           "<p>||</p>" +
           "<p>" + displayRing(tower3, 3) + "</p>" +
           "<p>" + displayRing(tower3, 2) + "</p>" +
           "<p>" + displayRing(tower3, 1) + "</p>" +
           "<p>" + displayRing(tower3, 0) + "</p>" +
           "<p>===</p></div>";
}
// Method to move a ring from one tower to another
function moveRing(move, set) {
    let moveFrom;
    let moveTo;

    switch(move) {
        case "tower1":
            moveFrom = tower1;
            break;
        case "tower2":
            moveFrom = tower2;
            break;
        case "tower3":
            moveFrom = tower3;
            break;
    }

    switch(set) {
        case "tower1":
            moveTo = tower1;
            break;
        case "tower2":
            moveTo = tower2;
            break;
        case "tower3":
            moveTo = tower3;
            break;
   }

   console.log(moveFrom[moveFrom.length - 1]);
   console.log(moveTo[moveTo.length - 1]);
   // Moves ring from one tower to another
   if(moveFrom.length != 0) { // if tower is not empty
        if(moveFrom[moveFrom.length -1] < moveTo[moveTo.length - 1] || moveTo[moveTo.length - 1] == null) { // if ring is moving above bigger ring
        moveTo.push(moveFrom.pop()); // moves rings
        moves--; // decreases moves used
        } else {
            window.alert("Error: You Cannot Move A Larger Ring Above A Smaller Right");
        }
   } 

   else {
        window.alert("Error: There Is No Ring On That Tower");
   }

   document.getElementById("story").innerHTML = towerDisplay();
   
   // if player solves the tower puzzle
   if(tower3[0] == 4 && tower3[1] == 3 && tower3[2] == 2 && tower3[3] == 1 ) {
        window.alert(currentEvent.getSuccess());
        normalView();
   } else if(moves == 0) {
        window.alert(currentEvent.getFail());
        displayPage(currentEvent.getRight());
   }
}
