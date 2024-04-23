function getRandomIntBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function tapeRotate() {
  function determineRotationDegs() {
    let tape1deg, tape2deg;
    
    do {
      tape1deg = getRandomIntBetween(-40, 40);
      tape2deg = getRandomIntBetween(-40, 40);
    } while (Math.abs(tape1deg - tape2deg) < 10);
    
    return [tape1deg, tape2deg];
  }
  
  function determineIndexes() {
    let tape1Index, tape2Index;
    
    const probabilityTape1isOnTop = 0.8; 
    const randomValue = Math.random();
    
    if (randomValue < probabilityTape1isOnTop) {
        // an object with a greater z-index is placed on top of the others
        tape1Index = 1;
        tape2Index = 0;
    } else {
        tape1Index = 0;
        tape2Index = 1;
    }
    
    return [tape1Index, tape2Index];
  }

  const tape1 = document.getElementById("tape1");
  const tape2 = document.getElementById("tape2");
  const [tape1deg, tape2deg]     = determineRotationDegs();
  const [tape1Index, tape2Index] = determineIndexes();
  const textShift = Math.floor(Math.random() * 20);
  
  tape1.setAttribute(
    "style",
    [
      `transform: rotate(${tape1deg}deg)`,
      `z-index: ${tape1Index}`,
    ].join(";")
  );
  
  tape2.setAttribute(
    "style",
    [
      `transform: rotate(${tape2deg}deg)`,
      `z-index: ${tape2Index}`,
    ].join(";")
  );
}

function tapeTopDownShift() {
  const wrapper1 = document.getElementById("wrapper1");
  const wrapper2 = document.getElementById("wrapper2");
  
  const topDownShift1 = getRandomIntBetween(10, -40);
  const topDownShift2 = getRandomIntBetween(-25, 25);
  
  wrapper1.setAttribute(
    "style",
    [
      `top: ${topDownShift1}vh`,
    ].join(";")
  );
  
  wrapper2.setAttribute(
    "style",
    [
      `top: calc(-100vh + ${topDownShift2}vh)`,
    ].join(";")
  );
}