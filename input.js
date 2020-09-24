
userInputs = function(callback) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let questions = {
    url : 'What is the URL? ',
    path : 'What is the path? '
  };
  
  let requestObj = {};
  
  
  rl.question(questions.url, (answer) => {
    requestObj["url"] = answer;
    rl.question(questions.path, (answer) => {
      requestObj["path"] = answer;
      callback(requestObj.url, requestObj.path); 
      rl.close();
    });
  });
};

module.exports = { userInputs };