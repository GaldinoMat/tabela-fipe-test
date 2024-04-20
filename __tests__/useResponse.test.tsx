import { ActionType, Actions, State } from "@/hooks/useResponse/types/types";
import { reducer } from "@/hooks/useResponse/useResponse";
import { GenericArr } from "@/pages/types/types";
import "@testing-library/jest-dom";

describe("useResponse Hook", () => {
  const mockInitialStateConstructor = (): State => {
    return {
      brands: [],
      models: [],
      years: [],
    };
  };

  it("should return a state with new brands", () => {
    const mockInitialState = mockInitialStateConstructor();

    const brands: GenericArr[] = [
      {
        codigo: "1",
        nome: "Honda",
      },
    ];

    const expectedArr: State = {
      brands: [
        {
          codigo: "1",
          nome: "Honda",
        },
      ],
      models: [],
      years: [],
    };

    const mockAction: Actions = { type: ActionType.AddBrands, payload: brands };

    const resp = reducer(mockInitialState, mockAction);

    expect(resp).toMatchObject(expectedArr);
  });

  it("should return a state with new models", () => {
    const mockInitialState = mockInitialStateConstructor();

    const models: GenericArr[] = [
      {
        codigo: "1",
        nome: "Civic",
      },
    ];

    const expectedArr: State = {
      brands: [],
      models: [
        {
          codigo: "1",
          nome: "Civic",
        },
      ],
      years: [],
    };

    const mockAction: Actions = { type: ActionType.AddModels, payload: models };

    const resp = reducer(mockInitialState, mockAction);

    expect(resp).toMatchObject(expectedArr);
  });

  it("should return a state with new years", () => {
    const mockInitialState = mockInitialStateConstructor();

    const years: GenericArr[] = [
      {
        codigo: "2022-3",
        nome: "2022 Gasolina",
      },
    ];

    const expectedArr: State = {
      brands: [],
      models: [],
      years: [
        {
          codigo: "2022-3",
          nome: "2022 Gasolina",
        },
      ],
    };

    const mockAction: Actions = { type: ActionType.AddYears, payload: years };

    const resp = reducer(mockInitialState, mockAction);

    expect(resp).toMatchObject(expectedArr);
  });

  it("should throw an error when no valid action is sent", () => {
    const mockInitialState = mockInitialStateConstructor();

    const mockAction: any = {};

    expect(() => {
      reducer(mockInitialState, mockAction);
    }).toThrow("No valid reducer actions");
  });
});
