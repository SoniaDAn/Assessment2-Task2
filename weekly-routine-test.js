const weeklyRoutine = day => {

if (day === 2) {
    return 'On a Tuesday I go to the gym.';
} else if (day === 4) {
    return 'On a Thursday I go to the gym.';
} else if (day >= 1 && day <= 5) {
   return 'Today is a weekday.';
} else if (day === 7) {
    return 'On a Sunday I do gardening.';
} else if (day === 6) {
    return 'Today is a rest day.';
} else {
    return 'Error, please enter a number between 1 and 7';
}
};

// Arrange
day = 4; // The correct index for Thursday
const expected = 'On a Thursday I go to the gym.'; // Correct expected result

// Act
const result = weeklyRoutine(4); // This corresponds to "Thursday"

// Assert
if (result === expected) {
   console.log('Test passed!');
} else {
   console.log(`Test failed. Expected ${expected}, but got ${result}`);
}
