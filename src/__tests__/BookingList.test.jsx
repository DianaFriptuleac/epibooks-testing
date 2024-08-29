import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import history from "../assets/books/history.json";

//Verifico che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.
describe("Check if as many bootstrap cards are rendered as there are books in the json file", () => {
  it("mounts correctly all the cards at launch", async () => {
    //testo il BookingList con json di history
    render(<BookList libri={history} />);
    //utilizzo l'immagine della card

    const cardImage = await screen.findAllByRole("img");
    //controllo la lunghezza dell'array
    expect(cardImage.length).toBe(history.length);
  });

  //Verifico che il filtraggio dei libri tramite navbar
  it("filters books based on input placeholder", () => {
    render(<BookList libri={history} />);

    // Trovo l'input della barra di ricerca
    const myPlaceholder = screen.getByPlaceholderText(/cerca titolo libro/i);

    // Filtra con un libro che non corrisponde a nessun libro del mio json
    fireEvent.change(myPlaceholder, { target: { value: "Nonexistent Book" } });

    const noFind = screen.queryAllByText(/the human story/i);
    expect(noFind.length).toBe(0);
  });
});
