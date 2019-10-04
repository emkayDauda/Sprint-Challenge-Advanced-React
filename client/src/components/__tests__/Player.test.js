import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import { Player } from "../PlayerList";

let tools;

beforeEach(() => {
  rtl.cleanup();
  const player = {
      name: "Adediran Ismail",
      id: 123,
      country: "Nigeria",
      searches: "90"
  }
  tools = rtl.render(<Player player={player} />);
});

describe('Player component', () => {
    it('shows correct user', () => {
        expect(tools.queryByText('Adediran Ismail')).toBeInTheDocument()
    })
})