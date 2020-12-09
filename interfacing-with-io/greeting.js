


process.stdin.on("data",(data) =>{


    const name = data.toString().trim().toUpperCase();

    //processing on each data event

    process.stdout.write(`Hello ${name}!`)


    if(name !== ''){

        process.stdout.write(` Hello ${name}`)


    }

    else{
        process.stderr.write(" Input was empty")
    }




});