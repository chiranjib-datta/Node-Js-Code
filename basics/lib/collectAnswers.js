const readLine=require("readline");
const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

module.exports=(questions,done=f=>f)=>{
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
    rl.question(firstQuestion,questionsAnswered)
};