// Prints in STDOUT the string argument
function displayMessage(strArg) {
  process.stdout.write(`${strArg}\n`);
}

// Export the function for use in other files
module.exports = displayMessage;
