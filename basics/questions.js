process.stdout.write("Hello")
process.stdout.write("World\n\n\n")
//console.log("hello World \n\n\n\n\n")

const questions=[
    "What is your name?",
    "What you would rather be doing?",
    "What is your preferred programming language?"
]
const ask=(i=0)=>{
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(`>`);
}
const answers=[]
process.stdin.on('data',data=>{
    answers.push(data.toString().trim());
    if(answers.length<questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
})
process.on('exit',() =>{
    const [name,activity,lang]=answers;
    console.log(`
        Thank your for answers.
        Go ${activity} ${name} , You can write ${lang} code later
    
    `)

})
ask();
