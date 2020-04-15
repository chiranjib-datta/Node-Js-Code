const collectAnswers=require("./lib/collectAnswersWithEvents.js");

const questions=[
    "What is your name?",
    "Where do you live?",
    "What rather you would be doing with Node js?"
]

const answerEvents=collectAnswers(questions);

answerEvents.on('answer',answer=>{
    console.log(`Question Answered: ${answer}`)
});

answerEvents.on('complete',answers=>{
    console.log("Thanks");
    console.log(answers);
});

answerEvents.on('complete',()=>process.exit());
