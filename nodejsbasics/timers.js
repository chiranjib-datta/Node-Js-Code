const waitTime=5000;
const waitInterval=500;
let currentTime=0;

const incTime=()=>{
    currentTime+=waitInterval;
    let p=Math.floor((currentTime/waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting ${p} %`)
}

console.log(`Setting a ${waitTime/1000} second Delay`)
//const timerFinished=()=> console.log("Done");

const timerFinished=()=>{
    clearInterval(interval); 
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done")
} 
setTimeout(timerFinished,waitTime);


const interval=setInterval(incTime,waitInterval);
/*  */