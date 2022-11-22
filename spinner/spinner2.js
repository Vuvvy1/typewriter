process.stdout.write('hello from spinner2.js... \rheyyy\n');
let increment = 100;
let howLong = 4;
let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
do {
  howLong = howLong - 1;
  for (const r of spinner) {
    setTimeout(() => {
      process.stdout.write(r);
    }, increment);
    increment += 200;
  }
} while (howLong >= 0);