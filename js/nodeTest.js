// We can get an iteration to skip using continue;
for (var i = 1; i < 100; i++) {

    if (i % 5 !== 0) {
        // skipping all odd numbers;
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}
