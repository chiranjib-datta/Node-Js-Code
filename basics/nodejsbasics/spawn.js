const cp=require("child_process");

const questionApp=cp.spawn("node",["questionAnswerApp.js"]);

questionApp.stdin.write("Alex\n");
questionApp.stdin.write("India\n");
questionApp.stdin.write("Change the world\n");


questionApp.stdout.on("data",data=>{
    console.log(`from question app: +${data}  `)
})

questionApp.on("close",()=>{
    console.log("Question app closed");
})