import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("Render Hello World as test ", () => {
    // Arrange
    render(<Greeting />);
    // Act
    //...nothing

    //Assert
    const helloworldelement = screen.getByText("Hello World", { exact: false });
    expect(helloworldelement).toBeInTheDocument();
  });

  test("render 'it's good to see you' if button was not clicked", () => {
    render(<Greeting />);

    const paraElement = screen.getByText("it's good to see you", {
      exact: false,
    });

    expect(paraElement).toBeInTheDocument();
  });

  test("render 'changed!' if button clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const paraElement = screen.getByText("changed!", {
      exact: false,
    });

    expect(paraElement).toBeInTheDocument();
  });

  test("Not render 'it's good to see you' if button was clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    // getByText retur an error if there is no such element exist, so you query by text
    // const paraElement = screen.getByText("it's good to see you", {
    //   exact: false,
    // });

    const paraElement = screen.queryByText("it's good to see you", {
      exact: false,
    });

    expect(paraElement).toBeNull();
  });
});
