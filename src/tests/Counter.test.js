// import necessary react testing library helpers here
import { render, fireEvent } from "@testing-library/react";
// import the Counter component here
import Counter from '../components/Counter';

let counter;

beforeEach(() => {
  // Render the Counter component here
  counter = render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = counter.getByText("Counter");
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = counter.getByTestId("count");
  expect(initCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const inc = counter.getByText("+");
  const count = counter.getByTestId("count");

  fireEvent.click(inc);
  expect(count).toHaveTextContent("1");
  fireEvent.click(inc);
  expect(count).toHaveTextContent("2");

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decr = counter.getByText("-");
  const count = counter.getByTestId("count");

  fireEvent.click(decr);
  expect(count).toHaveTextContent("-1");
  fireEvent.click(decr);
  expect(count).toHaveTextContent("-2");
});
