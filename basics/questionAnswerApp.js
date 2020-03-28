const collectAnswers=require("./lib/collectAnswers");

const questions=[
    "What is your name?",
    "Where do you live?",
    "What rather you would be doing with Node js?"
]
collectAnswers(questions,answers=>{
    console.log("Thanks");
    console.log(answers);
    process.exit();

})