const sentence  = "hello there from lighthouse labs";

let newSen = sentence + "\n";

let counter = 0;
for (const char of newSen) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter)
  counter += 500;
}

      