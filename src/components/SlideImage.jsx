import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const SlideImage = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="slice--content">
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        {images?.map((element) => (
          <Carousel.Item key={element.id}>
            <img className="slice--img" src={element.url} alt={element.title} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideImage;
