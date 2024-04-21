import FormComponent from "@/components/FormComponent";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Form Container Component", () => {
  const unmockedFetch = global.fetch;
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    ) as jest.Mock;
  });
  beforeEach(() => {
    render(<FormComponent />);
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("should render two base select components", () => {
    const selectBrand = screen.getByTestId("select-brand");
    const selectModel = screen.getByTestId("select-model");

    expect(selectBrand).toBeInTheDocument();
    expect(selectModel).toBeInTheDocument();
  });
});
