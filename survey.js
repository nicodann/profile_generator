const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerList = {};


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answers) => {
  answerList.name = answers;

  rl.question('What\'s an activity you like doing? ', (answers) => {
    answerList.activity = answers;

    rl.question('What do you listen to while doing that?', (answers) => {
      answerList.listen = answers;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answers) => {
        answerList.meal = answers;
        
        rl.question('What\'s your favourite thing to eat for that meal?', (answers) => {
          answerList.food = answers;

          rl.question('Which sport is your absolute favourite?', (answers) => {
            answerList.sport = answers;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answers) => {
              answerList.super = answers;
              rl.close();
              console.log(`\n${answerList.name} loves listening to ${answerList.listen} while ${answerList.activity}, devouring ${answerList.food} for ${answerList.meal}, prefers ${answerList.sport} over any other sport, and is amazing at ${answerList.super}.`);

              
            });
            
  
          });
          
  
        });
        
  
      });
      
  
    });
    

  });
  

});




















