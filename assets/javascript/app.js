$(document).ready(function() {
//start timer and game when "I soloemly swear that I am up to no good" button is clicked and change to quiz page ( switch done in html)

// display the remaining time 

// create question
// create answers for each question ( use radio buttons)( can only select one answer)
//variables needed

//var startScreen;
//var gameHTML;
var counter = 30;
var questionArray = [{
        question: "Which creator of the map is alo a convicted murder?",
        choices: ["Moony","Wormtail","Padfoot","Prongs"],
        correct: 2
    }, {
    	question: "Who killed Padfoot",
        choices: ["Bellatrix","Lord Voldemort","Harry Potter","Severous Snape"],
        correct: 0
    ],{
    	question: "Who did Moony marry?",
        choices: ["Luna Lovegood","Cho Chang","Tonks","Fleur Delacour"],
        correct: 2
    },{
    	question: "Who first stole the map from Filch"
        choices: ["Harry Potter","Fred and George Weasley","Draco Malfoy","Ron Weasley"],
        correct: 1
    },{
    	question: "Which room is not on the map?"
        choices: ["Dumbledore's office","Snape's storeroom","The Leaky Cauldron","The room of requirement"],
        correct: 3
    },{
    	question: "What do you say to make the writting on the map disappear?"
        choices: ["Mischief Managed","I am all done","Someone is coming","No more mischivious for me"],
        correct: 0
    },{
    	question: "What happens in you use  the wrong words to open the map?"
        choices: ["It catches on fire.","It flies away","Nothing","It insults you"],
        correct: 3
    ,{
    	question: "Who was shown on the map that Harry Potter believed to be dead?"
        choices: ["Lord Voldemort","Peter Pettigrew","Sirius Black","Albus Dumbledore"],
        correct: 1
    },{
    	question: "Where does Harry Potter first travel to with help of the map?"
        choices: ["Home","The Shrieking Shake","Diagon Alley","Honeyduke's"],
        correct: 3
    },{
    	question: "While searching for the Horcruxes, what did Harry Potter ise the map for?"
        choices: ["To keep an eye on Draco Malfoy","To see what Ginney Weasley was doing","To make sure Hogwarts was still there","He did not use it at all"],
        correct: 1
    },
//create submit button

//if time runs out move to "summary" screen

// after submit it select, move to "summary" screen

//display on screen number of answers correct and number incorrect

//upon hitting mischief managed, reset clock
};