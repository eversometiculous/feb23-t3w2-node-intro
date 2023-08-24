const promptSync = require('prompt-sync');          // all require stuff should be at the top of the code, to make things easier!!

class SomeCustomError extends Error{
    constructor(message = "Some error has happened, write a better message lol!") {
        super();

        this.statusCode = 404;

        this.message = message;
    }
}

function app(){
    const promptInstance = promptSync({
        sigint: true        // allows CTRL+C to exit the app
    });
    
    // some comment here
    // comment for naomi
    
    // or const promptInstance = require('prompt-sync')({sigint:true});
    
    let userInput = null;
    let userEnteredNumber = false;
    
    do {
        userInput = promptInstance("What is the coolest number in the universe? ");
    
        if (!parseInt(userInput) && !parseFloat(userInput)) {
            //throw "User did not enter a number!";
            throw new Error("User did not enter a number!!");       //another style
        }
    
        let userInputAsNumber = Number(userInput);
    
        if (userInputAsNumber === 42){
            console.log("The universe thanks you for figuring out the answer!");
            userEnteredNumber = true;
        
        } else {
            console.log("The universe seems unfulfilled...");
        }
    } while (!userEnteredNumber);
}

try {
    app();
    console.log("App executed successfully!");
} catch (error) {
    if (error.statusCode){
        console.log(`Error ${error.statusCode} occurred, its message is ${error.message}`);
    } else {
        console.log("An error has occurred!" + error.message);
    }
} finally   {
    console.log("App has finished running. Pretend there's nice DB closing code here!")
}

/*
try {
    some code to execute
}   catch   (some Error instance)   {
    some error-handling code
}   finally {
    close up smoothly and safely without instantly crashing or otherwise quickly closing
}

app()

// helloWorld(userInput);

// let {messagesToShare} = require('./messageList');

//function helloWorld(someMessageToSay){
//   console.log(someMessageToSay);
//}

// helloWorld("Hello there!");

//for (const message of messagesToShare) {
//    helloWorld(message);
//}