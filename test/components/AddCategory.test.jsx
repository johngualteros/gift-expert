import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

/* eslint-disable no-undef */
describe('AddCategory Component', () => { 
    test('should change the input text', () => {
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'test'}});
        expect(input.value).toBe('test');
    });
    test('should call onNewCategory when the form is submitted and input have value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const inputValue = 'Saitama';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    test('should not call onNewCategory when the form is submitted and input have not value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
})