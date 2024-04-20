import {
  ActionType,
  Actions,
  State,
} from "@/hooks/useSelectedState/types/types";
import { reducer } from "@/hooks/useSelectedState/useSelectedState";
import { MockResponseObject } from "@/pages/types/types";
import "@testing-library/jest-dom";

describe("useSelectedState Hook", () => {
  const mockInitialStateConstructor = (params: MockResponseObject[]): State => {
    let initialObj: State = {
      brand: "",
      model: "",
      year: "",
    };

    for (let index = 0; index < params.length; index++) {
      const { paramKey, paramValue } = params[index];

      for (let item of Object.keys(initialObj)) {
        if (item === paramKey) {
          initialObj[item as keyof State] = paramValue;
        }
      }
    }

    return initialObj;
  };

  it("should return a state with a new brand", () => {
    const mockInitialState = mockInitialStateConstructor([]);

    const brand: string = "1";

    const expectedArr: State = {
      brand: "1",
      model: "",
      year: "",
    };

    const mockAction: Actions = { type: ActionType.AddBrand, payload: brand };

    const resp = reducer(mockInitialState, mockAction);

    expect(resp).toMatchObject(expectedArr);
  });

  it("should return a state with a new model", () => {
    const mockInitialState = mockInitialStateConstructor([
      { paramKey: "brand", paramValue: "1" },
    ]);

    const model: string = "1";

    const expectedArr: State = {
      brand: "1",
      model: "1",
      year: "",
    };

    const mockAction: Actions = { type: ActionType.AddModel, payload: model };

    const resp = reducer(mockInitialState, mockAction);

    expect(resp).toMatchObject(expectedArr);
  });

  it("should return a state with new years", () => {
    const mockInitialState = mockInitialStateConstructor([
      { paramKey: "brand", paramValue: "1" },
      { paramKey: "model", paramValue: "1" },
    ]);

    const year: string = "2005-1";

    const expectedArr: State = {
      brand: "1",
      model: "1",
      year: "2005-1",
    };

    const mockAction: Actions = { type: ActionType.AddYear, payload: year };

    const resp = reducer(mockInitialState, mockAction);

    expect(resp).toMatchObject(expectedArr);
  });

  it("should throw an error when no valid action is sent", () => {
    const mockInitialState = mockInitialStateConstructor([]);

    const mockAction: any = {};

    expect(() => {
      reducer(mockInitialState, mockAction);
    }).toThrow("No valid reducer actions");
  });
});
