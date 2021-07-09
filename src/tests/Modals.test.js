import { ModalHook } from "../Components/Modal/ModalHook";
import { renderHook, act } from "@testing-library/react-hooks";

describe("ModalHook", () => {
  test("should wait for data", () => {
    const { result } = renderHook(() => ModalHook());

    act(() => {
      result.current.handleChange();
    });

    expect(result.current.link).toBe("");
  });
});
