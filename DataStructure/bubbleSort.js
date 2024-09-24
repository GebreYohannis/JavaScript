const numbers = [1, 3, 2, 4, 6, 5];

numbers.sort((a, b) => a - b);
numbers.forEach((num) => console.log(num));

for (let i = numbers.length - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      const temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

for (let number of numbers) {
  console.log(number);
}
