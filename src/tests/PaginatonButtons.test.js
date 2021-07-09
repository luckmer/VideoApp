import reducer, {
  Next,
  Prev,
  MaxPage,
  MinPage,
} from "../reducers/PaginationSlice";

describe("Next", () => {
  const previousState = {
    page: 1,
    limit: 6,
    maxPage: 5,
    minPage: 0,
  };
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      page: 1,
      limit: 6,
      maxPage: 5,
      minPage: 0,
    });
  });

  test("should increase page", () => {
    expect(reducer(previousState, Next(previousState.page + 1))).toEqual({
      limit: 6,
      maxPage: 5,
      minPage: 0,
      page: 2,
    });
  });

  test("should decrease page", () => {
    expect(reducer(previousState, Prev(previousState.page - 1))).toEqual({
      limit: 6,
      maxPage: 5,
      minPage: 0,
      page: 0,
    });
  });

  test("expect higher page", () => {
    expect(
      reducer(
        previousState,
        MaxPage(previousState.maxPage + previousState.limit)
      )
    ).toEqual({
      limit: 6,
      maxPage: 11,
      minPage: 0,
      page: 1,
    });
  });

  test("expect decreasing maxPage", () => {
    expect(
      reducer(
        previousState,
        MaxPage(previousState.maxPage - previousState.limit)
      )
    ).toEqual({
      limit: 6,
      maxPage: -1,
      minPage: 0,
      page: 1,
    });
  });

  test("expect min page", () => {
    expect(
      reducer(
        previousState,
        MinPage(previousState.maxPage + previousState.limit)
      )
    ).toEqual({
      limit: 6,
      maxPage: 5,
      minPage: 11,
      page: 1,
    });
  });

  test("expect decreasing page", () => {
    expect(
      reducer(
        previousState,
        MinPage(previousState.maxPage - previousState.limit)
      )
    ).toEqual({
      limit: 6,
      maxPage: 5,
      minPage: -1,
      page: 1,
    });
  });
});
