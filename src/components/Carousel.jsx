import { useState } from "react";
import ArrowBack from "../assets/icons/arrowBack.png";
import ArrowForward from "../assets/icons/arrowForward.png";


const Carousel = (props) => {
    const images = props.images;
    const [index, setIndex] = useState(0); 

    const increment = () => {
    let newIndex = index + 1;
    if (newIndex > images.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  const decrement = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setIndex(newIndex);
  };
  
  return (
     <div className="carousel">
      <div className="carousel_container">
        <img
          src={images[index]}
          alt="kasa photos logements"
          className="carousel_container_img"
        />

       { images.length > 1 && 
       <>
       <div className="carousel_container_arrow">
          <img
            src={ArrowBack}
            alt="flèche directionnelle gauche"
            onClick={decrement}
          />

          <img
            src={ArrowForward}
            alt="flèche directionnelle droite"
            onClick={increment}
          />
        </div>
        <div className="carousel_container_infoPics">
          <p>
            {index + 1}/{images.length}
          </p>
        </div>
        </>
        }
      </div>
    </div>
  );
};
 

export default Carousel