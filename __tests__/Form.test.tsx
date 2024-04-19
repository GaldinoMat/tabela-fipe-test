import FormComponent from "@/app/components/FormComponent";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Form Component", () => {
  beforeEach(() => {
    render(<FormComponent />);
  });

  it("should render two base select components", () => {
    const select1 = screen.getByTestId("select-car");
    const select2 = screen.getByTestId("select-model");

    expect(select1).toBeInTheDocument();
    expect(select2).toBeInTheDocument();
  });

  it("should not render the year select component initially", () => {
    const select1 = screen.getByTestId("select-year");

    expect(select1).not.toBeVisible();
  });
});
