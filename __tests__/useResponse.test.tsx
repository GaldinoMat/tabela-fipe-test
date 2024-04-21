import { ActionType, Actions, State } from "@/hooks/useResponse/types/types";
import { reducer } from "@/hooks/useResponse/useResponse";
import { GenericArr } from "@/types/types";

import "@testing-library/jest-dom";

describe("useResponse Hook", () => {
  const mockInitialStateConstructor = (): State => {
    return {
      brands: [],
      models: [],
      years: [],
      errorMessage: "",
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
      errorMessage: "",
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
      errorMessage: "",
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
      errorMessage: "",
    };

    const mockAction: Actions = { type: ActionType.AddYears, payload: years };

    const resp = reducer(mockInitialState, mockAction);

    expect(resp).toMatchObject(expectedArr);
  });

  it("should return a state with error message", () => {
    const filledMockInitialState: State = {
      brands: [{ codigo: "1", nome: "A" }],
      models: [{ codigo: "1", nome: "B" }],
      years: [{ codigo: "1", nome: "C" }],
      errorMessage: "",
    };

    const expectedArr: State = {
      brands: [],
      models: [],
      years: [],
      errorMessage: "Um erro ocorreu. Tente novamente mais tarde.",
    };

    const mockAction: Actions = { type: ActionType.AddError };

    const resp = reducer(filledMockInitialState, mockAction);

    expect(resp).toMatchObject(expectedArr);
  });

  it("should clear the state", () => {
    const filledMockInitialState: State = {
      brands: [{ codigo: "1", nome: "A" }],
      models: [{ codigo: "1", nome: "B" }],
      years: [{ codigo: "1", nome: "C" }],
      errorMessage: "",
    };

    const expectedArr: State = {
      brands: [{ codigo: "1", nome: "A" }],
      models: [],
      years: [],
      errorMessage: "",
    };

    const mockAction: Actions = { type: ActionType.ClearState };

    const resp = reducer(filledMockInitialState, mockAction);

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
