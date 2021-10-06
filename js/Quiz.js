class Quiz {
  constructor(){
    this.title = createElement('h1');
    this.text= createElement('h2');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    if (allContestants !== undefined){
      question.hide();
      background("yellow");
      fill(0);
      textSize(30);
      text("Result of the Quiz",340, 50);
      text("----------------------------",320, 65);
      Contestant.getContestantInfo();
     this.text.html("*NOTE: Contestants who answered correct are highlighted in green colour");
     this.text.position(130,230); 
    }

    for (var plr in allContestants){
      var correctAns = "2";
    
    if(correctAns === allContestants[plr].answer){   fill ("green");}
    
    else
{    fill("red");}
    } 
  }

}