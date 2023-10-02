/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs', () => { 
    test('should return a initial state', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, loading } = result.current;
        expect(images).toEqual([]);
        expect(loading).toBe(true);
    });
    test('should return an array of images and is loading in false', async () => {
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(
            () => {
                expect(result.current.images.length).toBe(10);
                expect(result.current.loading).toBe(false);
            },
            { timeout: 5000 }
        );
    });
 })