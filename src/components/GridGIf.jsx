/* eslint-disable react-hooks/exhaustive-deps */
import GiftItem from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const GridGIf = ({category}) => {  
  const { images, loading } = useFetchGifs(category);
  
  if( loading ) return <p>Loading...</p>;

  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
          {
            images.map( img => <GiftItem key={img.id} {...img} /> )
          }
        </div>
    </>
  )
}

GridGIf.propTypes = {
  category: PropTypes.string.isRequired
}
