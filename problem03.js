// Problem 3

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var largestFactor = function(num) {
    var primeFactors = [];
    var n = num;
    var i = 2;
    while (n !== i) {
        if (n % i === 0) {
            n /= i;
            primeFactors.push(i);
        } else {
            i++;
        }
    }
    
    primeFactors.push(n);
    console.log(primeFactors[primeFactors.length - 1]);
};

largestFactor(600851475143);