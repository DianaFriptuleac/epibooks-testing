//Verifico che, cliccando su un libro, il suo bordo cambi colore.
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import history from "../assets/books/history.json";

describe("Color of single book", () => {
  it("changes the red color of the card border when clicked", () => {
    render(<BookList libri={history} />);

    // Trovo il primo libro
    const singleBook = screen.getAllByTestId("card-test");

    expect(singleBook[0]).not.toHaveClass("border-danger");

    // Clicco sul libro
    fireEvent.click(singleBook[0]);

    // Rendo possibile che l'elemento cliccato cambi bordo a rosso (con lo stile di bootstrap)
    expect(singleBook[0]).toHaveClass("border-danger");
  });
});
