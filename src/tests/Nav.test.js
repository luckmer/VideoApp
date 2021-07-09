import NavBar from "../Components/Nav/Nav";
import { render } from "@testing-library/react";

describe("NavBar", () => {
  test("should render NavBar", () => {
    render(<NavBar />);
  });
});
