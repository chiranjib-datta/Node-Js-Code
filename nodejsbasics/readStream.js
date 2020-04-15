const fs=require("fs");
const readStream=fs.createReadStream("./assets/lorum-ipsum.md","UTF-8")//text read stream so utf-8
/* 
console.log("type something..");
process.stdin.on("data",data=>{
    console.info(`I read ${data.length} length of data`)
}) */

let fileText="";

readStream.on("data",data=>{
    console.info(`I read ${data.length} length of data`);
    fileText+=data;
})

readStream.once("data",data=>{
    console.info(data);
})

readStream.on("end",()=>{
    console.log("Ends:"+fileText)
})