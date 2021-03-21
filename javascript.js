var buttonOne = document.getElementById("OptionOne");
var buttonTwo = document.getElementById("OptionTwo");
var buttonThree = document.getElementById("OptionThree");
var buttonFour = document.getElementById("OptionFour");
var Prompt = document.getElementById("Question");

var quizTimer = 100;
var pageNumber = 0;
// funtion QuizGame () {
//     var timerInterval = 
// }

function NextPage() {
    if (pageNumber == 0) {
        Prompt.textContent = "The condition in an If / else statement is enclosed within ___.";
        buttonOne.textContent = "1. quotes";
        buttonTwo.textContent = "2. curly brackets";
        buttonThree.textContent = "3. parenthesis";
        buttonFour.textContent = "4. squre brackets";
        pageNumber++;
    } else if (pageNumber == 1) {
        Prompt.textContent = "Arrays in JavaScript can be used to store \n____.";
        buttonOne.textContent = "1. Numbers and Strings";
        buttonTwo.textContent = "2. Other arrays";
        buttonThree.textContent = "3. booleans";
        buttonFour.textContent = "4. All of the above";
        pageNumber++;
    } else if (pageNumber == 2) {
        Prompt.textContent = "String values must be enclosed within ____ \nwhen being assigned to variables";
        buttonOne.textContent = "1. commas";
        buttonTwo.textContent = "2. curly brackets";
        buttonThree.textContent = "3. quotes";
        buttonFour.textContent = "4. parenthesis";
        pageNumber++;
    } else if (pageNumber == 3) {
        Prompt.textContent = "A very useful tool used during developement\n and debugging for printing contetn to the\n debugger is:";
        buttonOne.textContent = "1. JavaScript";
        buttonTwo.textContent = "2. Terminal / bash";
        buttonThree.textContent = "3. For Loops";
        buttonFour.textContent = "4. console log";
        pageNumber++;
    }
}







buttonOne.addEventListener("click", function(event) {
    event.preventDefault();
    NextPage();
});