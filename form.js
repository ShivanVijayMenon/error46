class Form {

    constructor(){

        this.nameText = createElement('h1');
        this.nameInput = createInput();
        this.goalText = createElement('h1');
        this.kitsText = createElement('h1');

        this.play = createButton('Play');

        this.playerImageType = "Images/PlayerFront.png";
        this.playerImage = loadImage("Images/PlayerFront.png");

        this.kit1Button = createButton('Choose Kit');
        this.kit2Button = createButton('Choose Kit');
        this.kit3Button = createButton('Choose Kit');

    }

    display(){

        this.nameText.html("Name : ")
        this.nameText.style('color', "yellow");
        this.nameText.position(dWidth/2 - 420, dHeight/2 - 220);

        this.nameInput.position(dWidth/2 - 320, dHeight/2 - 200);

        player.name = this.nameInput.value();

        this.goalText.html("Goal : ")
        this.goalText.style('color', "yellow")
        this.goalText.position(dWidth/2 - 420, dHeight/2 - 140);

        this.kitsText.html("Kits : ")
        this.kitsText.style('color', "yellow");
        this.kitsText.position(dWidth/2 - 400, dHeight/2 + 100);

        var kit1 = createSprite(dWidth/2 - 250, dHeight /2 + 135, 50, 50);
        kit1.addImage("kit", kit1img);
        kit1.scale = 0.2;

        var kit2 = createSprite(dWidth/2 - 150, dHeight/2 + 135, 50, 50);
        kit2.addImage("kit2", kit2img);
        kit2.scale = 0.2;

        var kit3 = createSprite(dWidth/2 - 50 , dHeight/2 + 135, 50, 50);
        kit3.addImage("kit3", kit3img);
        kit3.scale = 0.2;

        var KitView = createSprite(dWidth - 400, dHeight/2);
        KitView.addImage("kits", this.playerImage);
        KitView.scale = 2.5;

        this.play.position(dWidth - 425, dHeight - 150);
        
        this.kit1Button.position(dWidth/2 - 260, dHeight /2 + 165);
        this.kit2Button.position(dWidth/2 - 160, dHeight/2 + 165);
        this.kit3Button.position(dWidth/2 - 60 , dHeight/2 + 165 );

        this.kit1Button.mousePressed(()=>{

            player.updateKit(1);

        });

        this.kit2Button.mousePressed(()=>{

            player.updateKit(2)

        });

        this.kit3Button.mousePressed(()=>{

            player.updateKit(3)

        });

        this.play.mousePressed(()=>{

            player.update(player.name);

        });

    }

    keyPressed(){

        if(keyCode === DOWN_ARROW){

            this.playerImageType = "Images/PlayerFront.png";

        }

        if(keyCode === RIGHT_ARROW){

            this.playerImageType = "Images/PlayerRight.png";

        }

        if(keyCode === LEFT_ARROW){

            this.playerImageType = "Images/PlayerLeft.png";

        }

    }

}