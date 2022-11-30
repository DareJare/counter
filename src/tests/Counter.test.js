// import necessary react testing library helpers here
// import the Counter component here

import {render, screen} from "@testing-library/react";
import App from "../components/App";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    render(<App />);
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    render(<App />);
    const initialCount = screen.getByText(/0/i);
    expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    render(<App />);
    userEvent.click(screen.getByRole('button', {name: '+'}))
    const count = screen.getByText(/1/i);
    expect(count).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    render(<App />);
    userEvent.click(screen.getByRole('button', {name: '-'}))
    const count = screen.getByText(/-1/i);
    expect(count).toBeInTheDocument();
});
