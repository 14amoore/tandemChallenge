import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Question from './Question';
import Correct from './Correct';

describe('Does App render?', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('Does Question render?', () => {
  test('renders Question component', () => {
    render(<Question />);
  });
});

describe('Does Correct render?', () => {
  test('renders Correct component', () => {
    render(<Correct />);
  });
});

describe('Select works?', () => {
  test('is user able to select correct answer?', () => {
    render(<App />);
    userEvent.selectOptions(screen.getByTestId('select-one'), [
      screen.getByTestId('correct'),
    ]);
    expect(screen.getByTestId('prompt').selected).toBe(false);
    expect(screen.getByTestId('inc1').selected).toBe(false);
    expect(screen.getByTestId('correct').selected).toBe(true);
    expect(screen.getByTestId('inc1').selected).toBe(false);
    expect(screen.getByTestId('inc1').selected).toBe(false);
  });
});
