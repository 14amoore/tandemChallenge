## This is my submission for the Tandem Code Challenge

I created this project using Create React App and React Bootstrap.

## The assumptions given in the prompt are as follows:

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a
  JSON file.

  ## These are the criteria for acceptance:

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

## To run the code:

1. Clone this repo.
2. Once you've cloned the repo navigate to it using the command line.
3. Now that you're in the local copy of the repo type "npm i" to download the dependencies.
4. Finally, when all of the dependencies are downloaded type "npm run start" and you'll be able to practice your trivia skills!

#### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Future improvements:

- I would like to randomize where the correct answer appears when the questions are rendered. Right now the correct answer is always the second answer.
- It would be really fun to add a start page where users can sign in with a leaderboard of the top ten scores.
- Adding more animation would make the experience of playing the game more engaging.
- I have some tests written but I am quite new to testing and there is a lot of room for improvement in that area.

#### Known issues:

- There are no known issues with this as of now. BUT React does throw a warning because there is an issue with React Bootstrap when the answer notification is dismissed. This is documented here https://github.com/react-bootstrap/react-bootstrap/issues/5075, and to my knowledge does hinder the performance of the app.
