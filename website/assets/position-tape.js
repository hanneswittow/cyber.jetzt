// Function to get a random integer between a minimum and maximum value (inclusive)
function getRandomIntBetween(min, max) {
  // Random number between min and max, rounded to the nearest integer
  return Math.round(Math.random() * (max - min) + min);
}

// Function to apply random rotation and z-index to two elements representing tape
function tapeRotate() {
  // Nested function to determine rotation angles for two tape elements
  function determineRotationDegs() {
    let tape1deg, tape2deg;  // Initialize variables to hold rotation degrees for each tape

    do {
      // Get random rotation degrees for each tape within a range of -40 to 40 degrees
      tape1deg = getRandomIntBetween(-40, 40);
      tape2deg = getRandomIntBetween(-40, 40);
    // Keep recalculating until the difference between the two is at least 10 degrees
    } while (Math.abs(tape1deg - tape2deg) < 10);

    // Return the rotation degrees for both tapes
    return [tape1deg, tape2deg];
  }

  // Nested function to determine which tape is on top based on z-index
  function determineIndexes() {
    let tape1Index, tape2Index;  // Variables to hold z-index for each tape
    
    const probabilityTape1isOnTop = 0.8;  // Probability that tape1 is on top
    const randomValue = Math.random();  // Get a random number between 0 and 1

    // Determine which tape has a higher z-index based on the random value and probability
    if (randomValue < probabilityTape1isOnTop) {
        tape1Index = 1;  // Tape1 is on top
        tape2Index = 0;  // Tape2 is below
    } else {
        tape1Index = 0;  // Tape1 is below
        tape2Index = 1;  // Tape2 is on top
    }

    // Return the z-index for both tapes
    return [tape1Index, tape2Index];
  }

  // Get the DOM elements representing tape1 and tape2
  const tape1 = document.getElementById("tape1");
  const tape2 = document.getElementById("tape2");
  
  // Determine the rotation degrees and z-indexes for the tapes
  const [tape1deg, tape2deg] = determineRotationDegs();
  const [tape1Index, tape2Index] = determineIndexes();

  // Apply the rotation and z-index to tape1
  tape1.setAttribute(
    "style",
    [
      `transform: rotate(${tape1deg}deg)`,  // Apply rotation in degrees
      `z-index: ${tape1Index}`,  // Set z-index to determine layering
    ].join(";")  // Join style attributes with a semicolon separator
  );

  // Apply the rotation and z-index to tape2
  tape2.setAttribute(
    "style",
    [
      `transform: rotate(${tape2deg}deg)`,  // Apply rotation in degrees
      `z-index: ${tape2Index}`,  // Set z-index to determine layering
    ].join(";")  // Join style attributes with a semicolon separator
  );
}

// Function to shift the position of two wrapper elements vertically
function tapeTopDownShift() {
  // Get the DOM elements representing wrapper1 and wrapper2
  const wrapper1 = document.getElementById("wrapper1");
  const wrapper2 = document.getElementById("wrapper2");
  
  // Get random vertical shifts for each wrapper within specified ranges
  const topDownShift1 = getRandomIntBetween(10, -40);
  const topDownShift2 = getRandomIntBetween(-25, 25);

  // Apply the vertical shift to wrapper1
  wrapper1.setAttribute(
    "style",
    [
      `top: ${topDownShift1}vh`,  // Set the position based on viewport height (vh)
    ].join(";")  // Join style attributes with a semicolon separator
  );

  // Apply the vertical shift to wrapper2
  wrapper2.setAttribute(
    "style",
    [
      `top: calc(-100vh + ${topDownShift2}vh)`,  // Calculate position with a vertical shift
    ].join(";")  // Join style attributes with a semicolon separator
  );
}
