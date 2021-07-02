// IMPORT MODULES under test here:
// import { example } from '../example.ts';
import { didUserWin } from '../utils';
const test = QUnit.test;

test('testing user win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'you win!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('rock vs paper', (expect) => {
    const expected = 'You Lose!';
    const actual = didUserWin('rock', 'paper');
    expect.equal(expected, actual);
});