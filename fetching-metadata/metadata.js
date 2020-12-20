const fs = require("fs");

const file = process.argv[2];


function printMetadata(file){

 try{ const fileStats = fs.statSync(file);
  console.log(fileStats);
 }

 catch(err){


    console.error('the file or directory doesnt exist')



 }

}




printMetadata(file);
