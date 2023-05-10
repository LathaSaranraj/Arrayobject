let counter = 0;

// Define the function to be executed on each interval
function incrementCounter() {
  counter++;
  console.log("Counter value: " + counter);
}

// Call setInterval() to execute the function every 1 second (1000 milliseconds)
let intervalId = setInterval(incrementCounter, 1000);