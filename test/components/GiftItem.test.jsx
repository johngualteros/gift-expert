// import { checkPropTypes } from "prop-types";
import GiftItem from "../../src/components/GiftItem";
import { render, screen } from "@testing-library/react";

/* eslint-disable no-undef */
describe('Giftitem Component', () => { 
    const title = 'saitama';
    const url = 'https://test.com';
    test('should match the snapshot', () => {
        const { container } = render(<GiftItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    });
    test('should render the image and alt indicated', () => {
        render(<GiftItem title={title} url={url}/>);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url + '/');
        expect( alt ).toBe(title);
    });
    test('should render the title indicated', () => {
        render(<GiftItem title={title} url={url}/>);
        const titleRender = screen.getByText(title);
        expect( titleRender ).toBeTruthy();
    });
 })