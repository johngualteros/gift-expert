/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GridGIf } from "../../src/components/GridGIf";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('AddCategory Component', () => { 
    const category = 'One Punch';
    test('should show the initial loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true
        });
        render(<GridGIf category={category}/>);
        expect(screen.getByText('Loading...'));
    });
    test('should show items when images are loaded', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/test.jpg',
                title: 'Test 3'
            },
            {
                id: '123',
                url: 'https://localhost/test.jpg',
                title: 'Test 2'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: false
        });
        render(<GridGIf category={category}/>);
        expect(screen.getByText(category));
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });
})