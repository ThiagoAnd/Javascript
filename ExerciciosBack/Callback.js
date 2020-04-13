function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = "Thiago"
    callback(name);
  }

  
processUserInput(greeting);