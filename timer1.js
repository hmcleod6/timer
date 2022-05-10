
const timers = process.argv.slice(2);
for (let j in timers) {
  setTimeout(() => {
    process.stdout.write(`\x07${timers[j]}\n`);
  }, timers[j] * 1000);
};