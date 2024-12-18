const fizzBuzz = number => {
if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
} else if (number % 3 === 0) {
    return 'Fizz';
} else if (number % 5 === 0) {
    return 'Buzz';
} else {
    return number;
}
};

 // Arrange
 const number = 30; // Example number to test
 const expected = 'FizzBuzz'; // Expected result for this number
 
 // Act
 const result = fizzBuzz(number);
 
 // Assert
 if (result === expected) {
    console.log('Test passed!');
 } else {
    console.log(`Test failed. Expected ${expected}, but got ${result}.`);
 }