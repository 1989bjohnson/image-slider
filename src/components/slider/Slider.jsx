import { useEffect, useState } from "react";
import { SliderNav } from "../sliderNav/SliderNav";
import "./Slider.scss";

export const Slider = () => {
  const [images, setImages] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const accessKey = "cSF6lKb4EQbwIP7S1gP96EwMMCP481wB550ux60IrmM";
  const apiURL = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then(
        (result) => {
          setImages(result);
        },
        (error) => {
          console.log(`ERROR: ${error}`);
        }
      );
  }, []);

  const imageList = images.map((img, i) => {
    return (
      <div key={i} className={i === slideIndex ? "slide active" : "slide"}>
        <img src={img.urls.regular} />
      </div>
    );
  });

  const dotList = images.map((dot, i) => {
    return (
      <div
        key={i}
        className={i === slideIndex ? "dot hover active" : "dot hover"}
        onClick={() => onSlideChange(i)}
      ></div>
    );
  });

  const totalSlides = imageList.length - 1;

  const nextSlide = () => {
    slideIndex === totalSlides
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    slideIndex === 0
      ? setSlideIndex(totalSlides)
      : setSlideIndex(slideIndex - 1);
  };

  const onSlideChange = (type) => {
    switch (type) {
      case "next": {
        nextSlide();
        break;
      }
      case "prev": {
        prevSlide();
        break;
      }
      default: {
        console.log(`${type} is typeOf ${typeof type}`);
        setSlideIndex(type);
      }
    }
  };

  return (
    <div className="slider">
      {imageList}
      <SliderNav
        nextSlide={() => onSlideChange("next")}
        prevSlide={() => onSlideChange("prev")}
        dots={<div className="dot-container">{dotList}</div>}
      />
    </div>
  );
};
