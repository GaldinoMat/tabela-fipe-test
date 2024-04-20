import Form from "@/components/FormComponent/Form";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Form Component", () => {
  it("should call handleSubmit function when clicking the submit button", () => {
    const testSubmit = jest.fn((e) => e.preventDefault());
    render(<Form handleSubmit={testSubmit} isValid />);
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.click(submitButton);
    expect(testSubmit).toHaveBeenCalled();
  });
});
