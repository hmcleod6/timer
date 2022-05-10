let time = process.argv.slice(2);

setTimeout(() => {
  process.stdout.write('\x07');
}, time);