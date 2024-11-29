import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For custom matchers like .toBeInTheDocument()
import StringCalculator from "../StringCalculator";

describe("StringCalculator Component", () => {
  test("should display a default result of 0", () => {
    render(<StringCalculator />);
    const resultElement = screen.getByText(/Result: 0/i);
    expect(resultElement).toBeInTheDocument();
  });

  test("basic requirement : should calculate the sum of comma-separated numbers", () => {
    render(<StringCalculator />);
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button", { name: /calculate/i });

    fireEvent.change(inputElement, { target: { value: "1,2,3" } });

    fireEvent.click(buttonElement);

    const resultElement = screen.getByText(/Result: 6/i);
    expect(resultElement).toBeInTheDocument();
  });
});
