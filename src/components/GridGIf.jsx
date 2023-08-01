import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

export const GridGIf = ({category}) => {  
  const [images, setImages] = useState([]);
  const setImagesWithGifs = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }
  useEffect(() => {
    setImagesWithGifs();
  }, [])
  return (
    <>
        <h3>{category}</h3>
        <ol>
          {
            images.map( ({id, title, url}) => (
              <li key={id}>
                <p>{title}</p>
                <img src={url} alt="" />
              </li>
            ))
          }
        </ol>
    </>
  )
}
