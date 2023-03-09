// node myFile.js

const pendingTimers =[];
const pendingOStasks = [];
const pendingOperations = [];


// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setXXX series?

  // Check two: Any pending OS tasks? ( ex: server listening to port )

  // Check three: Any pending long running operations? ( ex: fs module )

  return pendingTimers.length || pendingOStasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called. (setTimeout, setInterval)
  
  // 2) Node looks at pendingOStasks and pendingOperations and calls relevant callbacks.
  
  // 3) Pause execution. Continue whenever some number of event occur
  //  - a new pendingOStask is done
  //  - a new pendingOperation is done
  //  - a timer is about to complete

  // 4) Look at pendingTimers. (setImmediate)

  // 5) handle any 'close' events. All clean up codes
}


// exit back to terminal