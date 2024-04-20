import SelectComponent from "@/components/FormComponent/SelectComponent";
import { SelectProps } from "@/components/FormComponent/types/types";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Select Component", () => {
  const makeMockSelect = ({
    children,
    placeholder,
    testId,
    isHidden,
  }: SelectProps) => {
    return (
      <SelectComponent
        placeholder={placeholder}
        testId={testId}
        isHidden={isHidden}
      >
        {children}
      </SelectComponent>
    );
  };

  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ codigo: "1", nome: "Carro" }]),
      })
    ) as jest.Mock;
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("should render select component", () => {
    const obj: SelectProps = {
      testId: "select-brand",
      placeholder: "Marca",
      isHidden: false,
      children: [{ codigo: "1", nome: "Carro" }],
    };

    const composeSelectComponent = makeMockSelect(obj);

    render(composeSelectComponent);

    const field = screen.getByTestId("select-brand").querySelector("input");

    if (field !== null) {
      fireEvent.change(field, { target: { value: "1" } });
      expect(field.value).toBe("1");
    }
  });

  it("should not render select component when no children is passed", () => {
    render(
      <SelectComponent
        placeholder="Ano"
        testId="select-year"
        isHidden={[].length === 0 ? true : false}
      >
        {[]}
      </SelectComponent>
    );

    const selectYears = screen.getByTestId("select-year");

    expect(selectYears).not.toBeVisible();
  });
});
