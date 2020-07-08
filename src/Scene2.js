class Scene2 extends Phaser.Scene{
     constructor(){
          super("playGame");
     }

     

     create(){
          // // this.background = this.add.image(0,0,"background");
          this.score = 0;
          // this.textscore = this.add.text(20,50,"SCore:0",{fill:"red"});
          this.background = this.add.tileSprite(0,0,config.width,config.height,"background");
          this.background.setOrigin(0,0);
          this.add.text(20,20,"playing game",{fill:"yellow"});
          

          this.g = this.add.group();
          
          this.star = this.add.sprite(20,20,"star");
          this.star.setInteractive();
          

            this.ss =this.g.create(200,200,"star");
            this.bb = this.g.create(500,200,"bomb");
               

               this.ss.setInteractive();
               this.bb.setInteractive();
          

          

          this.bomb = this.add.sprite(50,50,"bomb");
          
          this.anims.create({
               key:"explosion_ani",
               frames :this.anims.generateFrameNumbers("explosion"),
               frameRate:20,
               repeat:0,
               hideOnComplete:true,
                
                
          });

          this.star.setInteractive();
          this.bomb.setInteractive();
          this.input.on('gameobjectdown',this.destroy,this);
          
          this.textscore=this.add.text(20,50,"Score:"+this.score,{fill:"red",fontSize: '32px'});

     }
     createstar(){
          this.ss =this.g.create(Phaser.Math.Between(0,config.width),0,"star");
          this.ss.setInteractive();
     }
     creatbomb(){
          this.bb =this.g.create(Phaser.Math.Between(0,config.width),0,"bomb");
          this.bb.setInteractive();
     }

     destroy(mpointer,shap){
          console.log("you clickes shapes");
          console.log(shap);
          console.log(shap.texture.key);
          if (shap.texture.key == "star" || shap.texture.key == "ss"){
               this.score ++;
              
               console.log(this.score);
               this.textscore.setText("Score:"+this.score);
               
          }
          if(shap.texture.key == "bomb" || shap.texture.key == "bb"){
               this.score --;
              
               console.log(this.score);
               this.textscore.setText("Score:"+this.score);
          }

          shap.setTexture("explosion");
          shap.play("explosion_ani");
          this.createstar();
          this.creatbomb();
          // this.expo.play("explosion_ani");
          
          
          
          
     }

     
     

     moveshap(shap,speed){
          shap.y += speed;
     }

     resetshappos(shap){
          shap.y =0;
          var rx = Phaser.Math.Between(0,config.width);
          shap.x = rx;
     }

     update(){
          
          this.moveshap(this.star,1);
          this.moveshap(this.bomb,2);
          this.background.tilePositionY -= 0.5;
          this.moveshap(this.ss,1);
          this.moveshap(this.bb,2);
          
          // // this.background.tilePositionX +=0.5;
          if(this.star.y > config.height){
               this.resetshappos(this.star);
          }
          if(this.bomb.y > config.height){
               this.resetshappos(this.bomb);
          }
          if(this.ss.y > config.height){
               this.resetshappos(this.ss);
          }
          if(this.bb.y > config.height){
               this.resetshappos(this.bb);
          }
         
          
        
        
     }

     
     

}
