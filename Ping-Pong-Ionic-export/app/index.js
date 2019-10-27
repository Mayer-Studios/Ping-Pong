import document from "document";
import clock from "clock";
import { vibration } from "haptics";
import { locale } from "user-settings";
import * as messaging from "messaging";
import * as fs from "fs";
import { me } from "appbit";
import { inbox } from "file-transfer"
import * as cbor from 'cbor';
import { memory } from "system";
import { me } from "appbit";
import { battery } from "power";
console.log(Math.floor(battery.timeUntilFull));


/*function refresh_memory() {
console.log("JS memory: " + memory.js.used + "/" + memory.js.total);
}
setInterval(refresh_memory, 500)
*/




console.log("App Started");
console.log(locale.language);

const rect = document.getElementById("rect");
const batLeft = document.getElementById("bat-left");
const batRight = document.getElementById("bat-right");
const myNumber = document.getElementById("myNumber");
let myScore = document.getElementById("myScore")
const ball = document.getElementById("ball");
let myHours = document.getElementById("myHours")
let myMinutes = document.getElementById("myMinutes")
let divider = document.getElementById("divider")
let welcome = document.getElementById("welcome")
let welcome_header = document.getElementById("welcome_header")
let start5 = document.getElementById("start5")
let start10 = document.getElementById("start10")
let startStart = document.getElementById("startStart")
let close = document.getElementById("close")
let cancel = document.getElementById("cancel")
let ok = document.getElementById("ok")
var user = locale.language;
let start15 = document.getElementById("start15")
let playto = document.getElementById("playto")
let howtoplay = document.getElementById("howtoplay")
let howHeader = document.getElementById("howHeader")
let howTo = document.getElementById("howTo")
let hoToClose = document.getElementById("howToClose")



function startGame() {
  
}
var playTo = 5
var screen = "start";
function showExit() {
  console.log("Called")
start5.style.display = "none"
  start10.style.display = "none"
    start15.style.display = "none"
startStart.style.display = "none"
  close.style.display = "inline"
  ok.style.display = "inline"
cancel.style.display = "inline"
  playto.style.display = "none"
  welcome.style.display = "inline"
  howtoplay.style.display = "none"
  howHeader.style.display = "none"
  howTo.style.display = "none"
  screen = "play";
}
start5.onactivate = function(evt) {
welcome.style.display = "none"
start5.style.display = "none"
  start10.style.display = "none"
    start15.style.display = "none"

startStart.style.display = "none"
    playto.style.display = "none"
howtoplay.style.display = "none"
    screen = "play";

}

start10.onactivate = function(evt) {
welcome.style.display = "none"
start5.style.display = "none"
  start10.style.display = "none"
    start15.style.display = "none"

  startStart.style.display = "none"
    playto.style.display = "none"
howtoplay.style.display = "none"
  screen = "play";

  playTo = 10
}
start15.onactivate = function(evt) {
welcome.style.display = "none"
start5.style.display = "none"
  start10.style.display = "none"
  start15.style.display = "none"
  startStart.style.display = "none"
    playto.style.display = "none"
  playTo = 15
  howtoplay.style.display = "none"
    screen = "play";

}

startStart.onactivate = function(evt) {
  console.log(JSON.stringify(evt))
  welcome.style.display = "none"
start5.style.display = "none"
  start10.style.display = "none"
    start15.style.display = "none"
  startStart.style.display = "none"
    playto.style.display = "none"
  playTo = 1000
  howtoplay.style.display = "none"
    screen = "play";
}

cancel.onactivate = function(evt) {
    if(screen === "start") {
      howHeader.style.display = "none"
   welcome.style.display = "inline"
start5.style.display = "inline"
  start10.style.display = "inline"
    start15.style.display = "inline"
  startStart.style.display = "inline"
    playto.style.display = "inline"
  howTo.style.display = "none"
  howtoplay.style.display = "inline"
  }
  else  { 
start5.style.display = "none"
  start10.style.display = "none"
startStart.style.display = "none"
  close.style.display = "none"
  ok.style.display = "none"
cancel.style.display = "none"
    playto.style.display = "none"
  howtoplay.style.display = "none"
    welcome.style.display = "none"
  }

}
ok.onactivate = function(evt) {
me.exit()

}
howtoplay.onactivate = function(evt) {
 welcome.style.display = "inline"
start5.style.display = "none"
  start10.style.display = "none"
    start15.style.display = "none"
  startStart.style.display = "none"
    playto.style.display = "none"
    howtoplay.style.display = "none"
howHeader.style.display = "inline"
  howTo.style.display = "inline"
  screen = "howTo"
}

function refresh_screen() {
  console.log(screen)
}
setInterval(refresh_screen, 1000)
close.style.display = "none"
ok.style.display = "none"
cancel.style.display = "none"
howHeader.style.display = "none"
howTo.style.display = "none"
document.onkeypress = function(evt) {
   if (evt.key === "back") {

       evt.preventDefault();
console.log("Clicked")
     
if(screen == "howTo") {
  howHeader.style.display = "none"
   welcome.style.display = "inline"
start5.style.display = "inline"
  start10.style.display = "inline"
    start15.style.display = "inline"
  startStart.style.display = "inline"
    playto.style.display = "inline"
  howTo.style.display = "none"
  howtoplay.style.display = "inline"
  screen = "start"
} else { 
  showExit()
    }
  }
}
       
