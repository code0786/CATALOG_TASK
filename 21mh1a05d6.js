function calculateResult(jsonInput) {
  const { keys, conversions } = JSON.parse(jsonInput);
  const { n, k } = keys;
  let sum = 0n; // Initialize sum as a BigInt

  // Perform base conversions and sum the results
  for (const { base, value } of conversions) {
    let base10Value;
    if (base === '16') {
      base10Value = BigInt(`0x${value}`);
    } else {
      base10Value = BigInt(value, parseInt(base));
    }
    sum += base10Value; // Accumulate the sum
  }

  // Calculate (Sum / n) % k
  const result = (sum / BigInt(n)) % BigInt(k);
  return result.toString(); // Return result as a string
}

const result = calculateResult(jsonInput);
console.log(`Result: ${result}`);