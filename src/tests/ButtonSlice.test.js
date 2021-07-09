import reducer, { SetFilterType } from "../reducers/ButtonSlice";

describe("Reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      type: "tile",
      demo: "",
      filterType: {
        favorite: "",
        data: "",
        row: "",
      },
    });
  });
});

describe("SetFilterType", () => {
  const previousState = {
    type: "tile",
    demo: "",
    filterType: {
      favorite: "",
      data: "",
      row: "",
    },
  };
  test("setup buttons to filter data", () => {
    expect(
      reducer(
        previousState,
        SetFilterType({ type: "favorite", color: "primary" })
      )
    ).toEqual({
      type: "tile",
      demo: "",
      filterType: {
        favorite: "favorite",
        data: "",
        row: "",
      },
    });
  });

  test("clear favorite after second click", () => {
    expect(
      reducer(
        previousState,
        SetFilterType({ type: "favorite", color: "danger" })
      )
    ).toEqual({
      type: "tile",
      demo: "",
      filterType: {
        favorite: "",
        data: "",
        row: "",
      },
    });
  });
});
