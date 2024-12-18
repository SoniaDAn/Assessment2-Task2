const costOfParking = timeOnTheHour => {
    if (timeOnTheHour >= 0 && timeOnTheHour < 5) {
        return 300;
    } else if (timeOnTheHour >= 5 && timeOnTheHour < 10) {
        return 350;
    } else if (timeOnTheHour >= 10 && timeOnTheHour < 15) {
        return 500;
    } else if (timeOnTheHour >= 15 && timeOnTheHour < 20) {
        return 700;
    } else if (timeOnTheHour >= 20 && timeOnTheHour <= 23) {
        return 400;
    } else {
        return 'Error. Please enter a number between 0 and 23';
    }
};

// Arrange
const timeOnTheHour = 4; // Example number to test
const expected = 300; // Expected result for this number

// Act
const result = costOfParking(timeOnTheHour);

// Assert
if (result === expected) {
   console.log('Test passed!');
} else {
   console.log(`Test failed. Expected ${expected}, but got ${result}.`);
}