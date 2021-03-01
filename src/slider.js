import React, { useState } from "react";
import "./slider.styles.scss";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 2 && (
      <div className="sliderc">
        <MdNavigateBefore
          className="prev-button"
          size="30px"
          onClick={slideLeft}
        />

        <div className="games-card">
          <img className="aaa-aaa" src={images[index + 3]} alt={images} />
        </div>

        <div className="games-card">
          <img className="aaa-aaa" src={images[index + 1]} alt={images} />
        </div>
        <div className="games-card">
          <img className="aaa-aaa" src={images[index + 6]} alt={images} />
        </div>
        <MdNavigateNext
          className="next-button"
          size="30px"
          onClick={slideRight}
        />
      </div>
    )
  );
};

export default ImageSlider;
