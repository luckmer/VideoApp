import { buttonsPanel } from "../Components/Button/Buttons";

describe("ButtonsPanel", () => {
  test("expect the same array", () => {
    const result = [
      { id: 5, name: "new" },
      { id: 4, name: "favorite" },
      { id: 1, name: "row" },
      { id: 3, name: "demo" },
      { id: 2, name: "clear" },
    ];

    expect(buttonsPanel).toEqual(result);
  });

  test("expect length", () => {
    expect(buttonsPanel).toHaveLength(5);
  });
});
