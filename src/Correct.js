import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Correct(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      {props.answer === props.userAnswer ? (
        <Alert show={show} variant="success">
          <Alert.Heading>That's right!</Alert.Heading>
          <p>{props.answer} was correct!</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              onClick={() => setShow(false)}
              variant="outline-success"
            >
              Click for next question.
            </Button>
          </div>
        </Alert>
      ) : (
        <Alert show={show} variant="danger">
          <Alert.Heading>Sorry that's not correct!</Alert.Heading>
          <p>{props.answer} was correct.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              onClick={() => setShow(false)}
              variant="outline-danger"
            >
              Click for next question.
            </Button>
          </div>
        </Alert>
      )}
    </div>
  );
}

export default Correct;
