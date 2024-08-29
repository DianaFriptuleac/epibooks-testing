//Verifico che il componente CommentArea venga renderizzato correttamente.

import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("Mount correctly ComentsArea component", () => {
  it("render comments at lunch", async () => {
    render(<CommentArea asin={"1944866191"} />);
    const comments = await screen.findAllByTestId("comments-list");
    expect(comments.length).toBeGreaterThan(0);
  });
});
