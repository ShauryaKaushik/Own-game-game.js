class Game{

    constructor(){



    }

    readState(){

      database.ref("gameState").on("value",function(data){
          gameState = data.val();
      })

    }

    updateState(state){

        database.ref("/").update({gameState : state})

    }

    start(){

        if(gameState === 0){
            player = new Player();
            player.readCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120,100)
        player.readCount();
    
        if(allPlayers !== undefined){
          var index = 0;
          var x = 0;
          var y ; 

          for(var plr in allPlayers){
            index = index+1
            x = x+200
            y = displayHeight-allPlayers[plr].distance;
            players[index-1].x=x;
            players[index-1].y=y
        if(index===player.index){
         players[index-1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y = players[index-1].y;
        }   
         }
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=50
          player.update();
        }
        drawSprites();
      }

}