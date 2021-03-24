var startBtn = document.getElementById("StartBTN");
var buttonOne = document.getElementById("OptionOne");
var buttonTwo = document.getElementById("OptionTwo");
var buttonThree = document.getElementById("OptionThree");
var buttonFour = document.getElementById("OptionFour");
var Prompt = document.getElementById("header");
var text = document.getElementById("instructions");
var hiddenButtons = document.querySelector(".groupbutton");
var result = document.querySelector(".result");
var timer = document.querySelector(".timer");



function GameStart () {
    var quizTimer = 45;
    var quizScore = 0;
    var pageNumber = 0;

    //functions
    function adjustLayoutQuestions() {
        Prompt.style.padding = "0 14em 2em 18em";
        Prompt.style.textAlign  = "left";
        text.style.display = "none";
        startBtn.style.display = "none";
        hiddenButtons.style.display = "block";
        hiddenButtons.style.padding = "0 0 0 27em";
        pageNumber++;
    }

    function questionOne() {
        if(quizTimer < 1) return;
        Prompt.textContent = "Commonly used data types DO NOT include: ";
        buttonOne.textContent = "1. Strings";
        buttonTwo.textContent = "2. Booleans";
        buttonThree.textContent = "3. Alerts";
        buttonFour.textContent = "4. Numbers";
        result.textContent = "";

        hiddenButtons.addEventListener("click", function(event) {
            event.preventDefault();
            var element = event.target;
            while(pageNumber == 1) {
                if(element.matches(".Answer2")) {
                    result.textContent = "Correct!";
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                } else if (element.matches(".Answer1") || element.matches(".Answer3") || element.matches(".Answer4")) {
                    result.textContent = "Wrong!";
                    quizTimer -= 12;
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                }
            }  
        });

    }

    function questionsTwo() {
        if(quizTimer < 1) return;
        Prompt.textContent = "The condition in an If / else statement is enclosed within ___.";
        buttonOne.textContent = "1. quotes";
        buttonTwo.textContent = "2. curly brackets";
        buttonThree.textContent = "3. parenthesis";
        buttonFour.textContent = "4. squre brackets";
        result.textContent = "";

        hiddenButtons.addEventListener("click", function(event) {
            event.preventDefault();
            var element = event.target;
            while(pageNumber == 2) {
                if(element.matches(".Answer3")) {
                    result.textContent = "Correct!";
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                } else if (element.matches(".Answer1") || element.matches(".Answer2") || element.matches(".Answer4")) {
                    result.textContent = "Wrong!";
                    quizTimer -= 12;
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                }
            }  
        });
    }

    function questionsThree() {
        if(quizTimer < 1) return;
        Prompt.textContent = "Arrays in JavaScript can be used to store \n____.";
        buttonOne.textContent = "1. Numbers and Strings";
        buttonTwo.textContent = "2. Other arrays";
        buttonThree.textContent = "3. booleans";
        buttonFour.textContent = "4. All of the above";
        result.textContent = "";

        hiddenButtons.addEventListener("click", function(event) {
            event.preventDefault();
            var element = event.target;
            while(pageNumber == 3) {
                if(element.matches(".Answer4")) {
                    result.textContent = "Correct!";
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                } else if (element.matches(".Answer1") || element.matches(".Answer3") || element.matches(".Answer2")) {
                    result.textContent = "Wrong!";
                    quizTimer -= 12;
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                }
            }  
        });

    }
    function questionsFour() {
        if(quizTimer < 1) return;
        Prompt.textContent = "String values must be enclosed within ____ \nwhen being assigned to variables";
        buttonOne.textContent = "1. commas";
        buttonTwo.textContent = "2. curly brackets";
        buttonThree.textContent = "3. quotes";
        buttonFour.textContent = "4. parenthesis";
        result.textContent = "";

        hiddenButtons.addEventListener("click", function(event) {
            event.preventDefault();
            var element = event.target;
            while(pageNumber == 4) {
                if(element.matches(".Answer2")) {
                    result.textContent = "Correct!";
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                } else if (element.matches(".Answer1") || element.matches(".Answer3") || element.matches(".Answer4")) {
                    result.textContent = "Wrong!";
                    quizTimer -= 12;
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                }
            }  
        });
    }

    function questionsFive() {
        if(quizTimer < 1) return;
        Prompt.textContent = "A very useful tool used during developement\n and debugging for printing content to the\n debugger is:";
        buttonOne.textContent = "1. JavaScript";
        buttonTwo.textContent = "2. Terminal / bash";
        buttonThree.textContent = "3. For Loops";
        buttonFour.textContent = "4. console log";
        result.textContent = "";

        hiddenButtons.addEventListener("click", function(event) {
            event.preventDefault();
            var element = event.target;
            while(pageNumber == 5) {
                if(element.matches(".Answer3")) {
                    result.textContent = "Correct!";
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                } else if (element.matches(".Answer1") || element.matches(".Answer2") || element.matches(".Answer4")) {
                    result.textContent = "Wrong!";
                    quizTimer -= 12;
                    pageNumber++;
                    setTimeout(NextPage, 1000);
                }
            }  
        });
    }

    function TheEnd() {
        Prompt.style.padding = "0 18em 0 18em";
        result.textContent = "";
        Prompt.style.textAlign  = "center";
        text.style.display = "block";
        text.textContent = "Your score is " + quizScore;
        hiddenButtons.style.display = "none";
        Prompt.textContent = "All Done!"

        var User = document.createElement("input");
        User.setAttribute('type', 'text');
        document.getElementById("YeahYeet").appendChild(User);
    
        var UserInput = document.getElementById("YeahYeet").value;
        console.log(UserInput);
    }

    // function storePlayer () {
    //     localStorage.setItem("player-name", JSON.stringify playername );
    //     localStorage.setItem("player-score", JSON.stringify hiScoreList );


    // }

    function NextPage() {
        if (pageNumber == 1) {
            questionOne();
            console.log(pageNumber);
        } else if (pageNumber == 2) {
            questionsTwo();
            console.log(pageNumber);
        } else if (pageNumber == 3) {
            questionsThree();
            console.log(pageNumber);
        } else if (pageNumber == 4) {
            questionsFour();
            console.log(pageNumber);
        } else if (pageNumber == 5) {
            questionsFive();
            console.log(pageNumber);
        } else if (pageNumber == 6) {
            TheEnd();
        }
    }

    function setTime() {
        
        var timerInterval = setInterval(function() {
            quizTimer--;
            quizScore = quizTimer;
            timer.textContent = "Timer: " + quizTimer;
            if(quizTimer < 1) { 
                clearInterval(timerInterval);
                timer.textContent = "";
                TheEnd();
                return;
            } else if (pageNumber == 6) {
                clearInterval(timerInterval)
                timer.textContent = "";
                TheEnd();
                return;
            }
        }, 1000);
        
    }
    // Live Code
    setTime()
    adjustLayoutQuestions();
    NextPage();

}
startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    GameStart();
});

