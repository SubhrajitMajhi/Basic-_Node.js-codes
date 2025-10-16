// find prime numbers in numay

const num = [19, 17, 16, 14, 2222, 21];

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const primeFlags = num.map(isPrime);
console.log("Prime flags:", primeFlags);