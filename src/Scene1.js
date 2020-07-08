class Scene1 extends Phaser.Scene{

     constructor(){
          super("bootGame");
     }
     preload(){
          this.load.image("background","assets/sky.png");

          this.load.image("star","assets/star.png");
          this.load.image("bomb","assets/bomb.png");
          // this.load.spritesheet("woodcutter","assets/Woodcutter_attack2.png",{frameWidth:48,frameHeight:48});
          // this.load.spritesheet("Woodcutter_idle","assets/Woodcutter_idle.png",{frameWidth:48,frameHeight:48});
          // this.load.spritesheet("woodcutter_walkr","assets/Woodcutter_walkr.png",{frameWidth:48,frameHeight:48});
          this.load.spritesheet("explosion","assets/explosion.png",{frameWidth:16,frameHeight:16});
          

     }

     create(){
          this.add.text(20,20,"loading Game...");
          this.scene.start("playGame");

          this.coins = this.add.group();

          this.coins.create(50,100,'star');

         


         
          

          // this.anims.create({
          //      key:"woodcutter_attack_ani",
          //      frames :this.anims.generateFrameNumbers("woodcutter"),
          //      frameRate:10,
          //      repeat:-1,
                
          // })

          // this.anims.create({
          //      key : "woodcutter_idal_anim",
          //      frames : this.anims.generateFrameNumbers("Woodcutter_idle"),
          //      frameRate:10,
          //      repeat:-1,


          // })

          // this.anims.create({
          //      key:"walkr",
          //      frames :this.anims.generateFrameNumbers("woodcutter_walkr"),
          //      frameRate:15,
          //      repeat : -1,
               

          // })
     }
}