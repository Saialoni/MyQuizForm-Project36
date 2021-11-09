class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput(" Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton('Correct answer');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2");
    this.message2 = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.button2.hide();
    this.input2.hide();
    this.message.hide();
    this.message2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- In a field, there are 5 sheep, 2 dogs and 1 person. How many feet are there? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    this.option1.html("1) 7 " );
    this.option1.position(150, 100);
    this.option2.html("2)  12" );
    this.option2.position(150, 120);
    this.option3.html("3)  2 " );
    this.option3.position(150, 140);
    this.option4.html("4) 18" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(270, 300);
    this.button2.hide();
    

    this.button.mousePressed(()=>{
      
       this.message.html("Thank You, Your Answer Has Been Submitted!");
       this.message.position(350, 270);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);

      this.button2.show();
    });

   
    this.button2.position(25, 340);
    this.button2.mousePressed(()=>{
      
      this.message2.html("Correct answer: 3). Sheep have hooves and dogs have paws, so only the person has feet.");
      this.message2.position(35, 350);
    });
  }
}
