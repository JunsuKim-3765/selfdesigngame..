var canvas;
var trackImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;

var database, gameState;
var form, player, playerCount, gameType;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var soldier, woodcutter, fisherman;
var soldierImg, woodcutterImg, fishermanImg;
var click,zombie;
var usaImg,koreaImg,indiaImg,singaporeImg,ukImg,argentinaImg,canadaImg,chinaImg,russiaImg,japanImg,israelImg;
var soldier2Img,woodcutter2Img,fisherman2Img;
function preload() {
  trackImage = loadImage("pics/cityImg.jpg");
//   car1_img = loadImage("assets/car1.png");
//   car2_img = loadImage("assets/car2.png");
//   track = loadImage("assets/track.jpg");
//   fuelImage = loadImage("assets/fuel.png");
//   powerCoinImage = loadImage("assets/goldCoin.png");
soldierImg = loadAnimation("pics/characters/char1.png","pics/characters/char2.png");
woodcutterImg = loadImage("pics/characters/char3.png","pics/characters/char4.png");
fishermanImg = loadImage("pics/fisherman.png");

usaImg  = loadImage('pics/usa.png');
koreaImg  = loadImage('pics/korea.jpg');
indiaImg  = loadImage('pics/india.png');
singaporeImg  = loadImage('pics/singapore.jpg');
ukImg  = loadImage('pics/uk.png');
argentinaImg  = loadImage('pics/argentina.jpg');
canadaImg  = loadImage('pics/canada.jpg');
chinaImg  = loadImage('pics/china.jpg');
russiaImg  = loadImage('pics/russia.png');
japanImg  = loadImage('pics/japan.png');
israelImg  = loadImage('pics/israel.jpg');

soldier2Img = loadAnimation('pics/soldiers/sold1','pics/soldiers/sold2','pics/soldiers/sold3')
woodcutter2Img = loadAnimation('pics/characters/char1','pics/characters/char2');
fisherman2Img = loadAnimation('pics/characters/char3','pics/characters/char4');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("black");
   if (playerCount === 1 && gameType === "SinglePlayer") {
     game.update(1);
   }

  if (gameState === 1&& gameType === "SinglePlayer" && player.countrySSS === 'KOREA') {
     game.play();
     
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
