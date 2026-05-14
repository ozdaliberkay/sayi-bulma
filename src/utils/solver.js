
export function solve(numbers, target) {
  let bestResult = null;
  let minDiff = Infinity;
  let bestSteps = [];

  function backtrack(currentNumbers, steps) {
    for (let i = 0; i < currentNumbers.length; i++) {
      const num = currentNumbers[i];
      const diff = Math.abs(num - target);

      if (diff < minDiff) {
        minDiff = diff;
        bestResult = num;
        bestSteps = [...steps];
        if (minDiff === 0) return true;
      }
    }

    if (currentNumbers.length === 1) return false;

    for (let i = 0; i < currentNumbers.length; i++) {
      for (let j = 0; j < currentNumbers.length; j++) {
        if (i === j) continue;

        const a = currentNumbers[i];
        const b = currentNumbers[j];
        const remaining = currentNumbers.filter((_, idx) => idx !== i && idx !== j);

        const ops = [
          { name: '+', val: a + b },
          { name: '-', val: a - b },
          { name: '*', val: a * b },
          { name: '/', val: b !== 0 && a % b === 0 ? a / b : null }
        ];

        for (const op of ops) {
          if (op.val !== null && op.val > 0) {
            const nextSteps = [...steps, `${a} ${op.name} ${b} = ${op.val}`];
            if (backtrack([...remaining, op.val], nextSteps)) return true;
          }
        }
      }
    }
    return false;
  }

  backtrack(numbers, []);
  
  return {
    result: bestResult,
    diff: minDiff,
    steps: bestSteps,
    success: minDiff <= 9
  };
}

export function generateGame() {
  const singles = Array.from({ length: 5 }, () => Math.floor(Math.random() * 9) + 1);
  const double = (Math.floor(Math.random() * 9) + 1) * 10;
  const target = Math.floor(Math.random() * 900) + 100;
  return { numbers: [...singles, double], target };
}
