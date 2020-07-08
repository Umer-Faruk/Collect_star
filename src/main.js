/** @type {import("../typing/phaser")} */
console.log("hello");

var gamesettings ={
     player_speed : 50,
     scaleRatio : window.devicePixelRatio / 3,
}

var config = {
     type : Phaser.CANVAS,
     width :window.innerWidth - 20 ,
     height: window.innerHeight ,
     backgroundColor:0xff00000,
     scene:[Scene1,Scene2],
     physics:{
          default:"arcade",
          arcade:{
               debug:false
          }
     },
}

// window.devicePixelRatio,
var game = new Phaser.Game(config);
