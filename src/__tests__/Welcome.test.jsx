// to-do tests:
// - mi aspetto che all'avvio il componente welcome venga montato correttamente,
//quindi controllo se il titolo e presente


import { screen, render } from "@testing-library/react"
import Welcome from "../components/Welcome"

describe("Mount correctly the Welcome componen at launch testing", () =>{
    it("Welcome title testing", () =>{
        render(<Welcome/>)
        const welcomeTitle=screen.getByText(/enciclopedia italiana/i)
        expect(welcomeTitle).toBeInTheDocument()
    })

})