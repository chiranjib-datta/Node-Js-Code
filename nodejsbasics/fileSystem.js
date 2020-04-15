const fs=require("fs");
/* const files=fs.readdirSync("./assets");

fs.readdir("./assets",(err,files)=>{
    if(err){
        throw err;
    }else{
        console.log("Files using async are: "+files);
    }
})
console.log("Files are using sync: "+files);



const text=fs.readFileSync("./assets/Readme.md","UTF-8");
console.log("Text using async:"+text);

fs.readFile("./assets/Readme.md",(err,text)=>{
    if(err){
        throw err;
    }else{
        console.log("Text using async:"+text)
    }
})

fs.readFile("./assets/alex.jpg",(err,buffer)=>{
    if(err){
        throw err;
    }else{
        console.log("Buffer of the binary file: "+buffer);
    }
}) */

const md=`
    #This is a new read me file
    We can write text to a file using fs.writeFile
    #fs.readdir
    #fs.readFile
    #fs.readFileSync
`

fs.writeFile("./assets/notes.md",md.trim(),(err)=>{
    if(err){
        throw err;
    }else{
        console.info("Created")
    }
})
if(fs.existsSync("./storage-files")){
    console.log("Exists")
}else{
    fs.mkdir("storage-files",err=>{
        if(err){
            throw err;
        }
        console.log("Directory created")
    });
}


const colorData=require("./assets/colors.json");
colorData.colorList.forEach(c => {
    fs.appendFile("./storage-files/colors.md",`${c.color}:${c.hex}\n`,err=>{
        if(err){
            throw err;
        }
    })
    
});

//fs.renameSync("./assets/colors.json","./assets/colorData.json");

fs.rename("./assets/notes.md","storage-files/notes.md",err=>{
    if(err)
        throw err;
    else
        console.info("renamed")
})

//fs.unlinkSync("./assets/alex.jpg");

//fs.renameSync("./storage-files","./storage");
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`)
});
fs.rmdir("./storage",err=>{
    if(err){
        throw err
    }else{
        console.info("removed")
    }
})

