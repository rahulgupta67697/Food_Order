import React, { useState, useMemo } from 'react';

function UseHook() {
  const [n, setN] = useState("");

  const nthPrime = useMemo(() => {
    const nth = parseInt(n);
    if (isNaN(nth) || nth < 1) return null;

    let count = 0;
    let num = 1;

    while (count < nth) {
      num++;
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) count++;
    }

    return num;
  }, [n]);

  return (
    <>
      <h3>Find Nth Prime Number</h3>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(e.target.value)}
        placeholder="Enter position (e.g. 4 → 7)"
      />
      {nthPrime !== null && (
        <p>The {n}th prime number is: {nthPrime}</p>
      )}
    </>
  );
}

export default UseHook;
