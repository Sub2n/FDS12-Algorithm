/* eslint-disable max-len */
// 11. Check Palindrom
// palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음,
// 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다.
// 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라.
// 단, 반드시 1자 이상의 문자열을 인자로 전달한다.
function checkPalindrom(str) {
  return [...str].reverse().join('') === str;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true

// 12. 중복 요소 제거
// 인수로 전달된 배열의 요소 중에서 중복된 요소를 제외하고 유니크한 요소만을 반환하는 함수를 작성하라.
// for 문 대신 forEach를 사용하도록 하자.
function uniq(array) {
  const newArr = [];
  array.forEach((element) => {
    if (!(newArr.includes(element))) newArr.push(element);
  });
  return newArr;
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

// 13. 중복된 요소
// 인수로 전달된 배열의 요소 중에서 중복된 요소만으로 구성된 배열을 반환하는 함수를 작성하라.

// for 문 대신 forEach를 사용하도록 하자.
function findDuplicated(array) {
  const newArr = [];
  const dupArr = [];
  array.forEach((element, index, self) => {
    if (!(newArr.includes(element))) newArr.push(element);
    if (newArr.includes(self[index + 1])) dupArr.push(self[index + 1]);
  });
  return dupArr;
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]


// 14. 약수의 합
// 어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환한다.

// 약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다.
function sumDivisor(num) {
  const divisor = [];
  for (let i = 1; i < num + 1; i++) {
    if (num % i === 0) divisor.push(i);
  }
  return divisor.reduce((a, b) => a + b);
}

console.log(sumDivisor(12)); // 28

// 15. 소수 찾기
// numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라. 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.

// 소수(素數, prime number)는 2, 3, 5, 7, 11, 13, 17…과 같이 1과 자신 이외의 어떤 수로도 나눠지지 않는 1보다 큰 양의 정수이다.
// 에라토스테네스의 체. n이 소수라면 (x: x >= 2 && x <= n/2)인 자연수 x로 나누어 떨어지면 안된다.
function numberOfPrime(n) {
  const primes = [];
  function prime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  for (let i = 1; i < n; i++) {
    if (prime(i)) primes.push(i);
  }
  return primes.length;
}

console.log(numberOfPrime(10)); // 4

// 16. 피보나치 수
// 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 반환하는 fibonacci 함수를 작성하라. 예를 들어 n = 3이라면 2를 반환한다.
function fibonacci(n) {
  let fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo = fibo.concat(fibo[n - 1] + fibo[n - 2]);
  }
  return fibo;
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8