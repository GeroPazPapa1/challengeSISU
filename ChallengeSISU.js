function findStringWithHash(targetHash) {
    const dictionary = "abefimoprstuv";
    const stringLength = 10;
    const seed = 41;
    
    function calculateHash(input) {
      let result = seed;
      for (let i = 0; i < input.length; i++) {
        result = result * 19 + dictionary.indexOf(input[i]);
      }
      return result;
    }
    
    const combinations = (function generateCombinations(length) {
      if (length === 0) return [''];
      const prev = generateCombinations(length - 1);
      return prev.flatMap((s) => dictionary.split('').map((char) => s + char));
    })(stringLength);
    
    for (const combination of combinations) {
      if (calculateHash(combination) === targetHash) {
        return combination;
      }
    }
    
    return null; 
  }
  
  const targetHash = 253674078499881;
  const result = findStringWithHash(targetHash);
  
  if (result) {
    console.log(`String encontrado: ${result}`);
  } else {
    console.log('No se encontró una coincidencia.');
  }