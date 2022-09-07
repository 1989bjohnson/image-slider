import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./SliderNav.scss";

export const SliderNav = (props) => {
  return (
    <div className="slider-nav">
      <div className="hover" onClick={() => props.prevSlide()}>
        <FontAwesomeIcon size="2x" icon={faChevronLeft} />
      </div>
      {props.dots}
      <div className="hover" onClick={() => props.nextSlide()}>
        <FontAwesomeIcon size="2x" icon={faChevronRight} />
      </div>
    </div>
  );
};
