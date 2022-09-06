import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./SliderNav.scss";

export const SliderNav = (props) => {
  return (
    <div className="slider-nav">
      <FontAwesomeIcon size="2x" icon={faChevronLeft} />
      <FontAwesomeIcon size="2x" icon={faChevronRight} />
    </div>
  );
};
