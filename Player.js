class Player {
    constructor(){

      this.index = null;
      this.name = null;
      this.choosenKit = 0;

    }
  
    getCount(){

        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
        
            playerCount = data.val();
      
        })

    }
  
    updateCount(count){

        database.ref('/').update({

            playerCount: count
        
        });

    }
  
    update(Name){

      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({

        name : Name

      });

    }

    updateKit(num){

      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({

        Kit : num

      });

    }

    static getPlayerInfo(){

      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{

        allPlayers = data.val();

      })
      
    }
    
  }
  