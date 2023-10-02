import { getGifs } from "../../src/helpers/getGifs";

/* eslint-disable no-undef */
describe('getGifs', () => { 
    test('should return 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
    test('should return a array of gifts', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs).toEqual(expect.any(Array));
    })
    test('should the first element be a object', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })
 })