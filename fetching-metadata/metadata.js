const fs = require("fs");

const file = process.argv[2];


function printMetadata(file){

 try{ const fileStats = fs.statSync(file);

   console.log(process.argv[0],'data');
   console.log(process.argv[1],'more data');
  console.log(fileStats);


 }

 catch(err){


    console.error('the file or directory doesnt exist',file)



 }

}




printMetadata(file);
