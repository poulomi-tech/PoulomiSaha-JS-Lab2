function Question(questionText, questionNo){

    this.questionText = questionText;
    this.questionNo = questionNo;

}

const question1 = new Question("Javascript supports", 1);
const question2 = new Question("Which language is used for styling web pages?", 2);
const question3 = new Question("Which is not a Javascript framework?", 3);
const question4 = new Question("Which is used to connect database?", 4);
const question5 = new Question("Javascript is a ", 5);


function Answer(answerText){

    this.answerText = answerText;
}

//Question 1
 const answer1Q1 = new Answer("Function");
 const answer2Q1 = new Answer("HTML");
 const answer3Q1 = new Answer("CSS");
 const answer4Q1 = new Answer("XHTML");

//Question 2
const answer1Q2 = new Answer("HTML");
 const answer2Q2 = new Answer("JQuery");
 const answer3Q2 = new Answer("CSS");
 const answer4Q2 = new Answer("XML");

//Question 3
 const answer1Q3 = new Answer("Python Scripts");
 const answer2Q3 = new Answer("HTML");
 const answer3Q3 = new Answer("Django");
 const answer4Q3 = new Answer("XHTML");

//Question 4
 const answer1Q4 = new Answer("PHP");
 const answer2Q4 = new Answer("HTML");
 const answer3Q4 = new Answer("JS");
 const answer4Q4 = new Answer("All");


 //Question 5
 const answer1Q5 = new Answer("Lnanguage");
 const answer2Q5 = new Answer("Programming language");
 const answer3Q5 = new Answer("Development");
 const answer4Q5 = new Answer("All");


 function QuestionAnswer(questionObj, answerChoicesObj, correctAnswerObj){

    this.questionObj = questionObj;
    this.answerChoicesObj= answerChoicesObj;
    this.correctAnswerObj = correctAnswerObj;

    this.isItACorrectAnswer = function(userSelectedAnswer){

        if(userSelectedAnswer === correctAnswerObj.answerText){
            console.log("Correct answer")
            return true;
        }else {
            console.log("Incorrect Answer")
            return false;
        }

    }

 }



 const qa1 = new QuestionAnswer(question1, [answer1Q1, answer2Q1, answer3Q1, answer4Q1], answer1Q1);
 const qa2 = new QuestionAnswer(question1, [answer1Q2, answer2Q2, answer3Q2, answer4Q2], answer3Q2);
 const qa3 = new QuestionAnswer(question1, [answer1Q3, answer2Q3, answer3Q3, answer4Q3], answer3Q3);
 const qa4 = new QuestionAnswer(question1, [answer1Q4, answer2Q4, answer3Q4, answer4Q4], answer1Q4);
 const qa5 = new QuestionAnswer(question1, [answer1Q5, answer2Q5, answer3Q5, answer4Q5], answer2Q5);


function QuizApplication(qaArray){

    this.loadAndStart = function(){
    this.displayQuizPage();
    }

    this.displayQuizPage = function(){
          this.displayQASection();
          this.displayQuestionProgressSection();

    }

    this.displayQASection = function(){
   

        const questionAnswerObj = qaArray[0];

        //setting the question 
        const questionText = questionAnswerObj.questionObj.questionText;
        const questionHtmlElement = document.getElementById("question");

        questionHtmlElement.innerHTML = questionText;

        //setting ythe answer choices

        const answweChoicesObj = questionAnswerObj.answerChoiceObj;
        for(let index = 0; index < answerChoicesObj.length; index ++){

            let answerChoiceHtmlElementName = "choice" + index;
            const answerObj = answerChoicesObj[index];

            const answerChoiceHtmlElement = document.getElementById("choice0");
            answerChoiceHtmlElement.innerHTML = answerObj.answertext;
        }


    }

    this.displayQuestionProgressSection = function(){
        
        const totalNoOfQuestions = qaArray.length;

        let progressText = `Question ${questionNo} of ${totalNoOfQuestions}`;

        const progressElement = document.getElementById("progress");
        progressElement.innerHTML = progressText;

    }

}

const quizApplication = new QuizApplication(
    [qa1, qa2, qa3, qa4, qa5]
);
quizApplication.loadAndStart();


