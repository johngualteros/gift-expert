import { fireEvent, render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

/* eslint-disable no-undef */
describe('GiftExpertApp Component', () => {
    const setup = () => {
        render(<GiftExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        return {
            input,
            form
        }
    }   
    test("Should add category if it's not repeated", () => {
        // Mi app tiene como state inicial de las categorias "Demon Slayer".
        const { input, form } = setup();
        fireEvent.change(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);

        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
      });
})