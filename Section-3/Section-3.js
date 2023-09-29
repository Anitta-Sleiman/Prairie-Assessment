var user_input = parseInt(prompt("Enter a number"));
var isPrime = true;
var total = "";

if (user_input < 2 || isNaN(user_input)) {
  console.log("Please enter a valid input");
} else {
  for (let i = 2; i <= user_input; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      total += `${i} `;
    }
  }
}
console.log(total);
