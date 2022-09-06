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
          console.log(result);
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
        <img src={img.urls.small} />
      </div>
    );
  });

  return (
    <div className="slider">
      {imageList}
      <SliderNav />
    </div>
  );
};
