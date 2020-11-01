import React, { Component } from 'react';
import Correct from './Correct';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import trivia from './Apprentice_TandemFor400_Data.json';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRandomQuestion(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      answer: '',
      score: 0,
      questionNumber: 0,
      question: 0,
      correctAnswer: null,
      askedQs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRandomQuestion = this.getRandomQuestion.bind(this);
    this.checkQuestions = this.checkQuestions.bind(this);
  }

  getRandomQuestion(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  componentDidMount() {
    const randomQ = this.getRandomQuestion(0, trivia.length - 1);
    this.setState(() => ({
      question: randomQ,
      correctAnswer: trivia[randomQ].correct,
    }));
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    // console.log(itemName, itemValue);
    this.setState({ [itemName]: itemValue });
    // if (this.state.correctAnswer === this.state.answer) {
    //   this.setState(() => ({ rightOrWrong: true }));
    // }
  }

  checkQuestions() {
    this.state.askedQs.forEach((element) => {
      if (element === this.state.question) {
        console.log('already asked');
      } else {
        console.log('not yet asked');
      }
    });
  }

  componentDidUpdate() {
    const randomQ = this.getRandomQuestion(0, trivia.length - 1);
    for (let q of this.state.askedQs) {
      //   console.log(this.state.question);
      if (this.state.question === q) {
        this.setState(() => ({
          question: randomQ,
          correctAnswer: trivia[randomQ].correct,
        }));
      }
      //   console.log(q);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // const correctAnswer = trivia[this.state.question].correct;
    // console.log(correctAnswer);
    const userAnswer = this.state.answer;
    const randomQ = this.getRandomQuestion(0, trivia.length - 1);
    if (userAnswer === this.state.correctAnswer) {
      // alert(`${correctAnswer} is correct!`);
      this.setState((state) => ({
        score: (state.score += 1),
        questionNumber: (state.questionNumber += 1),
        question: randomQ,
        askedQs: [...state.askedQs, state.question],
        answer: '',
        correctAnswer: trivia[randomQ].correct,
      }));
      // alert(`${this.state.correctAnswer} is correct!`);
    } else {
      this.setState((state) => ({
        questionNumber: (state.questionNumber += 1),
        question: randomQ,
        askedQs: [...state.askedQs, state.question],
        answer: '',
        correctAnswer: trivia[randomQ].correct,
      }));
      // alert(`The correct answer was: ${this.state.correctAnswer}`);
    }
  }

  restart() {
    window.location.reload();
  }

  render() {
    const questNum = this.state.questionNumber;
    const userQuest = this.state.question;
    const dispQuestion = trivia[userQuest].question;

    return (
      <Container fluid>
        <Row>
          <Col>
            <h3 className="mt-2">Your score is: {this.state.score}</h3>
            {questNum < 10 ? (
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>
                    <h4>
                      Question {questNum + 1}: {dispQuestion}
                    </h4>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                  >
                    <option>Choose one of the four answers</option>
                    <option>{trivia[userQuest].incorrect[0]}</option>
                    <option>{trivia[userQuest].correct}</option>
                    <option>{trivia[userQuest].incorrect[1]}</option>
                    <option>{trivia[userQuest].incorrect[2]}</option>
                  </Form.Control>
                </Form.Group>
                {this.state.answer !== '' ? (
                  <Correct
                    answer={this.state.correctAnswer}
                    userAnswer={this.state.answer}
                  />
                ) : null}
              </Form>
            ) : (
              <Button onClick={this.restart}>Click to restart</Button>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Question;
