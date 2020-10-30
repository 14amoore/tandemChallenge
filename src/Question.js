import React, { Component } from 'react';
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
      answer: '',
      score: 0,
      questionNumber: 0,
      question: 0,
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
    const randomQ = this.getRandomQuestion(0, this.props.trivia.length);
    console.log(trivia);
    this.setState({
      question: randomQ,
    });
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    // console.log(itemName, itemValue);
    this.setState({ [itemName]: itemValue });
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
    const randomQ = this.getRandomQuestion(0, this.props.trivia.length);
    for (let q of this.state.askedQs) {
      //   console.log(this.state.question);
      if (this.state.question === q) {
        this.setState(() => ({
          question: randomQ,
        }));
      }
      //   console.log(q);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const correctAnswer = this.props.trivia[this.state.question].correct;
    // console.log(correctAnswer);
    const userAnswer = this.state.answer;
    const randomQ = this.getRandomQuestion(0, this.props.trivia.length);
    if (userAnswer === correctAnswer) {
      alert(`${correctAnswer} is correct.`);
      this.setState((state) => ({
        score: (state.score += 1),
        questionNumber: (state.questionNumber += 1),
        question: randomQ,
        askedQs: [...state.askedQs, state.question],
        answer: '',
      }));
    } else {
      alert(`The correct answer was: ${correctAnswer}`);
      this.setState((state) => ({
        questionNumber: (state.questionNumber += 1),
        question: randomQ,
        askedQs: [...state.askedQs, state.question],
        answer: '',
      }));
    }
  }

  restart() {
    window.location.reload();
  }

  render() {
    const myTrivia = this.props.trivia;
    const questNum = this.state.questionNumber;
    const userQuest = this.state.question;
    // console.log(userQuest);
    // console.log(myTrivia[userQuest]);
    return (
      <Container fluid>
        <Row>
          <Col>
            <h4>Your score is: {this.state.score}</h4>
            {questNum < 10 ? (
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>
                    Question {questNum + 1}: {myTrivia[userQuest].question}
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                  >
                    <option>Choose one of the four answers</option>
                    <option>{myTrivia[userQuest].incorrect[0]}</option>
                    <option>{myTrivia[userQuest].correct}</option>
                    <option>{myTrivia[userQuest].incorrect[1]}</option>
                    <option>{myTrivia[userQuest].incorrect[2]}</option>
                  </Form.Control>
                </Form.Group>
                <Button type="submit">Submit Answer</Button>
              </Form>
            ) : (
              //   <h1>Game Over</h1>
              <Button onClick={this.restart}>Click to restart</Button>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Question;
