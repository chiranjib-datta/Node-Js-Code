const name=require("./myModule");
//const countModule=require("./myModuleTwo");

const {inc,dec,getCount}=require("./myModuleTwo");
/* countModule.inc();
countModule.inc();
countModule.inc();
 */
inc();
inc();
dec();
console.log(getCount())


console.info(name)