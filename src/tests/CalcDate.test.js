import CalcDate from "../Components/ApiFetch/CalcDate";

describe("CalcDate", () => {
  test("expect date", () => {
    const day = {
      date: "2020-05-28T14:25:46+00:00",
    };
    expect(CalcDate(day)).toBe("28-5-2020");
  });

  test("expect different  date", () => {
    const day = {
      date: "2021-05-11T19:30:03Z",
    };
    expect(CalcDate(day)).toBe("11-5-2021");
  });
});