clock.granularity = 'seconds';
clock.ontick = function(evt) {
    var hour = evt.date.getHours();
    var meridian = 'A';
   
    if (hour == 0)
        hour = 12;
    else if (hour == 12)
        meridian = 'P';
    else if (hour > 12) {
        hour = hour - 12;
        meridian = 'P';
        }
   
    myHours.text =  "" + ("0" + hour).slice(-2) + ":"
                    + ("0" + evt.date.getMinutes()).slice(-2)
                    + " " + meridian;
  console.log(playTo)

    }

let xSpeed = 3;
let ySpeed = 2;
let batSpeed = 0;

let score = 0;



rect.onmousemove = (event) => {
  console.log(batLeft.y)
  if (batLeft.y >= 0 && batLeft.y <= 250) {
    
    batSpeed = event.screenY  - batRight.y + 20
    //If Greater Than 205
    if (event.screenY > 200) {
      batLeft.y = 160
      batRight.y = batLeft.y - Math.random();
      console.log(batLeft.y);
      console.log(batRight.y)
      }
    else {
      batLeft.y = event.screenY;
      batRight.y = event.screenY;
      }
    //If Less Than 50
      if (event.screenY < 50) {
      batLeft.y = 49 + Math.random()
      batRight.y = batLeft.y + Math.random()
      console.log(batLeft.y);
      console.log(batRight.y)
      }
    else {
      batLeft.y = event.screenY;
      batRight.y = event.screenY;
      }
    
    
  if(batLeft.y < 0) {
    batLeft.y = 50
  }  
  if(batRight.y < 0){
    batLeft.y = 50
    }
  }
}

let timerBall = setInterval(() => {
  ball.x += xSpeed;
  ball.y += ySpeed;
  
  if (ball.y < 40) {
    ball.y = 42;
    ySpeed = -ySpeed;
    } 
  else if (ball.y > 230) {
    ball.y = 230;
    ySpeed = -ySpeed;
    }
  
  if (ball.x < 0 || ball.x > 345) {
    xSpeed = Math.floor(Math.random() * 5) + 4;
    ySpeed = Math.floor(Math.random() * 9) - 5;
    ball.x = 150;
    ball.y = 150;
    score = 0;
    myNumber.text = score
    vibration.start("bump");
    }
  
  if ((ball.x < batRight.x + batRight.width &&
    ball.x + ball.width > batRight.x &&
    ball.y < batRight.y + batRight.height &&
    ball.y + ball.height > batRight.y) || 
    (ball.x < batLeft.x + batLeft.width &&
    ball.x + ball.width > batLeft.x &&
    ball.y < batLeft.y + batLeft.height &&
    ball.y + ball.height > batLeft.y)) {
    
    ySpeed += (batSpeed /10);
    xSpeed = -xSpeed;

    score += 1;
    myNumber.text = score
    console.log(score)
    vibration.start("bump");
    }
  //console.log(playTo)
  if (score >= playTo) {
   
    myNumber.text = "You Win!"
    
    vibration.start("ring");
    
    score = 0
    }
  }, 20);
///Add the users Settings
function checkIncomingFile(){
  var fileName;
  do {
    // If there is a file, move it from staging into the application folder
    fileName = inbox.nextFile();
    if (fileName) {
      console.log("/private/data/" + fileName + " is now available");
      
      //setting custom image
      userSettings.image = "/private/data/" + fileName;
      backimg.href = userSettings.image;
      frontimg.href = backimg.href
      
      //rermoving previous version
      let fileCounter = parseInt(fileName.split(".")[0])
      if (fileCounter > 1) {
        fs.unlinkSync(`${fileCounter-1}.txi`);
        console.log(`Deleted old file ${fileCounter-1}.txi`)
      }
      
    }
  } while (fileName);
  
}

checkIncomingFile();


// Event occurs when new file(s) are received
inbox.onnewfile = function () {
  checkIncomingFile()
};

//change the user settings on the watch


// on app exit collect settings 
me.onunload = () => {
  fs.writeFileSync("user_settings.cbor", userSettings, "cbor");
  }

let userSettings;

try {
  userSettings = fs.readFileSync("user_settings.cbor", "cbor")
  console.log("User has chosen:" + JSON.strinigify(userSettings))
  }
catch (e) {
  userSettings = {}
 // console.log("catch")
  }



messaging.peerSocket.onmessage = evt => {
  switch (evt.data.key) { 
    case "backColor":
      userSettings.backColor = evt.data.newValue.replace(/["']/g, "");
      rect.style.fill = userSettings.backColor
      break;
    case "lineColor":
     userSettings.lineColor = evt.data.newValue.replace(/["']/g, "");
     divider.style.fill = userSettings.lineColor
     break;
    case "ballColor":
     userSettings.ballColor = evt.data.newValue.replace(/["']/g, "");
      ball.style.fill = userSettings.ballColor
      break;
    case "paddleColor":
      userSettings.paddleColor = evt.data.newValue.replace(/["']/g, "");
      batLeft.style.fill = userSettings.paddleColor;
      batRight.style.fill =  userSettings.paddleColor;
      break;
      case "textColor":
      userSettings.textColor = evt.data.newValue.replace(/["']/g, "");
      var textColor = userSettings.textColor  
      //myMinutes.style.fill = textColor
      myHours.style.fill = textColor
      myNumber.style.fill = textColor
      break;
  }

  // Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
  }

// Message socket closes
messaging.peerSocket.close = () => {
  console.log("App Socket Closed");
      }
    }