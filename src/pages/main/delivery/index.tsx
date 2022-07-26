import styles from "./index.module.css";
import { Dummy } from "../../../assets";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fragment } from "react";
import ImageSlider from "../../../components/UI/image-slider";
import { Typography } from "@mui/material";
const DUMMY_DATA = [
  {
    url: Dummy,
    caption: "Slide 1",
  },
  {
    url: Dummy,
    caption: "Slide 2",
  },
  {
    url: Dummy,
    caption: "Slide 3",
  },
  {
    url: Dummy,
    caption: "Slide 4",
  },
  {
    url: Dummy,
    caption: "Slide 5",
  },
  {
    url: Dummy,
    caption: "Slide 6",
  },
];

const DeliveryPage = () => {
  
  return (
    <Fragment>
      <div className={styles.slider__container}>
        <div className={styles.slideshow__container}>
          <ImageSlider />
        </div>
      </div>
      {/* <Typography>hello</Typography> */}
    </Fragment>
  );
};

export default DeliveryPage;
