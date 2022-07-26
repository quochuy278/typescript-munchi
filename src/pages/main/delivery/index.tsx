import styles from "./index.module.css";
import { Dummy } from "../../../assets";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fragment } from "react";
import ImageSlider from "../../../components/UI/image-slider";
import { Typography } from "@mui/material";

import TrendingList from "../../../components/Trending/trendinglist";

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
      <ImageSlider />
      <div className={styles.delivery__container}>
        <Typography variant="h1">Trending right now</Typography>
        <div className={styles.trending__container}>
          <TrendingList />
        </div>
        {/* Cards slider */}

        <Typography variant="h1">Choose your vibe</Typography>
        <Typography variant="h1">Venues delivering to you</Typography>
      </div>
    </Fragment>
  );
};

export default DeliveryPage;
