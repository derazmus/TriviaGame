$(document).ready(function() {

//questions array

var questions = [{
        question:"Which creator of the map is also a convicted murder?",
        choices: ["Moony","Wormtail","Padfoot","Prongs"],
        answer: "Padfoot"
    },
    {
    	question: "Who killed Padfoot",
        choices: ["Bellatrix","Lord Voldemort","Harry Potter","Severous Snape"],
        answer: "Bellatrix"
    },
    {
    	question: "Who did Moony marry?",
        choices: ["Luna Lovegood","Cho Chang","Tonks","Fleur Delacour"],
        answer: "Tonks"
    },
    {
    	question: "Who first stole the map from Filch",
        choices: ["Harry Potter","Fred and George Weasley","Draco Malfoy","Ron Weasley"],
        answer: "Fred and George Weasley"
    },
    {
        question: "Which room is not on the map?",
        choices: ["Dumbledore's office","Snape's storeroom","The Leaky Cauldron","The room of requirement"],
        answer: "The room of requirement"
    },
    {
    	question: "What do you say to make the writting on the map disappear?",
        choices: ["Mischief Managed","I am all done","Someone is coming","No more mischivious for me"],
        answer: "Mischief Managed"
    },
    {
    	question: "What happens if you use the wrong words to open the map?",
        choices: ["It catches on fire.","It flies away","Nothing","It insults you"],
        answer: "It insults you"
    },
    {
    	question: "Who was shown on the map that Harry Potter believed to be dead?",
        choices: ["Lord Voldemort","Peter Pettigrew","Sirius Black","Albus Dumbledore"],
        answer: "Peter Pettigrew"
    },
    {
    	question: "Where does Harry Potter first travel to with help of the map?",
        choices: ["Home","The Shrieking Shack","Diagon Alley","Honeyduke's"],
        answer: "Honeyduke's"
    },
    {
    	question: "While searching for the Horcruxes, what did Harry Potter use the map for?",
        choices: ["To keep an eye on Draco Malfoy","To see what Ginney Weasley was doing","To make sure Hogwarts was still there","He did not use it at all"],
        answer: "To see what Ginney Weasley was doing"
    }];

//global variables
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var seconds = 30;

    //function that will submit the results and calculate the correct/wrong/unanswered questions
    function submit() {

        for(var i = 0; i < 10; i++) {
                var radios = document.getElementsByName("radio" + i);
                for(var j = 0; j < radios.length; j++) {
                    var radio = radios[j];
                    if (radio.value == questions[i].answer && radio.checked) {
                        correct++;
                    } else if (radio.value !== questions[i].answer && radio.checked) {
                        wrong++;
                    }
                }
            }

        //finding the unaswered questions
        unanswered = 10 - (correct + wrong);

        //update the first row with the counters.
        $(".row").html("<br><br><h4>Correct answers: " + correct + "</h4><br><h4>Wrong answers: " + wrong + "</h4><br><h4>Unanswered: " + unanswered + "</h4><br><br>");

        //adding an image to the second row according to the number of correct answers.
       if (correct > 6) {
            $(".secondRow").html("<img src='http://images5.fanpop.com/image/photos/29500000/Dumbledore-s-Army-dumbledores-army-29510793-500-583.jpg' alt='You are Awesome!!'><br>");
        } else if (correct >= 4) {
            $(".secondRow").html("<img src='https://img.buzzfeed.com/buzzfeed-static/static/2016-08/23/15/asset/buzzfeed-prod-web11/sub-buzz-25348-1471980059-1.jpg' alt='Just OK'><br>");
       } else if (correct < 4) {
            $(".secondRow").html("<img src='https://i.pinimg.com/736x/6b/92/0e/6b920e79708936f5e3c04d9d0e173e84--harry-potter-movies-wallpers-harry-potter.jpg' alt='terrible'><br>");
       }

        //adding a play again button to the third row to reload the page when that button is clicked.
        $(".thirdRow").html("<div><br><br><button type='button' id='playAgain'>PLAY AGAIN</button><br><br><br></div>");
        $("#playAgain").on("click", function() {
            window.location.reload();
        });

        //stop the countdown timer
        clearInterval(intervalId);

    };

    //once the user clicks the start button, the contents div will be hidden and the countdown will start. Once it reaches 0, the results will automatically be submitted.
    $("#start").on("click", function() {
        
        $("#content").hide();

        intervalId = setInterval(countdown, 1000);

        //the countdown function starts when the start button is clicked. The above setInterval() repeats this function every second. Once the seconds reach zero, the results are dynamically submitted.
        function countdown() {
            seconds--;
            $("#timer").html("<div><h4>You have " + seconds + " seconds left!</h4></div");
                if (seconds === 0) {
                    submit();
                }
        };

       
        //for loop will create the question and the radio buttons.
        //creates questions
       for (var i = 0; i < questions.length; i++) {
           $("#form").append("<br><br><br><p>" + questions[i].question + "</p><br>");
        //creates radio button w/answers
        for (var j = 0; j < questions[i].choices.length; j++) {
             $("#form").append("<input type='radio' name='" + "radio" + [i] + "' value='" + questions[i].choices[j] + "' >" + questions[i].choices[j] + "</input>");

//TO DO: cant figure out why I am getting two sets of questions and answers. 

            }
        }
        //a submit/done button will be added to the bottom of the quiz.
        $("#submit").html("<div><br><br><button type='button'>Mischief Managed</button><br><br><br></div>");

        //when the user clicks the submit button, the submit() function will be called.
        $("#submit").on("click", submit);

    });

});