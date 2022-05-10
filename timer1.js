const timerIntervals = process.argv.slice(2).filter(val => val > 0).filter(time => !isNaN(time));

let timer = () => {
  if (timerIntervals === '') {
    return;
  }
  for (let j in timerIntervals) {
    setTimeout(() => {
      process.stdout.write(`\x07${timerIntervals[j]}\n`);
    }, timerIntervals[j] * 1000);
  }
};

timer();