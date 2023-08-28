import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const setImagesWithGifs = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setLoading(false);
    }
    useEffect(() => {
        setImagesWithGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        images,
        loading
    }
}
