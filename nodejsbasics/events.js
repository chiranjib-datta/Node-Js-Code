const events=require("events");
const emitter= new events.EventEmitter();



 emitter.on('customEvent',(message,user)=>{
     console.log(`${user} : ${message}`)
 })

 emitter.emit('customEvent','Hello World','Computer');
 emitter.emit('customEvent','Thanks Cool huh!','Alex');

process.stdin.on('data',data=>{
     const input=data.toString().trim();
     if(input=='exit'){
         emitter.emit('customEvent','Good Bye','Process');
         process.exit();
     }else{
         emitter.emit('customEvent',input,'terminal');
         
     }
 })
  