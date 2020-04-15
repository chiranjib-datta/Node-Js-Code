const fs=require("fs");

const writeStream=fs.createWriteStream("./storage-files/myFIle.txt","UTF-8")

const readStream=fs.createReadStream("./assets/lorum-ipsum.md","UTF-8")

//process.stdout.write("Hello")

/* writeStream.write(`
    Hello I am using write stream to write the data.
    It is similar to process.stdout.write which is also a write stresm to take writable input from terminal

`)

process.stdin.on("data",data=>{
    writeStream.write(data)
}) */

/* readStream.on("data",data=>{
    writeStream.write(data)
})
 */
//process.stdin.pipe(writeStream)

readStream.pipe(writeStream)