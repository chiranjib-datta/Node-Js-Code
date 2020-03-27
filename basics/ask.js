const readLine=require("readline");
const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

/* 
rl.question("Do you like node?",answer=>{
    console.log(`Answer is ${answer}`);
}) */

const questions=[
    'What is your name?',
    'Where do you live?',
    'What will you do with node js?'
]

const collectAnswers=(questions,done)=>{
    const answers=[];
    const [firstQuestion]=questions;
    const questionsAnswered=answer=>{
        answers.push(answer);
        if(answers.length<questions.length){
            rl.question(questions[answers.length],questionsAnswered)
        }else{
            done(answers);
        }
    }

    rl.question(firstQuestion,questionsAnswered);
    
}

collectAnswers(questions,answers=>{
    console.log('Thanl you for the asnwers!!');
    console.log(answers);
    process.exit(0);
})

